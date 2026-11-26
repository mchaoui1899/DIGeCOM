import { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import "../../styles/Checkout.css";


function Checkout() {
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    address: ""
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  // CALCULATIONS
  const getSubtotal = () => {
    return cart.reduce((sum, item) => {
      return sum + item.prix * item.quantite;
    }, 0);
  };

  const shipping = cart.length > 0 ? 45 : 0;
  const subtotal = getSubtotal();
  const total = subtotal + shipping;

  // FORM HANDLER
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // CONFIRM ORDER
  const handleConfirm = () => {
    if (!form.fullName || !form.phone || !form.address) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const order = {
      customer: form,
      items: cart,
      total: total,
      date: new Date()
    };

    console.log("ORDER:", order);

    alert("Commande confirmée ✔");

    localStorage.removeItem("cart");
    setCart([]);
    setForm({ fullName: "", phone: "", address: "" });
  };

  return (
    <div className="container py-5 checkout-page">

      <h2 className="mb-4 fw-bold text-center  checkout-title">
        Checkout
      </h2>

      <div className="row g-4">

        {/* LEFT SIDE */}
        <div className="col-lg-8">

          {/* CART */}
          <div className="card shadow-sm p-3 mb-3 checkout-card checkout-left">

            <h5 className="mb-3">🛒 Articles</h5>

            {cart.length === 0 ? (
              <p className="text-danger">Panier vide</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-between align-items-center border-bottom py-2"
                >
                  <div className="d-flex align-items-center gap-3">

                    <img
                      src={`http://localhost:8000/storage/${item.image}`}
                      width="55"
                      height="55"
                      className="checkout-img rounded"
                    />

                    <div>
                      <div className="fw-semibold">
                        {item.nomProduit}
                      </div>
                      <small className="text-muted">
                        Qty: {item.quantite}
                      </small>
                    </div>

                  </div>

                  <div className="fw-bold">
                    {(item.prix * item.quantite).toFixed(2)} $
                  </div>
                </div>
              ))
            )}

          </div>

          {/* FORM */}
          <div className="card shadow-sm p-3 checkout-card checkout-left">

            <h5 className="mb-3">📦 Informations client</h5>

            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="form-control mb-2 checkout-input"
              placeholder="Nom complet"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="form-control mb-2 checkout-input"
              placeholder="Téléphone"
            />

            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              className="form-control checkout-input"
              placeholder="Adresse"
            />

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="col-lg-4">

          <div className="card shadow p-3 sticky-top checkout-card checkout-right">

            <h5 className="mb-3">Résumé commande</h5>

            <div className="d-flex justify-content-between align-items-center border-bottom py-2 checkout-item">
              <span>Sous-total</span>
              <span>{subtotal.toFixed(2)} $</span>
            </div>

            <div className="d-flex justify-content-between">
              <span>Livraison</span>
              <span>{shipping} $</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>{total.toFixed(2)} $</span>
            </div>

            <button
              onClick={handleConfirm}
              className="btn btn-warning w-100 mt-3 fw-bold checkout-btn"
            >
              Confirmer la commande
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Checkout;