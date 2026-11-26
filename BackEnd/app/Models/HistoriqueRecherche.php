<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HistoriqueRecherche extends Model
{
     protected $fillable = [
        'utilisateur_id',
        'terme_de_recherche'
    ];

    // 👤 user اللي دار البحث
    public function utilisateur()
    {
        return $this->belongsTo(Utilisateur::class);
    }
}
