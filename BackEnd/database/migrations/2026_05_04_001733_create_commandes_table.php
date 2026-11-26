<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up(): void
    {
        Schema::create('commandes', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
        
            $table->foreignId('utilisateur_id')->constrained()->onDelete('cascade');
            $table->decimal('total_prix', 10, 2);
            $table->string('statut')->default('en_attente');
            $table->text('adresse_de_livraison')->nullable();
        });
    }

   
    public function down(): void
    {
        Schema::dropIfExists('commandes');
    }
};
