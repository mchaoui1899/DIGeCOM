<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PRODUIT extends Model
{

use HasFactory;

    protected $table = 'PRODUIT';

    protected $primaryKey = 'numProduit';

    public $timestamps = false;

    protected $fillable = [
        'nomProduit',
        'nomCategorie',
        'description',
        'prix',
        'quantite_stock',
        'lienImage'
    ];


}
