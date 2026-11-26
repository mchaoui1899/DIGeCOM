<?php

namespace App\Http\Controllers;

use App\Models\Address;
use Illuminate\Http\Request;

class AddressController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Address::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
         $request->validate([
            'utilisateur_id' => 'required',
            'ville' => 'required',
            'rue' => 'required',
            'numero_telephone' => 'required'
        ]);

        return Address::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Address::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $address = Address::findOrFail($id);
        $address->update($request->all());

        return $address;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
         Address::findOrFail($id)->delete();

        return response()->json(['message' => 'supprimé']);
    }
}
