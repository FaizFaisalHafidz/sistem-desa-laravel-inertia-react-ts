<?php

namespace App\Http\Controllers;

use App\Models\Cicilan;
use App\Models\Pembayaran;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ManajemenPembayaranController extends Controller
{
    public function index()
    {
        $pembayaran = Pembayaran::with('cicilan', 'kode')->get();

        // dd($pembayaran->toArray());

        return Inertia::render('Admin/ManajemenPembayaran/Index', [
            'pembayaran' => $pembayaran,
            'user' => Auth::user(),
        ]);
    }
}
