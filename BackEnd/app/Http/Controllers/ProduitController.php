<?php

namespace App\Http\Controllers;
use App\Models\Produit;
use Illuminate\Http\Request;

class ProduitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
/*
 public function index()
    {
        // Récupère tous les produits de la table PRODUIT
        $produits = Produit::all();

        // Retourne les données en JSON avec un statut HTTP 200 (OK)
        return response()->json($produits, 200);
    } 
    */
     public function index(Request $request)
{
    $query = Produit::query();

    if ($request->search) {
        $query->where('nomProduit', 'LIKE', '%' . $request->search . '%');
    }

    if ($request->categorie_id) {
        $query->where('categorie_id', $request->categorie_id);
    }

    return response()->json($query->get(), 200);
}
    
    
    
    
    /* 
public function index(Request $request)
{
    $query = Produit::query();

    // Recherche par nom du produit
    if ($request->has('search') && $request->search != '') {
        $query->where('nomProduit', 'LIKE', '%' . $request->search . '%');
    }

    $produits = $query->get();

    return response()->json($produits, 200);
}*/
 /*   foreach ($produits as $p) {
        $p->image = $p->image
            ? asset('storage/' . $p->image)
            : null;
    }*/

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
     $produit = Produit::where('numProduit', $id)->firstOrFail();

    if (!$produit) {
        return response()->json([
            'message' => 'Produit not found'
        ], 404);
    }

    return response()->json($produit);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
