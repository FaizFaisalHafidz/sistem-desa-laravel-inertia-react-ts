<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $table = 'blogs';
    protected $fillable = [
        'judul',
        'slug',
        'konten',
        'gambar',
        'created_by',
        'updated_by',
        'is_published'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
