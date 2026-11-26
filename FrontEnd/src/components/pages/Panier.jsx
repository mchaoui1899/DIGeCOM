import { useState, useEffect } from "react";
import Layout from "../../layout/Layout";
import "../../styles/Panier.css";
import { useNavigate } from "react-router-dom";


function Panier() {
const navigate = useNavigate(); 
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (

    <Layout>

      <div className="panier-container container py-4">
       
        {cart.length === 0 ? (
  <div className="empty-cart text-center">
    <h3>🛒 Votre panier est vide</h3>
    <button className="btn btn-warning mt-3">
      Continuer les achats
    </button>
  </div>
) : (
  // table + summary
  null
)}
      
        <h2 className="mb-4">🛒 Mon Panier</h2>

        <div className="row">

          {/* LEFT TABLE */}
          <div className="col-lg-8">

            <div className="card shadow-sm">

              <div className="card-body p-0">

                <table className="table align-middle mb-0">

                  <thead className="table-dark">
                    <tr>
                      <th>Produit</th>
                      <th>Prix</th>
                      <th>Quantité</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>

                    {cart.map(item => (

                      <tr key={item.id}>

                        {/* PRODUCT */}
                        <td className="d-flex align-items-center gap-3">

                          <img
                            src={`http://localhost:8000/storage/${item.image}`}
                            className="product-img"
                          />

                          <span>{item.nomProduit}</span>

                        </td>

                        {/* PRICE */}
                        <td>{item.prix} $</td>

                        {/* QTY */}
                        <td>

                          <div className="qty-box">

                            <button
                              onClick={() => {
                                const updated = cart.map(p =>
                                  p.id === item.id && p.quantite > 1
                                    ? { ...p, quantite: p.quantite - 1 }
                                    : p
                                );
                                updateCart(updated);
                              }}
                            >
                              -
                            </button>

                            <span>{item.quantite}</span>

                            <button
                              onClick={() => {
                                const updated = cart.map(p =>
                                  p.id === item.id
                                    ? { ...p, quantite: p.quantite + 1 }
                                    : p
                                );
                                updateCart(updated);
                              }}
                            >
                              +
                            </button>

                          </div>

                        </td>

                        {/* TOTAL */}
                        <td>
                          {(item.prix * item.quantite).toFixed(2)} $
                        </td>

                        {/* DELETE */}
                        <td>

                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => {
                              const updated = cart.filter(
                                p => p.id !== item.id
                              );
                              updateCart(updated);
                            }}
                          >
                          <i className="bi bi-trash"></i>
                          </button>

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>

          </div>

          {/* RIGHT SUMMARY */}
          <div className="col-lg-4">

            <div className="card shadow-sm summary-box">

              <div className="card-body">

                <h5>Résumé de commande</h5>
<p>Expédition: 45 $</p>
<input
  type="text"
  className="form-control"
  placeholder="Code promo"
/>
<p className="text-success">
  ✔ Livraison gratuite
</p>

<p className="text-muted">
  Retour gratuit sous 30 jours
</p>

                <hr />

                <p>
                  Sous-total: {" "}
                  {cart.reduce(
                    (a, c) => a + c.prix * c.quantite,
                    0
                  ).toFixed(2)} $
                </p>

                <p>Expédition: 45 $</p>

                <hr />

                <h4>
                  Total: {" "}
                  {(
                    cart.reduce(
                      (a, c) => a + c.prix * c.quantite,
                      0
                    ) + 45
                  ).toFixed(2)} $
                </h4>
                  <button
               onClick={() => navigate("/checkout")}
               className="btn btn-warning w-100 mt-3">
                  🛍 Valider la commande
                </button>

                <button className="btn btn-outline-dark w-100 mt-2">
                  Continuer les achats
                </button>

                <button
                  className="btn btn-outline-danger w-100 mt-2"
                  onClick={() => {
                    updateCart([]);
                  }}
                >
                  Vider le panier
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </Layout>

  );
}

export default Panier;