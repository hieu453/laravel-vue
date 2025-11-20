<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceResponse;

class CategoryController extends Controller
{
    public function index()
    {
        return Category::with('products')->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required'],
        ]);

        Category::create($validated);

        return response(['message' => 'Category created']);
    }

    public function show($id)
    {
        return Category::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'name' => 'required',
        ]);

        Category::where('id', $id)->update($validated);

        return response(['message' => 'Category updated']);
    }

    public function destroy($id)
    {
        Category::destroy($id);

        return response(['message' => 'Category deleted']);
    }
}
