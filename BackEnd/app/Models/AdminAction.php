<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AdminAction extends Model
{
     protected $fillable = [
        'admin_id',
        'action',
        'produit_id'
    ];

    // 👤 admin (user)
    public function admin()
    {
        return $this->belongsTo(Utilisateur::class, 'admin_id');
    }

    // 📦 product (اختياري)
    public function produit()
    {
        return $this->belongsTo(Produit::class);
    }
}
