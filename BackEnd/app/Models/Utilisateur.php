<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Sanctum\HasApiTokens;

class Utilisateur extends Authenticatable
{
   
    use HasApiTokens, HasFactory, Notifiable;


    protected $table = 'utilisateurs';

    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

   
    protected $casts = [
    'email_verified_at' => 'datetime',
    'password' => 'hashed',
];

   
}