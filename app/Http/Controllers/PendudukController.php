<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PendudukController extends Controller
{
    public function index(){
        return Inertia::render('Penduduk/Index');
    }
}
