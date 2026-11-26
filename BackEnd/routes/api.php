<?php
use App\Http\Controllers\AddressController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\PanierController;
use App\Http\Controllers\CommandeController;
use App\Http\Controllers\MarqueController;
use App\Http\Controllers\RecommendationController;


use App\Models\Utilisateur;
use App\Models\Produit;
use App\Models\Commande;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

    use Illuminate\Support\Facades\DB;
Route::apiResource('categories', CategorieController::class);
Route::apiResource('produits', ProduitController::class);
Route::apiResource('panier', PanierController::class);
Route::apiResource('commandes', CommandeController::class);
Route::apiResource('marques', MarqueController::class);
Route::apiResource('addresses', AddressController::class);
Route::get('/test', function () {
    return 'API works';
});

Route::post('/register', function (Request $request) {

    $user = Utilisateur::create([
        'name' => $request->name,                                           // onus pouvons replacé
        'email' => $request->email,
        'password' => Hash::make($request->password),
          'role' => 'user',                                                   //       par  default
    ]);

    return response()->json([
        'message' => 'User created successfully',
        'user' => $user
    ]);


});


Route::post('/login', function (Request $request) {

    $user = Utilisateur::where('email', $request->email)->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([
        'user' => $user,
        'role' => $user->role,
        'token' => $token
    ]);
});

Route::group(['middleware' => ['auth:sanctum', 'role:admin']], function () {

    Route::get('/admin/users', function () {
        return Utilisateur::all();
    });

    Route::get('/admin/products', function () {
        return Produit::with(['categorie', 'marque'])->get();
    });

    Route::get('/admin/orders', function () {
        return Commande::with(['utilisateur', 'ligneCommandes.produit'])->get();
    });

});

Route::get(
    '/recommend/{index}',
    [RecommendationController::class, 'recommend']
);
use App\Http\Controllers\ImportController;

Route::post('/import', [ImportController::class, 'import']);
Route::get('/produits', [ProduitController::class, 'index']);
