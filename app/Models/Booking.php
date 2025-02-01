<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $table = 'booking';

    protected $fillable = [
        'kode',
        'paket_id',
        'user_id',
        'tanggal_dari',
        'tanggal_sampai',
        'jam_dari',
        'jam_sampai',
        'alamat',
        'status',
        'no_telp',
    ];

    public function paket()
    {
        return $this->belongsTo(PaketLayanan::class, 'paket_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function cicilan()
    {
        return $this->hasMany(Cicilan::class, 'booking_id');
    }
}
