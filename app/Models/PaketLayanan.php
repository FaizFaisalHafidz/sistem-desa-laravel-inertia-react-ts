<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PaketLayanan extends Model
{
    protected $table = 'paket_layanan';
    protected $fillable = ['nama', 'kategori_id', 'deskripsi', 'gambar', 'harga_per_hari', 'is_active'];

    public function kategori()
    {
        return $this->belongsTo(KategoriPaket::class, 'kategori_id');
    }
}
