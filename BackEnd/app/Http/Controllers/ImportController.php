<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Imports\ProduitImport;
use Maatwebsite\Excel\Facades\Excel;

class ImportController extends Controller
{

    public function import(Request $request)
{
    Excel::import(new ProduitImport, $request->file('file'));

    return response()->json([
        'message' => 'IMPORT DONE'
    ]);
}
}


