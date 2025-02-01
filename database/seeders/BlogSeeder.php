<?php

namespace Database\Seeders;

use App\Models\Blog;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'judul' => 'Blog Pertama',
                'slug' => 'blog-pertama',
                'konten' => 'Ini adalah blog pertama saya.',
                'gambar' => 'https://flashcode-sandbox.my.id/images/hero/studio.jpg',
                'created_by' => 1,
                'updated_by' => 1,
                'is_published' => true,
            ],
            [
                'judul' => 'Blog Kedua',
                'slug' => 'blog-kedua',
                'konten' => 'Ini adalah blog kedua saya.',
                'gambar' => 'https://flashcode-sandbox.my.id/images/hero/studio.jpg',
                'created_by' => 1,
                'updated_by' => 1,
                'is_published' => true,
            ],
            [
                'judul' => 'Blog Ketiga',
                'slug' => 'blog-ketiga',
                'konten' => 'Ini adalah blog ketiga saya.',
                'gambar' => 'https://flashcode-sandbox.my.id/images/hero/studio.jpg',
                'created_by' => 1,
                'updated_by' => 1,
                'is_published' => true,
            ],
        ];

        foreach ($data as $blog) {
            Blog::updateOrCreate($blog);
        }
    }
}
