<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        return Product::with('category')->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required'],
        ]);

        Product::create($validated);

        return response(['message' => 'Product created']);
    }

    public function show($id)
    {
        return Product::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'name' => 'required',
        ]);

        Product::where('id', $id)->update($validated);

        return response(['message' => 'Product updated']);
    }

    public function destroy($id)
    {
        Product::destroy($id);

        return response(['message' => 'Category deleted']);
    }
}
