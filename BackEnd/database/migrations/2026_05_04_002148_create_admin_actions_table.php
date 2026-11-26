<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   
    public function up(): void
    {
        Schema::create('admin_actions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('admin_id')->constrained('utilisateurs')->onDelete('cascade');
            $table->string('action');
            $table->foreignId('produit_id')->nullable()->constrained()->onDelete('set null');
            $table->timestamps();
        });
    }

  
    public function down(): void
    {
        Schema::dropIfExists('admin_actions');
    }
};
