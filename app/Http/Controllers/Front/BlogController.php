<?php

namespace App\Http\Controllers\Front;

use App\Models\Blog;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class BlogController extends Controller
{
    public function index()
    {

        $blogs = Blog::where('is_published', 1)->get();
        return Inertia::render('Blog/Index', [
            'blogs' => $blogs,
            'user' => Auth::user(),
        ]);
    }
}
