<?php

namespace Database\Seeders;

use App\Models\PaketLayanan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PaketLayananSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'nama' => 'Paket 1',
                'kategori_id' => 1,
                'deskripsi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti quis eligendi ipsam veniam quasi sapiente accusamus nam, fugiat ducimus harum tempora reprehenderit officiis consequuntur magnam perferendis quibusdam qui error.',
                'gambar' => 'https://flashcode-sandbox.my.id/images/hero/studio.jpg',
                'harga_per_hari' => 100000,
            ],
            [
                'nama' => 'Paket 2',
                'kategori_id' => 2,
                'deskripsi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti quis eligendi ipsam veniam quasi sapiente accusamus nam, fugiat ducimus harum tempora reprehenderit officiis consequuntur magnam perferendis quibusdam qui error.',
                'gambar' => 'https://flashcode-sandbox.my.id/images/hero/studio.jpg',
                'harga_per_hari' => 200000,
            ],
            [
                'nama' => 'Paket 3',
                'kategori_id' => 3,
                'deskripsi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti quis eligendi ipsam veniam quasi sapiente accusamus nam, fugiat ducimus harum tempora reprehenderit officiis consequuntur magnam perferendis quibusdam qui error.',
                'gambar' => 'https://flashcode-sandbox.my.id/images/hero/studio.jpg',
                'harga_per_hari' => 300000,
            ],
            [
                'nama' => 'Paket 4',
                'kategori_id' => 3,
                'deskripsi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti quis eligendi ipsam veniam quasi sapiente accusamus nam, fugiat ducimus harum tempora reprehenderit officiis consequuntur magnam perferendis quibusdam qui error.',
                'gambar' => 'https://flashcode-sandbox.my.id/images/hero/studio.jpg',
                'harga_per_hari' => 300000,
            ],
            [
                'nama' => 'Paket 5',
                'kategori_id' => 3,
                'deskripsi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti quis eligendi ipsam veniam quasi sapiente accusamus nam, fugiat ducimus harum tempora reprehenderit officiis consequuntur magnam perferendis quibusdam qui error.',
                'gambar' => 'https://flashcode-sandbox.my.id/images/hero/studio.jpg',
                'harga_per_hari' => 300000,
            ],
            [
                'nama' => 'Paket 6',
                'kategori_id' => 3,
                'deskripsi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti quis eligendi ipsam veniam quasi sapiente accusamus nam, fugiat ducimus harum tempora reprehenderit officiis consequuntur magnam perferendis quibusdam qui error.',
                'gambar' => 'https://flashcode-sandbox.my.id/images/hero/studio.jpg',
                'harga_per_hari' => 300000,
            ],
        ];

        foreach ($data as $paket) {
            PaketLayanan::updateOrCreate($paket);
        }
    }
}
