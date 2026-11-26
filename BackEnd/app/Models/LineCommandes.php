<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LigneCommandes extends Model
{
        protected $fillable = [
        'commande_id',
        'produit_id',
        'quantité',
        'prix'
    ];

    // pour une ligne de commande, elle appartient à une commande
    public function commande()
    {
        return $this->belongsTo(Commande::class);
    }

    // pour une ligne de commande, elle appartient à un produit
    public function produit()
    {
        return $this->belongsTo(Produit::class);
    }
}
