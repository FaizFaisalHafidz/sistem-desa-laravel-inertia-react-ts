<?php

namespace App\Http\Controllers\Front;

use Inertia\Inertia;
use App\Models\PaketLayanan;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
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
}
