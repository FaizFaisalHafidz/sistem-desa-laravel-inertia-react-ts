<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\KategoriPaketController;
use App\Http\Controllers\Admin\PaketController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PendudukController;
use App\Http\Controllers\Front\HomeController;
use App\Http\Controllers\Front\PaketLayananController;
use App\Http\Controllers\Front\BlogController as FrontBlogController;
use App\Http\Controllers\PembayaranController;
use App\Http\Middleware\AdminMiddleware;
use App\Models\PaketLayanan;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::post('/pembayaran/callback', [PembayaranController::class, 'callback']);


Route::prefix('blogs')->group(function () {
    Route::get('/', [FrontBlogController::class, 'index'])->name('blogs.index');
});

Route::prefix('paket-layanan')->group(function () {
    Route::get('/', [PaketLayananController::class, 'index'])->name('paket-layanan.index');
    Route::get('/{id}', [PaketLayananController::class, 'detail'])->name('paket-layanan.detail');
    Route::get('booking/{id}', [PaketLayananController::class, 'bookingPage'])->name('paket-layanan.bookingPage');
    Route::post('booking/{id}', [PaketLayananController::class, 'booking'])->name('paket-layanan.booking');
});

Route::middleware('auth')->group(function () {

    Route::prefix('pembayaran')->group(function () {
        Route::get('/', [PembayaranController::class, 'index'])->name('pembayaran.index');
        Route::post('bayar', [PembayaranController::class, 'bayar'])->name('pembayaran.bayar');
    });


    Route::middleware(AdminMiddleware::class)->group(function () {

        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

        Route::prefix('cms')->group(function () {
            Route::prefix('blogs')->group(function () {
                Route::get('/', [BlogController::class, 'index'])->name('cms.blogs.index');
            });
        });

        Route::prefix('users')->group(function () {
            Route::get('/', [UserController::class, 'index'])->name('users.index');
        });

        Route::prefix('kategori-paket')->group(function () {
            Route::get('', [KategoriPaketController::class, 'index'])->name('kategori-paket.index');
            Route::get('create', [KategoriPaketController::class, 'create'])->name('kategori-paket.create');
            Route::post('store', [KategoriPaketController::class, 'store'])->name('kategori-paket.store');
            Route::get('edit/{id}', [KategoriPaketController::class, 'edit'])->name('kategori-paket.edit');
            Route::post('update/{id}', [KategoriPaketController::class, 'update'])->name('kategori-paket.update');
        });

        Route::prefix('manajemen-paket')->group(function () {
            Route::get('', [PaketController::class, 'index'])->name('manajemen-paket.index');
            Route::get('create', [PaketController::class, 'create'])->name('manajemen-paket.create');
            Route::post('store', [PaketController::class, 'store'])->name('manajemen-paket.store');
            Route::get('edit/{id}', [PaketController::class, 'edit'])->name('manajemen-paket.edit');
        });

        Route::prefix('roles')->group(function () {
            Route::get('/', [RoleController::class, 'index'])->name('roles.index');
            Route::post('/store', [RoleController::class, 'store'])->name('roles.store');
        });
    });


    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
