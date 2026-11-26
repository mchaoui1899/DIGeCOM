<?php

namespace App\Imports;

use App\Models\Produit;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;

class ProduitImport implements ToCollection
{
   public function collection(Collection $rows)
{
     dd('IMPORT STARTED', $rows->count());
}
}
