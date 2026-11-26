<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Recommendation extends Model
{
    protected $fillable = [
        'utilisateur_id',
        'produit_id',
        'score'
    ];

    // l utilisateur qui a reçu la recommandation
    public function utilisateur()
    {
        return $this->belongsTo(User::class);
    }

    //  produit suggéré
    public function produit()
    {
        return $this->belongsTo(Product::class);
    }
}
