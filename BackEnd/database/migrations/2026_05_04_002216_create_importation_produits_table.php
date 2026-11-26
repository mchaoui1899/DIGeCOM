<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   
    public function up(): void
    {
        Schema::create('import_produits', function (Blueprint $table) {
            $table->id();
            $table->foreignId('admin_id')->constrained('utilisateurs')->onDelete('cascade');
            $table->string('chemin_du_fichier');
            $table->string('statut')->default('en_attente');
            $table->timestamps();
        });
    }

  
    public function down(): void
    {
        Schema::dropIfExists('import_produits');
    }
};
