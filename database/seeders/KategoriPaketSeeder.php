<?php

namespace Database\Seeders;

use App\Models\KategoriPaket;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KategoriPaketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            ['nama' => 'Wedding Package'],
            ['nama' => 'Birthday Package'],
            ['nama' => 'Meeting Package'],
            ['nama' => 'Gathering Package'],
        ];

        foreach ($data as $item) {
           KategoriPaket::updateOrCreate($item);
        }
    }
}
