<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserAction extends Model
{
      protected $fillable = [
        'utilisateur_id',
        'produit_id',
        'action_type'
    ];

    public function utilisateur()
    {
        return $this->belongsTo(User::class);
    }

    public function produits()
    {
        return $this->belongsTo(Product::class);
    }
    
}
