<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('produits', function (Blueprint $table) {
    $table->id();
    $table->string('product_name')->nullable();
    $table->string('category')->nullable();
    $table->text('about_product')->nullable();
    $table->float('actual_price')->nullable();
    $table->string('img_link')->nullable();
    $table->timestamps();
});
    }






    public function down(): void
    {
        Schema::dropIfExists('produits');
    }
};
