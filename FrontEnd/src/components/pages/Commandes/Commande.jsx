import Layout from "../../../layout/Layout";
import LigneCommande from "./LigneCommande";
import ResumeCommande from "./ResumeCommande";

function Commande() {

  const commande = {
    id: 1,
    total: 3000,
    lignes: [
      { id: 1, produit: "iPhone 15", prix: 1000, quantite: 1 },
      { id: 2, produit: "MacBook", prix: 2000, quantite: 1 }
    ]
  };

  return (
    <Layout>

      <h1>Commande #{commande.id}</h1>

      {commande.lignes.map((ligne) => (
        <LigneCommande key={ligne.id} ligne={ligne} />
      ))}

      <ResumeCommande total={commande.total} />

    </Layout>
  );
}

export default Commande;