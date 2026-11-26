<?php

namespace App\Http\Controllers;
use App\Models\Marque;
use Illuminate\Http\Request;

class MarqueController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         return response()->json(Marque::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
           $request->validate([
            'nom' => 'required|string|max:255',
            'logo' => 'nullable|string'
        ]);

        $marque = Marque::create([
            'nom' => $request->nom,
            'logo' => $request->logo,
        ]);

        return response()->json([
            'message' => 'Marque créée avec succès',
            'data' => $marque
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
         $marque = Marque::findOrFail($id);
         return response()->json($marque);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $marque = Marque::findOrFail($id);

        $request->validate([
            'nom' => 'required|string|max:255',
            'logo' => 'nullable|string'
        ]);

        $marque->update([
            'nom' => $request->nom,
            'logo' => $request->logo,
        ]);

        return response()->json([
            'message' => 'Marque modifiée',
            'data' => $marque
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
         $marque = Marque::findOrFail($id);
        $marque->delete();

        return response()->json([
            'message' => 'Marque supprimée'
        ]);
    }
}
