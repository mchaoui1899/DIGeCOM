<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CATEGORIE extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('CATEGORIE')->insert(

    [
        'nom' =>'SMARTPHONE & ELECTRONIQUE' ,
        'description'=>'Tous ce quil concerne les smartphone et leurs cables , connectiques ',
        'image_categorie'=>'S_E.jpg',
        

    ]
    );
    }
}
