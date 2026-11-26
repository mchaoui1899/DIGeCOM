<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Utilisateur;
use App\Models\Produit;

class Panier extends Model
{
    protected $fillable = [
        'utilisateur_id',
        'produit_id',
        'quantite'
    ];

    public function utilisateur()
    {
        return $this->belongsTo(Utilisateur::class);
    }

    public function produit()
    {
        return $this->belongsTo(Produit::class);
    }
}
