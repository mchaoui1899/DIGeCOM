import React, { useEffect, useState } from "react";
import "../../../styles/CommandeAd.css";

export default function OrdersAd() {

  const [commandes, setCommandes] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedCommande, setSelectedCommande] = useState(null);


  useEffect(() => {
    fetchCommandes();
  }, []);

  const fetchCommandes = async () => {
    try {
      setLoading(true);

      const res = await fetch("http://127.0.0.1:8000/api/admin/orders");
      const data = await res.json();

      setCommandes(data);

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  
  const filtered = commandes.filter((c) =>
    c.utilisateur?.name?.toLowerCase().includes(search.toLowerCase()) ||
    c.id.toString().includes(search)
  );

  // ================= STATUS =================
  const getStatusClass = (statut) => {
    switch (statut) {
      case "livré":
        return "status delivered";
      case "en_attente":
        return "status pending";
      case "annulé":
        return "status cancelled";
      default:
        return "status default";
    }
  };

  return (
    <div className="orders-page">

      {/* ================= HEADER ================= */}
      <div className="orders-header">

        <div>
          <h1>📦 Commandes Dashboard</h1>
          <p>Gestion des commandes clients</p>
        </div>

      </div>

      {/* ================= STATS ================= */}
      <div className="stats-grid">

        <div className="stat-card blue">
          <h2>{commandes.length}</h2>
          <p>Total Commandes</p>
        </div>

        <div className="stat-card orange">
          <h2>{commandes.filter(c => c.statut === "en_attente").length}</h2>
          <p>En attente</p>
        </div>

        <div className="stat-card green">
          <h2>{commandes.filter(c => c.statut === "livré").length}</h2>
          <p>Livrées</p>
        </div>

        <div className="stat-card red">
          <h2>{commandes.filter(c => c.statut === "annulé").length}</h2>
          <p>Annulées</p>
        </div>

      </div>

      {/* ================= SEARCH ================= */}
      <div className="search-bar">

        <input
          type="text"
          placeholder="Recherche par utilisateur ou ID commande..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* ================= TABLE ================= */}
      <div className="table-card">

        {loading ? (
          <div className="loading">Chargement...</div>
        ) : (

          <table>

            <thead>
              <tr>
                <th>ID</th>
                <th>Utilisateur</th>
                <th>Total</th>
                <th>Statut</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {filtered.map((c) => (

                <tr key={c.id}>

                  {/* ID */}
                  <td className="order-id">#{c.id}</td>

                  {/* USER */}
                  <td>
                    <div className="user-box">

                      <div className="avatar">
                        {c.utilisateur?.name?.charAt(0)}
                      </div>

                      <div>
                        <h4>{c.utilisateur?.name}</h4>
                        <small>{c.utilisateur?.email}</small>
                      </div>

                    </div>
                  </td>

                  {/* TOTAL */}
                  <td className="price">
                    {c.total_prix} MAD
                  </td>

                  {/* STATUS */}
                  <td>
                    <span className={getStatusClass(c.statut)}>
                      {c.statut}
                    </span>
                  </td>

                  {/* DATE */}
                  <td>
                    {new Date(c.created_at).toLocaleDateString()}
                  </td>

                  {/* ACTIONS */}
                  <td>
                    <div className="actions">

                      <button
                        className="view"
                        onClick={() => setSelectedCommande(c)}
                      >
                        View
                      </button>

                      <button className="edit">
                        Edit
                      </button>

                      <button className="delete">
                        Delete
                      </button>

                    </div>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        )}

      </div>

      {/* ================= MODAL ================= */}
      {selectedCommande && (

        <div className="modal-overlay">

          <div className="modal">

            <h2>Commande #{selectedCommande.id}</h2>

            <div className="modal-info">

              <p><b>Utilisateur:</b> {selectedCommande.utilisateur?.name}</p>
              <p><b>Email:</b> {selectedCommande.utilisateur?.email}</p>
              <p><b>Total:</b> {selectedCommande.total_prix} MAD</p>
              <p><b>Statut:</b> {selectedCommande.statut}</p>
              <p><b>Adresse:</b> {selectedCommande.adresse_de_livraison}</p>

            </div>

            <hr />

            <h3>Produits</h3>

            <div className="products-list">

              {selectedCommande.ligne_commandes?.map((item) => (

                <div key={item.id} className="product-item">

                  <div>
                    <b>{item.produit?.nomProduit}</b>
                    <p>Quantité: {item.quantite}</p>
                  </div>

                  <span>{item.prix} MAD</span>

                </div>

              ))}

            </div>

            <button
              className="close-btn"
              onClick={() => setSelectedCommande(null)}
            >
              Fermer
            </button>

          </div>

        </div>

      )}

    </div>
  );
}