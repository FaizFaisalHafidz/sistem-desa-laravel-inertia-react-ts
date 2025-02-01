<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Socialite\Facades\Socialite;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        $user = Auth::user();

        // Assign role 'user' jika belum memiliki peran
        if (!$user->hasAnyRole(['super-admin', 'pemilik', 'admin', 'user'])) {
            $user->assignRole('user');
        }

        if ($user->hasAnyRole(['super-admin', 'pemilik', 'admin'])) {
            return redirect()->intended('/dashboard');
        }

        return redirect()->intended('/');
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }

    /**
     * Redirect to Google for authentication.
     */
    public function redirectToGoogle(): RedirectResponse
    {
        return Socialite::driver('google')->redirect();
    }

    /**
     * Handle Google OAuth callback.
     */
    public function handleGoogleCallback(): RedirectResponse
    {
        $googleUser = Socialite::driver('google')->user();

        // Find or create a user based on Google account information
        $user = User::firstOrCreate(
            ['email' => $googleUser->getEmail()],
            [
                'name' => $googleUser->getName(),
                'password' => bcrypt('password_dummy'),
            ]
        );
        if (!$user->hasAnyRole(['super-admin', 'pemilik', 'admin', 'user'])) {
            $user->assignRole('user');
        }

        // Log the user in
        Auth::login($user);

        // Redirect sesuai role
        if ($user->hasAnyRole(['super-admin', 'pemilik', 'admin'])) {
            return redirect()->intended('/dashboard');
        }

        return redirect()->intended('/');
    }
}
