<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
        protected $fillable = [
        'utilisateur_id',
        'ville',
        'rue',
        'numero_telephone',
        'is_default'
    ];

    public function utilisateur()
    {
        return $this->belongsTo(Utilisateur::class);
    }
}
