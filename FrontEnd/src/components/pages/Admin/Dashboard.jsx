import React, { useEffect, useState } from "react";
import "../../../styles/DashboardAd.css";

export default function OrdersAd() {

  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);

      const res = await fetch("http://127.0.0.1:8000/api/admin/orders");
      const data = await res.json();

      setOrders(data);

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const filtered = orders.filter((o) =>
    o.utilisateur?.name?.toLowerCase().includes(search.toLowerCase()) ||
    String(o.id).includes(search)
  );

  const getStatusClass = (status) => {
    switch (status) {
      case "en_attente": return "status pending";
      case "livré": return "status delivered";
      case "annulé": return "status cancelled";
      default: return "status";
    }
  };

  return (
    <div className="dashboard">

      {/* HEADER */}
      <div className="dash-header">
        <div>
          <h1>📦 Orders Dashboard</h1>
          <p>Full control of your store like Amazon Admin Panel</p>
        </div>

        <input
          className="search"
          placeholder="Search order / user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* STATS */}
      <div className="stats">

        <div className="card blue">
          <h2>{orders.length}</h2>
          <p>Total Orders</p>
        </div>

        <div className="card orange">
          <h2>{orders.filter(o => o.statut === "en_attente").length}</h2>
          <p>Pending</p>
        </div>

        <div className="card green">
          <h2>{orders.filter(o => o.statut === "livré").length}</h2>
          <p>Delivered</p>
        </div>

        <div className="card red">
          <h2>{orders.filter(o => o.statut === "annulé").length}</h2>
          <p>Cancelled</p>
        </div>

      </div>

      {/* TABLE */}
      <div className="table-box">

        {loading ? (
          <div className="loading">Loading orders...</div>
        ) : (

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Total</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {filtered.map((o) => (

                <tr key={o.id}>

                  <td>#{o.id}</td>

                  <td>
                    <div className="user">
                      <div className="avatar">
                        {o.utilisateur?.name?.charAt(0)}
                      </div>
                      <div>
                        <h4>{o.utilisateur?.name}</h4>
                        <small>{o.utilisateur?.email}</small>
                      </div>
                    </div>
                  </td>

                  <td className="price">
                    {o.total_prix} MAD
                  </td>

                  <td>
                    <span className={getStatusClass(o.statut)}>
                      {o.statut}
                    </span>
                  </td>

                  <td>
                    {new Date(o.created_at).toLocaleDateString()}
                  </td>

                  <td>
                    <button onClick={() => setSelectedOrder(o)}>View</button>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        )}

      </div>

      {/* MODAL DETAILS */}
      {selectedOrder && (

        <div className="modal">

          <div className="modal-content">

            <h2>Order #{selectedOrder.id}</h2>

            <p><b>User:</b> {selectedOrder.utilisateur?.name}</p>
            <p><b>Email:</b> {selectedOrder.utilisateur?.email}</p>
            <p><b>Address:</b> {selectedOrder.adresse_de_livraison}</p>
            <p><b>Total:</b> {selectedOrder.total_prix} MAD</p>

            <h3>Products</h3>

            {selectedOrder.ligne_commandes?.map((item) => (

              <div key={item.id} className="product">

                <div>
                  <b>{item.produit?.nomProduit}</b>
                  <small>Qty: {item.quantite}</small>
                </div>

                <span>{item.prix} MAD</span>

              </div>

            ))}

            <button onClick={() => setSelectedOrder(null)}>
              Close
            </button>

          </div>

        </div>

      )}

    </div>
  );
}