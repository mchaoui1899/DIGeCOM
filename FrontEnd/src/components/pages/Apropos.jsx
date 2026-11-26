import Layout from "../../layout/Layout";

function Apropos() {
  return (
    <Layout>

      <div className="card">
        <h1>ℹ️ À propos de nous</h1>
        <p>
          Nous sommes une plateforme e-commerce moderne qui propose
          des produits de haute qualité à des prix compétitifs.
        </p>
      </div>

      <div className="card">
        <h2>🎯 Notre mission</h2>
        <p>Offrir une meilleure expérience d’achat en ligne.</p>
      </div>

      <div className="card">
        <h2>🚀 Vision</h2>
        <p>Devenir une plateforme leader dans le e-commerce.</p>
      </div>

    </Layout>
  );
}

export default Apropos;