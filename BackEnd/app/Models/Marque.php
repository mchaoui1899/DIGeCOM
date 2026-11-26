<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Produit;

class Marque extends Model
{
    use HasFactory;

    protected $fillable = ['nomMarque', 'logo'];

    public function produits()
    {
        return $this->hasMany(Produit::class);
    }
}