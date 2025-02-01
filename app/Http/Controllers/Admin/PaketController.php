<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\KategoriPaket;
use App\Models\PaketLayanan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PaketController extends Controller
{
    public function index()
    {
        $pakets = PaketLayanan::with('kategori')->get();

        return Inertia::render('Admin/Paket/Index', [
            'pakets' => $pakets,
        ]);
    }

    public function create()
    {

        $kategori = KategoriPaket::all();
        return Inertia::render('Admin/Paket/TambahData', [
            'kategori' => $kategori,
        ]);
    }

    public function edit($id)
    {
        $paket = PaketLayanan::findOrFail($id);
        $kategori = KategoriPaket::all();
        return Inertia::render('Admin/Paket/Edit', [
            'paket' => $paket,
            'kategori' => $kategori,
        ]);
    }

    public function store(Request $request)
    {
        // Validasi input
        $validated = $request->validate([
            'nama' => 'required',
            'kategori_id' => 'required',
            'deskripsi' => 'required',
            'harga_per_hari' => 'required',
            'is_active' => 'required',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg',
        ]);

        // Upload gambar
        $gambarUrl = null;
        if ($request->hasFile('gambar')) {
            $path = $request->file('gambar')->store('paket-layanan', 'public');
            $gambarUrl = env('APP_URL') . "/storage/" . $path;
        }

        // Buat paket layanan baru
        PaketLayanan::create([
            'nama' => $validated['nama'],
            'kategori_id' => $validated['kategori_id'],
            'deskripsi' => $validated['deskripsi'],
            'harga_per_hari' => $validated['harga_per_hari'],
            'is_active' => $validated['is_active'],
            'gambar' => $gambarUrl,
        ]);

        // Redirect atau respon
        return redirect()->route('manajemen-paket.index')->with('success', 'Paket layanan berhasil ditambahkan');
    }
}
