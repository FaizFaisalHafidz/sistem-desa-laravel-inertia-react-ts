<?php

namespace App\Http\Controllers;

use App\Mail\TransactionSuccessMail;
use App\Models\Cicilan;
use App\Models\Pembayaran;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Midtrans\Config;
use Midtrans\Snap;

class PembayaranController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $pembayaran = Cicilan::with('booking.paket')->where('user_id', $user->id)->get();

        // dd($pembayaran->toArray());

        return Inertia::render('Pembayaran/Index', [
            'pembayaran' => $pembayaran,
            'user' => Auth::user(),
        ]);
    }

    public function bayar(Request $request)
    {
        $request->validate([
            'cicilan_id' => 'required|exists:cicilan,id',
        ]);

        // Ambil data cicilan
        $cicilan = Cicilan::findOrFail($request->cicilan_id);

        // Konfigurasi Midtrans
        Config::$serverKey = config('midtrans.server_key');
        Config::$isProduction = config('midtrans.is_production');
        Config::$isSanitized = true;
        Config::$is3ds = true;


        $totalBayar = $request->total_bayar;
        // Buat parameter transaksi
        $transactionDetails = [
            'order_id' => 'ELP-' . $cicilan->id . '-' . time(),
            'gross_amount' => $totalBayar,
        ];

        $customerDetails = [
            'first_name' => Auth::user()->name,
            'email' => Auth::user()->email,
        ];

        $itemDetails = [
            [
                'id' => $cicilan->id,
                'price' => $totalBayar,
                'quantity' => 1,
                'name' => 'Pembayaran Cicilan Ke-' . $cicilan->cicilan_ke,
            ],
        ];

        $payload = [
            'transaction_details' => $transactionDetails,
            'customer_details' => $customerDetails,
            'item_details' => $itemDetails,
        ];

        try {
            $snapToken = Snap::getSnapToken($payload);

            return response()->json(['snapToken' => $snapToken]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }


    public function callback(Request $request)
    {
        // Konfigurasi Midtrans untuk verifikasi transaksi
        Config::$serverKey = config('midtrans.server_key');
        Config::$isProduction = config('midtrans.is_production');

        // Verifikasi status transaksi
        $status = $request->input('transaction_status');
        $orderId = $request->input('order_id');
        $cicilanId = substr($orderId, 4, 1);

        Log::info("CICILAN ID : {$cicilanId}");

        $cicilan = Cicilan::find($cicilanId);

        if (!$cicilan) {
            return response()->json(['error' => 'Cicilan not found'], 404);
        }

        $userId = $cicilan->user_id;
        $metodePembayaran = $request->input('payment_type');
        $jumlahPembayaran = $request->input('gross_amount');
        $tanggalPembayaran = now();


        // **Ambil metode pembayaran dari VA Numbers atau Payment Type**
        $metodePembayaran = $request->input('payment_type'); // Default ke payment_type

        // Jika menggunakan bank transfer, ambil nama bank dari `va_numbers`
        if ($metodePembayaran === 'bank_transfer' && isset($request->va_numbers)) {
            $vaNumbers = $request->input('va_numbers');
            if (is_array($vaNumbers) && count($vaNumbers) > 0) {
                $metodePembayaran = strtoupper($vaNumbers[0]['bank']); // Contoh: BCA, MANDIRI
            }
        } elseif ($metodePembayaran === 'qris') {
            $metodePembayaran = 'QRIS';
        }

        // Update status cicilan berdasarkan status transaksi
        switch ($status) {
            case 'capture':
                // Pembayaran berhasil dengan kartu kredit
                if ($request->input('fraud_status') == 'accept') {
                    $cicilan->status = 'Dibayar';
                    $this->createPaymentRecord($userId, $cicilan->id, 'Berhasil', $metodePembayaran, $jumlahPembayaran, $tanggalPembayaran);
                    $this->sendTransactionSuccessMail($cicilan, $request, $metodePembayaran);
                } else {
                    $cicilan->status = 'Ditolak';
                }
                break;

            case 'settlement':
                $cicilan->status = 'Dibayar';
                $this->createPaymentRecord($userId, $cicilan->id, 'Berhasil', $metodePembayaran, $jumlahPembayaran, $tanggalPembayaran);
                $this->sendTransactionSuccessMail($cicilan, $request, $metodePembayaran);
                break;

            case 'pending':
                // Pembayaran sedang menunggu
                $cicilan->status = 'Menunggu Pembayaran';
                break;

            case 'expire':
                // Pembayaran sudah kadaluarsa
                $cicilan->status = 'Kadaluarsa';
                break;

            case 'cancel':
                // Pembayaran dibatalkan
                $cicilan->status = 'Dibatalkan';
                break;

            default:
                $cicilan->status = 'Gagal';
                break;
        }

        // Simpan perubahan status cicilan
        $cicilan->save();

        // Log status transaksi
        Log::info("Cicilan ID {$cicilanId} status updated to {$cicilan->status}");

        return response()->json(['message' => 'Status cicilan berhasil diperbarui']);
    }

    protected function createPaymentRecord($userId, $cicilanId, $status, $metodePembayaran, $jumlahPembayaran, $tanggalPembayaran)
    {
        try {
            DB::beginTransaction();

            Pembayaran::create([
                'user_id' => $userId,
                'cicilan_id' => $cicilanId,
                'status' => $status,
                'kode' => 'CICILAN-' . $cicilanId . '-' . time(),
                'metode_pembayaran' => $metodePembayaran,
                'jumlah' => $jumlahPembayaran,
                'tanggal_pembayaran' => $tanggalPembayaran,
            ]);

            DB::commit();
            Log::info("Pembayaran berhasil dibuat untuk cicilan ID {$cicilanId}");
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error("Gagal membuat pembayaran: " . $e->getMessage());
        }
    }

    protected function sendTransactionSuccessMail($cicilan, $request, $payment_method)
    {
        if (env("MAIL_PASSWORD")) {
            $datas = [
                "user" => (object) [
                    "name" => $cicilan->user->name
                ],
                "transaction" => (object) [
                    "order_id" => $request->input('order_id'),
                    "amount" => $request->input('gross_amount'),
                    "transaction_time" => Carbon::parse($request->input('transaction_time'))
                        ->locale('id')
                        ->isoFormat('D MMMM YYYY - HH:mm'),
                    "payment_method" => $payment_method,
                ],
                "item" => (object) [
                    "name" => 'Pembayaran Cicilan Ke-' . $cicilan->cicilan_ke
                ],
            ];
            Mail::to($cicilan->user->email)->send(new TransactionSuccessMail($datas));
        }
    }
}
