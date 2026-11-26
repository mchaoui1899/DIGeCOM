function LigneCommande({ ligne }) {
  return (
    <div className="ligne">

      <h3>{ligne.produit}</h3>

      <p>Prix : {ligne.prix} €</p>

      <p>Quantité : {ligne.quantite}</p>

      <p>
        Total :
        {ligne.prix * ligne.quantite} €
      </p>

    </div>
  );
}

export default LigneCommande;