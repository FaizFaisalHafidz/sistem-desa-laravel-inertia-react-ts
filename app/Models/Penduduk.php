<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Penduduk extends Model
{

    protected $table = 'penduduk';
    protected $fillable = [
        'nik',
        'nama',
        'tanggal_lahir',
        'jenis_kelamin',
        'alamat',
        'status_keluarga',
        'agama',
        'pendidikan',
        'pekerjaan',
    ];
}
