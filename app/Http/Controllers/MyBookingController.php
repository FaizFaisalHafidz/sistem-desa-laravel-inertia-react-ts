<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MyBookingController extends Controller
{
    public function index()
    {
        $users = Auth::user();

        $bookings = Booking::with(['paket'])->where('user_id', $users->id)->get();

        return Inertia::render('MyBooking/Index', [
            'bookings' => $bookings,
            'user' => Auth::user(),
        ]);
    }
}
