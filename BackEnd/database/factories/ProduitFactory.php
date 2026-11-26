<?php

namespace Database\Factories;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Produit;
use App\Models\Categorie;
use App\Models\Marque;

  use Illuminate\Support\Str;
/**
 * @extends Factory<Produit>
 */
class ProduitFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
    
  /*  return [
         'nomProduit' => $this->faker->words(2, true),
    'description' => $this->faker->sentence(),
    'prix' => $this->faker->randomFloat(2, 10, 1000),
    'stock_quantite' => $this->faker->numberBetween(0, 200),
    'image' => $this->faker->imageUrl(300, 300, 'products', true),
    // 'image' => 'produits/product-img-1.jpg',//
    ];*/
     return [
        'nomProduit' => $this->faker->words(2, true),
        'description' => $this->faker->sentence(),
        'prix' => $this->faker->randomFloat(2, 10, 1000),
        'stock_quantite' => $this->faker->numberBetween(0, 200),

        // ✅ image ديال storage
        'image' => 'produits/product-img-1.jpg',
    ];
    }
}
