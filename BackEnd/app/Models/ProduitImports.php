<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductImport extends Model
{
     protected $fillable = [
        'admin_id',
        'chemin_du_fichier',
        'statut'
    ];

    
    public function admin()
    {
        return $this->belongsTo(Utilisateur::class, 'admin_id');
    }
}
