import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/DetailsProduit.css";

function DetailsProduit() {
const addToCart = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(p => p.id === produit.id);

  if (existing) {
    const updated = cart.map(p =>
      p.id === produit.id
        ? { ...p, quantite: p.quantite + qty }
        : p
    );
    localStorage.setItem("cart", JSON.stringify(updated));
  } else {
    const newItem = {
      id: produit.id,
      nomProduit: produit.nomProduit,
      prix: produit.prix,
      image: produit.image,
      quantite: qty
    };

    const updated = [...cart, newItem];
    localStorage.setItem("cart", JSON.stringify(updated));
  }
};


  const { id } = useParams();
  const [produit, setProduit] = useState(null);
  const [qty, setQty] = useState(1);
  const [recommendations, setRecommendations] = useState([]);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/produits/${id}`)
      .then(res => res.json())
      .then(data => setProduit(data));

       fetch(`http://127.0.0.1:8000/api/recommend/${id}`)
    .then(res => res.json())
    .then(data => setRecommendations(data))
    .catch(err => console.log(err));

  }, [id]);

  if (!produit) return <p className="loading">Loading...</p>;

  return (
    <div className="product-page">

      {/* LEFT IMAGE */}
      <div className="product-image">
       <img
        src={produit.lienImage ? produit.lienImage : "https://via.placeholder.com/300x200"}
        alt={produit.nomProduit || "Produit"}
       />
      </div>

      {/* RIGHT DETAILS */}
      <div className="product-info">

        <h1 className="title">{produit.nomProduit}</h1>

        {/* PRICE */}
        <div className="price">
          {produit.prix} MAD
        </div>

        {/* STOCK */}
        <div className="stock in">
          ✅ En stock
        </div>

        {/* QUANTITY */}
        <div className="qty-box">
          <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
          <input value={qty} readOnly />
          <button onClick={() => setQty(qty + 1)}>+</button>
        </div>

        {/* BUTTONS */}
        <div className="buttons">

          <button className="cart-btn" onClick={addToCart}>
            🛒 Ajouter au panier
          </button>

          <button className="buy-btn">
            ⚡ Acheter maintenant
          </button>

          <button className="wish-btn">
            ❤️ Wishlist
          </button>

        </div>

      
        <div className="info-box">
          🚚 Livraison gratuite sous 2-4 jours <br />
          🔁 Retour gratuit sous 30 jours
        </div>

        
        <div className="desc">
          <h3>Description</h3>
          <p>{produit.description}</p>
        </div>
        
<div className="recommendations">

<h2>Produits recommandés pour vous</h2>

<div className="produits-grid">

{
recommendations.map((p)=>(
    <div className="card" key={p.numProduit}>

       <img
      src={p.lienImage ? p.lienImage : "https://via.placeholder.com/300x200"}
      alt={p.nomProduit}
       />

        <h3>{p.nomProduit}</h3>

        <p className="prixRec" >{p.prix} MAD</p>

        <button
          onClick={() => window.location.href=`/produit/${p.numProduit}`}
        >
          Voir
        </button>

    </div>
))
}

</div>

</div>
      </div>

    </div>
  );
}

export default DetailsProduit;