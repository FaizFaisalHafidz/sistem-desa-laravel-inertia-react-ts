<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pembayaran extends Model
{
    protected $table = 'pembayaran';

    protected $fillable = [
        'kode',
        'cicilan_id',
        'user_id',
        'jumlah',
        'status',
        'metode_pembayaran',
        'tanggal_bayar',
    ];

    public function cicilan()
    {
        return $this->belongsTo(Cicilan::class, 'cicilan_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
