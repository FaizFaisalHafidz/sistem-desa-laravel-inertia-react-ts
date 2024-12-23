<?php

use App\Http\Controllers\PendudukController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect('/', '/dashboard');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {

    Route::prefix('penduduk')->group(function(){
        Route::get('/', [PendudukController::class, 'index'])->name('penduduk.index');
        Route::get('/detail/{id}', [PendudukController::class, 'detail'])->name('penduduk.detail');
        Route::get('/create', [PendudukController::class, 'create'])->name('penduduk.create');
        Route::post('/store', [PendudukController::class, 'store'])->name('penduduk.store');
    });

    Route::prefix('users')->group(function(){
        Route::get('/', [UserController::class, 'index'])->name('users.index');
    });


    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
