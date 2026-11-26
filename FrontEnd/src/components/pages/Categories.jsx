import Layout from "../../layout/Layout.jsx";
import { Link } from "react-router-dom";
function Categories() {
  return (
    <Layout>

      <h1>📂 Catégories</h1>

      <div className="card"> <Link className="nav-link" to="/produits"> 📱 SMARTPHONE </Link>  </div>
      <div className="card"> <Link className="nav-link" to="/produits">  💻​ PC & INFORMATIQUE </Link>   </div>
      <div className="card"> <Link className="nav-link" to="/produits">  🔌​ Câbles et Accessoires de connexion  </Link>  </div>
      <div className="card"> <Link className="nav-link" to="/produits"> 🎧  Audio (Écouteurs, Casques, Enceintes) </Link>   </div>
      <div className="card"> <Link className="nav-link" to="/produits"> 🖥️ SMART TV & accessoires </Link>   </div>

    </Layout>
  );
}

export default Categories;