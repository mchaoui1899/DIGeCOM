<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\LigneCommandes;
class Commande extends Model
{
      protected $fillable = [
        'utilisateur_id',
        'total_prix',
        'statut',
        'adresse_de_livraison'
    ];

    // 👤 علاقة مع المستخدم
    public function utilisateur()
{
    return $this->belongsTo(Utilisateur::class, 'utilisateur_id');
}

    // 📦 علاقة مع تفاصيل الطلب
    public function ligneCommandes()
    {
        return $this->hasMany(LigneCommandes::class);
    }
}
