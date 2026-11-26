<?php

namespace Database\Seeders;
use App\Models\Produit;
use Illuminate\Support\Facades\DB;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use League\CommonMark\Extension\DescriptionList\Node\Description;

class PRODUITSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('PRODUIT')->insert
        (
    [
        'nom' => 'Clavier',
        'description' => 'Clavier gaming',
        'prix' => 250,
        'quantite_stock' => 10,
        'image_produit' => 'clavier.jpg',
        'idCategorie' => 2,
        'idMarque' => 1,
    ]


    );



    }
}
