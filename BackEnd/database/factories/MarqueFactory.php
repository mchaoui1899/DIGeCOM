<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class MarqueFactory extends Factory
{
    public function definition(): array
    {
        return [
            'nomMarque' => $this->faker->company(),
            'logo' => $this->faker->imageUrl(200, 200, 'brands', true),
        ];
    }
}