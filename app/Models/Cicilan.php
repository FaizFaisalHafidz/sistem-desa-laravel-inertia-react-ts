<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cicilan extends Model
{
    protected $table = 'cicilan';

    protected $fillable = [
        'booking_id',
        'user_id',
        'cicilan_ke',
        'jumlah',
        'status',
        'due_date',
    ];

    public function booking()
    {
        return $this->belongsTo(Booking::class, 'booking_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function pembayaran()
    {
        return $this->hasMany(Pembayaran::class, 'cicilan_id');
    }
}
