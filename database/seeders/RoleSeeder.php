<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            ['name' => 'super-admin', 'guard_name' => 'web'],
            ['name' => 'admin', 'guard_name' => 'web'],
            ['name' => 'user', 'guard_name' => 'web'],
            ['name' => 'guest', 'guard_name' => 'web'],
            ['name' => 'super-admin', 'guard_name' => 'api'],
            ['name' => 'admin', 'guard_name' => 'api'],
            ['name' => 'user', 'guard_name' => 'api'],
            ['name' => 'guest', 'guard_name' => 'api'],
            ['name' => 'super-admin', 'guard_name' => 'sanctum'],
            ['name' => 'admin', 'guard_name' => 'sanctum'],
            ['name' => 'user', 'guard_name' => 'sanctum'],
            ['name' => 'guest', 'guard_name' => 'sanctum'],
            ['name' => 'super-admin', 'guard_name' => 'passport'],
            ['name' => 'admin', 'guard_name' => 'passport'],
            ['name' => 'user', 'guard_name' => 'passport'],
            ['name' => 'guest', 'guard_name' => 'passport'],
        ];

        foreach ($data as $role) {
            Role::updateOrCreate($role);
        }
    }
}
