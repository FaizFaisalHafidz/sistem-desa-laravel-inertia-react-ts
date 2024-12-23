<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PendudukSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('penduduk')->insert([
            [
                'nik' => '3201012000010001',
                'nama' => 'Andi Wijaya',
                'tanggal_lahir' => '2000-01-20',
                'jenis_kelamin' => 'Laki-laki',
                'alamat' => 'Jl. Merdeka No. 1',
                'status_keluarga' => 'Kepala Keluarga',
                'agama' => 'Islam',
                'pendidikan' => 'S1',
                'pekerjaan' => 'Pegawai Negeri',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'nik' => '3201012000020002',
                'nama' => 'Siti Aminah',
                'tanggal_lahir' => '1995-02-15',
                'jenis_kelamin' => 'Perempuan',
                'alamat' => 'Jl. Pahlawan No. 10',
                'status_keluarga' => 'Istri',
                'agama' => 'Islam',
                'pendidikan' => 'SMA',
                'pekerjaan' => 'Ibu Rumah Tangga',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'nik' => '3201012000030003',
                'nama' => 'Budi Santoso',
                'tanggal_lahir' => '1980-03-10',
                'jenis_kelamin' => 'Laki-laki',
                'alamat' => 'Jl. Kemerdekaan No. 23',
                'status_keluarga' => 'Anak',
                'agama' => 'Kristen',
                'pendidikan' => 'S2',
                'pekerjaan' => 'Dosen',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'nik' => '3201012000040004',
                'nama' => 'Dewi Lestari',
                'tanggal_lahir' => '1985-04-05',
                'jenis_kelamin' => 'Perempuan',
                'alamat' => 'Jl. Sudirman No. 5',
                'status_keluarga' => 'Anak',
                'agama' => 'Hindu',
                'pendidikan' => 'SMA',
                'pekerjaan' => 'Wiraswasta',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'nik' => '3201012000050005',
                'nama' => 'Eko Prasetyo',
                'tanggal_lahir' => '1978-05-15',
                'jenis_kelamin' => 'Laki-laki',
                'alamat' => 'Jl. Diponegoro No. 8',
                'status_keluarga' => 'Kepala Keluarga',
                'agama' => 'Buddha',
                'pendidikan' => 'D3',
                'pekerjaan' => 'Teknisi',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'nik' => '3201012000060006',
                'nama' => 'Fitri Anisa',
                'tanggal_lahir' => '1990-06-10',
                'jenis_kelamin' => 'Perempuan',
                'alamat' => 'Jl. Pemuda No. 12',
                'status_keluarga' => 'Istri',
                'agama' => 'Islam',
                'pendidikan' => 'S1',
                'pekerjaan' => 'Guru',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'nik' => '3201012000070007',
                'nama' => 'Gilang Ramadhan',
                'tanggal_lahir' => '2005-07-18',
                'jenis_kelamin' => 'Laki-laki',
                'alamat' => 'Jl. Ahmad Yani No. 3',
                'status_keluarga' => 'Anak',
                'agama' => 'Islam',
                'pendidikan' => 'SMP',
                'pekerjaan' => 'Pelajar',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'nik' => '3201012000080008',
                'nama' => 'Hesti Puspita',
                'tanggal_lahir' => '1992-08-25',
                'jenis_kelamin' => 'Perempuan',
                'alamat' => 'Jl. Gatot Subroto No. 18',
                'status_keluarga' => 'Anak',
                'agama' => 'Kristen',
                'pendidikan' => 'SMA',
                'pekerjaan' => 'Kasir',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'nik' => '3201012000090009',
                'nama' => 'Imam Mahdi',
                'tanggal_lahir' => '1983-09-12',
                'jenis_kelamin' => 'Laki-laki',
                'alamat' => 'Jl. Proklamasi No. 9',
                'status_keluarga' => 'Kepala Keluarga',
                'agama' => 'Islam',
                'pendidikan' => 'S1',
                'pekerjaan' => 'Pengusaha',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'nik' => '3201012000100010',
                'nama' => 'Joko Susilo',
                'tanggal_lahir' => '1998-10-22',
                'jenis_kelamin' => 'Laki-laki',
                'alamat' => 'Jl. Sutomo No. 25',
                'status_keluarga' => 'Anak',
                'agama' => 'Katolik',
                'pendidikan' => 'D3',
                'pekerjaan' => 'Programmer',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
