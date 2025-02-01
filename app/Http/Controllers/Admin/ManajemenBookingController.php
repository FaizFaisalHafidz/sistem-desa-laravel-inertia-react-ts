<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ManajemenBookingController extends Controller
{
    public function index()
    {
        $booking = Booking::with('user', 'paket')->get();

        // dd($booking->toArray());

        return Inertia::render('Admin/ManajemenBooking/Index', [
            'booking' => $booking
        ]);
    }
}
