<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\KategoriPaket;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KategoriPaketController extends Controller
{
    public function index()
    {

        $kategori = KategoriPaket::all();
        return Inertia::render('Admin/KategoriPaket/Index', [
            'kategori' => $kategori,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/KategoriPaket/TambahData');
    }

    public function edit($id)
    {
        $kategori = KategoriPaket::findOrFail($id);
        return Inertia::render('Admin/KategoriPaket/Edit', [
            'kategori' => $kategori,
        ]);
    }

    public function store(Request $request)
    {
        // Validasi input
        $validated = $request->validate([
            'nama' => 'required',
        ]);

        // Buat kategori paket baru
        KategoriPaket::create([
            'nama' => $validated['nama'],
        ]);

        // Redirect atau respon
        return redirect()->route('kategori-paket.index')->with('success', 'Kategori paket berhasil ditambahkan');
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'nama' => 'required',
        ]);

        $kategori = KategoriPaket::findOrFail($id);

        $kategori->update([
            'nama' => $validated['nama'],
        ]);

        return redirect()->route('kategori-paket.index')->with('success', 'Kategori paket berhasil diubah');
    }
}
