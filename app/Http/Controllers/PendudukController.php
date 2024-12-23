<?php

namespace App\Http\Controllers;

use App\Models\Penduduk;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PendudukController extends Controller
{
    public function index(Request $request)
    {

        $search = $request->input('search', '');

        $penduduks = Penduduk::query()
            ->when($search, function ($query, $search) {
                $query->where('nama', 'like', "%{$search}%")
                    ->orWhere('nik', 'like', "%{$search}%");
            })
            ->paginate(5);

        return Inertia::render('Penduduk/Index', [
            'penduduks' => $penduduks->items(),
            'pagination' => [
                'current_page' => $penduduks->currentPage(),
                'last_page' => $penduduks->lastPage(),
                'total' => $penduduks->total(),
            ],
            'search' => $search,
        ]);
    }

    public function detail($id)
    {
        $penduduk = Penduduk::find($id);

        return Inertia::render('Penduduk/Detail', [
            'penduduk' => $penduduk
        ]);
    }

    public function create()
    {
        return Inertia::render('Penduduk/Create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nik' => 'required|unique:penduduk,nik|max:16',
            'nama' => 'required|string|max:255',
            'tanggal_lahir' => 'required|date',
            'jenis_kelamin' => 'required|string',
            'alamat' => 'required|string',
            'status_keluarga' => 'required|string',
            'agama' => 'required|string',
            'pendidikan' => 'required|string',
            'pekerjaan' => 'required|string',
        ]);


        Penduduk::create($validatedData);

        return redirect()->route('penduduk.index')->with('success', 'Data berhasil ditambahkan!');
    }
}
