<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $adminRole = Role::create(['name' => 'admin']);
        $moderatorROle = Role::create(['name' => 'moderator']);
        $userRole = Role::create(['name' => 'user']);

        $permission = Permission::create(['name' => 'edit articles']);
        $adminRole->givePermissionTo($permission);
        $userRole->givePermissionTo($permission);
    }
}
