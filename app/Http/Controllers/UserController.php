<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::with('roles')->get();

        return Inertia::render('Users/Index', [
            'users' => $users,
        ]);
    }
}
