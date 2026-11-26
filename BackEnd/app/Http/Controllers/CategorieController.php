<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Categorie;

class CategorieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
    
    return response()->json(Categorie::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
          return Categorie::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
          $category = Categorie::findOrFail($id);
        $category->update($request->all());
        return $category;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Categorie::findOrFail($id)->delete();
    }
}
