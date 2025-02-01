<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KategoriPaket extends Model
{
    protected $table = 'kategori_paket';
    protected $fillable = ['nama'];

    public function paket()
    {
        return $this->hasMany(PaketLayanan::class, 'kategori_id');
    }
}
