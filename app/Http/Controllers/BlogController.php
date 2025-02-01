<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::with('user')->get();

        // dd($blogs->toArray());

        return Inertia::render('CMS/Blog/Index', [
            'blogs' => $blogs
        ]);
    }


    public function create()
    {
        return Inertia::render('Blog/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'judul' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:blogs',
            'konten' => 'required|string',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $path = $request->file('gambar') ? $request->file('gambar')->store('images/blogs', 'public') : null;
        $fullPath = $path ? env('APP_URL') . '/storage/' . $path : null;

        Blog::create([
            'judul' => $request->judul,
            'slug' => $request->slug,
            'konten' => $request->konten,
            'gambar' => $fullPath,
            'created_by' => auth()->id(),
            'is_published' => $request->is_published ?? false,
        ]);

        return redirect()->route('blogs.index')->with('success', 'Blog created successfully.');
    }

    public function edit(Blog $blog)
    {
        return Inertia::render('Blog/Edit', [
            'blog' => $blog
        ]);
    }



    public function update(Request $request, Blog $blog)
    {
        $request->validate([
            'judul' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:blogs,slug,' . $blog->id,
            'konten' => 'required|string',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        if ($request->hasFile('gambar')) {
            $path = $request->file('gambar')->store('images', 'public');
            $blog->gambar = $path;
        }

        $blog->update([
            'judul' => $request->judul,
            'slug' => $request->slug,
            'konten' => $request->konten,
            'is_published' => $request->is_published ?? false,
        ]);

        return redirect()->route('blogs.index')->with('success', 'Blog updated successfully.');
    }

    public function destroy(Blog $blog)
    {
        $blog->delete();
        return redirect()->route('blogs.index')->with('success', 'Blog deleted successfully.');
    }
}
