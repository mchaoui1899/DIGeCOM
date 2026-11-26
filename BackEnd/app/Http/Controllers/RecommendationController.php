<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\Produit;

class RecommendationController extends Controller
{

    public function recommend(int $index)
    {
            $produit = Produit::where('numProduit', $index)->firstOrFail();


        $response = Http::post(
            'http://127.0.0.1:8001/recommend',
            [
                'product_name' => $produit->nomProduit
            ]
        );
    $recommendations = $response->json()['recommendations'];

    $noms = collect($recommendations)
        ->pluck('product_name');


    $produits = Produit::whereIn('nomProduit', $noms)
            ->where('numProduit', '!=', $index)
            ->select(
        'numProduit',
        'nomProduit',
        'nomCategorie',
        'prix',
        'lienImage'
            )->get();


    return $produits;


    }

}
