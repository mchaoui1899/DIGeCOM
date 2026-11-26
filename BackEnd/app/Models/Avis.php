<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Avis extends Model
{
    protected $fillable = [
        'utilisateur_id',
        'produit_id',
        'note',
        'commentaire'
    ];

    // 👤 علاقة مع المستخدم
    public function utilisateur()
    {
        return $this->belongsTo(Utilisateur::class);
    }

    // 📦 علاقة مع المنتج
    public function produit()
    {
        return $this->belongsTo(Produit::class);
    }
}
