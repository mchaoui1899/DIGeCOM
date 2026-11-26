import Layout from "../../layout/Layout";

function Utilisateur() {
  return (
    <Layout>

      <h1>👤 Espace utilisateur</h1>

      <div className="card">
        <h2>Profil</h2>
        <p>Nom: Mohamed</p>
        <p>Email: user@email.com</p>
      </div>

      <div className="card">
        <h2>📦 Commandes</h2>
        <p>Vous n’avez pas encore de commandes</p>
      </div>

      <div className="card">
        <h2>⚙️ Paramètres</h2>
        <button className="btn">Modifier profil</button>
      </div>

    </Layout>
  );
}

export default Utilisateur;