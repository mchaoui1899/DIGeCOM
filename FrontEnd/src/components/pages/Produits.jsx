import { useEffect, useMemo, useState } from "react";
import Layout from "../../layout/Layout";
import "../../styles/Produit.css";
import { useNavigate, useSearchParams } from "react-router-dom";

const PLACEHOLDER = "https://placehold.co/300x200";

const checkImage = (url) =>
  new Promise((resolve) => {
    if (!url) return resolve(false);
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });

function Produits() {
  const [produits, setProduits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState({}); // { [numProduit]: true | false }

  const [searchParams] = useSearchParams();
  const categorie_id = searchParams.get("categorie_id");
  const search = searchParams.get("search");
  const navigate = useNavigate();

  const goDetails = (numProduit) => navigate(`/produit/${numProduit}`);

  // Chargement des produits
  useEffect(() => {
    const params = new URLSearchParams();
    if (categorie_id) params.append("categorie_id", categorie_id);
    if (search) params.append("search", search);

    const query = params.toString();
    const url = `http://localhost:8000/api/produits${query ? `?${query}` : ""}`;

    setLoading(true);
    setStatus({});

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduits(data.data ? data.data : data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [categorie_id, search]);

  // Vérification des images
  useEffect(() => {
    let cancelled = false;
    produits.forEach(async (p) => {
      const ok = await checkImage(p.lienImage);
      if (!cancelled) setStatus((s) => ({ ...s, [p.numProduit]: ok }));
    });
    return () => {
      cancelled = true;
    };
  }, [produits]);

  // Tri : valides, puis en cours de vérification, puis invalides
  const produitsAffiches = useMemo(() => {
    const valides = produits.filter((p) => status[p.numProduit] === true);
    const enCours = produits.filter((p) => status[p.numProduit] === undefined);
    const invalides = produits.filter((p) => status[p.numProduit] === false);
    return [...valides, ...enCours, ...invalides];
  }, [produits, status]);

  return (
    <Layout>
      <div className="produits-page">
        <h1 className="page-title">🛍️ Produits</h1>

        {loading && <p style={{ textAlign: "center" }}>Loading...</p>}

        <div className="produits-grid">
          {produitsAffiches.map((produit) => (
            <div className="card" key={produit.numProduit}>
              <div className="card-image">
                <img
                  src={
                    status[produit.numProduit] === false
                      ? PLACEHOLDER
                      : produit.lienImage
                  }
                  alt={produit.nomProduit || "Produit"}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = PLACEHOLDER;
                  }}
                />
              </div>

              <div className="card-content">
                <h3 className="product-title">{produit.nomProduit}</h3>
                <p className="product-price">{produit.prix} MAD</p>

                {produit.nomCategorie && (
                  <p className="product-category">📂 {produit.nomCategorie}</p>
                )}

                {produit.marque && (
                  <p className="product-brand">🏷️ {produit.marque.nomMarque}</p>
                )}

                <button
                  className="btn-product"
                  onClick={() => goDetails(produit.numProduit)}
                >
                  Voir
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Produits;