<?php

namespace App\Http\Controllers\Front;

use Inertia\Inertia;
use App\Models\PaketLayanan;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Cicilan;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class PaketLayananController extends Controller
{
    public function index()
    {

        $pakets = PaketLayanan::with('kategori')->where('is_active', 1)->get();

        // dd($pakets->toArray());
        return Inertia::render('PaketLayanan/Index', [
            'pakets' => $pakets,
            'user' => Auth::user(),
        ]);
    }

    public function detail($id)
    {
        $paket = PaketLayanan::with('kategori')->where('id', $id)->first();

        return Inertia::render('PaketLayanan/Detail', [
            'paket' => $paket,
            'user' => Auth::user(),
        ]);
    }

    public function bookingPage($id)
    {
        $paket = PaketLayanan::with('kategori')->where('id', $id)->first();

        return Inertia::render('PaketLayanan/Booking', [
            'paket' => $paket,
            'user' => Auth::user(),
        ]);
    }

    public function booking(Request $request, $id)
    {
        $validated = $request->validate([
            'tanggal_dari' => 'required',
            'tanggal_sampai' => 'required',
            'jam_dari' => 'required',
            'jam_sampai' => 'required',
            'alamat' => 'required',
            'no_telp' => 'required',
            'cicilan' => 'required',
        ]);

        // dd($validated);
        
        $paket = PaketLayanan::find($id);
        $user = Auth::user();
        $jumlah =
        $cicilan = $validated['cicilan'];
        $harga = $paket->harga_per_hari;
        $tanggal_dari = Carbon::parse($validated['tanggal_dari']);
        $tanggal_sampai = Carbon::parse($validated['tanggal_sampai']);
        $jam_dari = $validated['jam_dari'];
        $jam_sampai = $validated['jam_sampai'];
        $alamat = $validated['alamat'];
        $no_telp = $validated['no_telp'];

        $booking = Booking::create([
            'kode' => 'ELP-' . $paket->id . '-' . time(),
            'paket_id' => $paket->id,
            'user_id' => $user->id,
            'tanggal_dari' => $tanggal_dari,
            'tanggal_sampai' => $tanggal_sampai,
            'jam_dari' => $jam_dari,
            'jam_sampai' => $jam_sampai,
            'alamat' => $alamat,
            'no_telp' => $no_telp,
            'status' => 'pending',
        ]);

        $cicilanAmounts = [];
        switch ($cicilan) {
            case 1:
                $cicilanAmounts = [$harga];
                break;
            case 2:
                $cicilanAmounts = [$harga * 0.5, $harga * 0.5];
                break;
        }

        $interval = $tanggal_sampai->diffInDays($tanggal_dari) / $cicilan;
        foreach ($cicilanAmounts as $index => $amount) {
            $dueDate = $tanggal_dari->copy()->addDays(round($interval * ($index + 1)));

            Cicilan::create([
                'booking_id' => $booking->id,
                'user_id' => $user->id,
                'jumlah' => round($amount),
                'due_date' => $dueDate->lessThan($tanggal_sampai) ? $dueDate : $tanggal_sampai,
                'cicilan_ke' => $index + 1,
                'status' => 'Belum dibayar',
            ]);
        }

        return redirect()->route('paket-layanan.index');
    }
}
