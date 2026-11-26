<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  
    public function up(): void
    {
        Schema::create('historique_recherches', function (Blueprint $table) {
            $table->id();
            $table->foreignId('utilisateurs_id')->constrained()->onDelete('cascade');
            $table->string('terme_de_recherche');
            $table->timestamps();
        });
    }

   
    public function down(): void
    {
        Schema::dropIfExists('historique_recherches');
    }
};
