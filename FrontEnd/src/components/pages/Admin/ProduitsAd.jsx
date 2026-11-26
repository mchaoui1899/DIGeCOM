import React, { useEffect, useState } from "react";
import "../../../styles/ProductsAd.css";

export default function ProductsAd() {

  
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  
  const [showModal, setShowModal] = useState(false);
  const [viewProduct, setViewProduct] = useState(null);
  const [editProduct, setEditProduct] = useState(null);

  
  const [form, setForm] = useState({
    nomProduit: "",
    categorie_id: "",
    prix: "",
    stock_quantite: ""
  });

  
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const res = await fetch("http://127.0.0.1:8000/api/admin/products");
      const data = await res.json();

      setProducts(data);

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // ================= DELETE =================
  const deleteProduct = async (id) => {
    const ok = window.confirm("Delete product?");
    if (!ok) return;

    await fetch(`http://127.0.0.1:8000/api/admin/products/${id}`, {
      method: "DELETE",
    });

    setProducts(prev => prev.filter(p => p.id !== id));
  };

  // ================= OPEN EDIT =================
  const openEdit = (p) => {
    setEditProduct(p);
    setForm(p);
    setShowModal(true);
  };

  // ================= SAVE (ADD / EDIT) =================
  const handleSave = () => {

    if (editProduct) {
      setProducts(prev =>
        prev.map(p =>
          p.id === editProduct.id ? { ...p, ...form } : p
        )
      );
    } else {
      setProducts(prev => [
        { id: Date.now(), ...form },
        ...prev
      ]);
    }

    setShowModal(false);
    setEditProduct(null);

    setForm({
      nomProduit: "",
      categorie_id: "",
      prix: "",
      stock_quantite: ""
    });
  };

  // ================= FILTER =================
  const filtered = products.filter(p =>
    (p.nomProduit || "")
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    (p.categorie_id || "")
      .toString()
      .includes(search)
  );

  // ================= UI =================
  return (
    <div className="admin">

      {/* HEADER */}
      <div className="admin-header">

        <div>
          <h1>🛍 Products Dashboard</h1>
          <p>Manage inventory like Amazon Admin Panel</p>
        </div>

        <button
          className="btn-primary"
          onClick={() => {
            setEditProduct(null);
            setForm({
              nomProduit: "",
              categorie_id: "",
              prix: "",
              stock_quantite: ""
            });
            setShowModal(true);
          }}
        >
          + New Product
        </button>

      </div>

      {/* STATS */}
      <div className="stats-grid">

        <div className="stat-card">
          <h2>{products.length}</h2>
          <p>Total Products</p>
        </div>

        <div className="stat-card green">
          <h2>{products.filter(p => p.stock_quantite > 0).length}</h2>
          <p>In Stock</p>
        </div>

        <div className="stat-card red">
          <h2>{products.filter(p => p.stock_quantite == 0).length}</h2>
          <p>Out of Stock</p>
        </div>

      </div>

      {/* SEARCH */}
      <div className="toolbar">
        <input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* TABLE */}
      <div className="table-wrapper">

        {loading ? (
          <p>Loading...</p>
        ) : (

          <table className="table">

            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {filtered.map(p => (

                <tr key={p.id}>

                  <td>{p.nomProduit}</td>
                  <td>{p.categorie_id}</td>
                  <td>{p.prix} MAD</td>
                  <td>{p.stock_quantite}</td>

                  <td className="actions">

                    {/* VIEW */}
                    <button onClick={() => setViewProduct(p)}>
                      👁
                    </button>

                    {/* EDIT */}
                    <button onClick={() => openEdit(p)}>
                      ✏️
                    </button>

                    {/* DELETE */}
                    <button onClick={() => deleteProduct(p.id)}>
                      🗑
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        )}

      </div>

      {/* ================= VIEW MODAL ================= */}
      {viewProduct && (
        <div className="modal-overlay">
          <div className="modal">

            <h2>{viewProduct.nomProduit}</h2>

            <p>Category: {viewProduct.categorie_id}</p>
            <p>Price: {viewProduct.prix} MAD</p>
            <p>Stock: {viewProduct.stock_quantite}</p>

            <button onClick={() => setViewProduct(null)}>
              Close
            </button>

          </div>
        </div>
      )}

      {/* ================= ADD / EDIT MODAL ================= */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">

            <h2>
              {editProduct ? "Edit Product" : "Add Product"}
            </h2>

            <input
              placeholder="Name"
              value={form.nomProduit}
              onChange={(e) =>
                setForm({ ...form, nomProduit: e.target.value })
              }
            />

            <input
              placeholder="Category"
              value={form.categorie_id}
              onChange={(e) =>
                setForm({ ...form, categorie_id: e.target.value })
              }
            />

            <input
              placeholder="Price"
              value={form.prix}
              onChange={(e) =>
                setForm({ ...form, prix: e.target.value })
              }
            />

            <input
              placeholder="Stock"
              value={form.stock_quantite}
              onChange={(e) =>
                setForm({ ...form, stock_quantite: e.target.value })
              }
            />

            <button onClick={handleSave}>
              Save
            </button>

            <button onClick={() => setShowModal(false)}>
              Cancel
            </button>

          </div>
        </div>
      )}

    </div>
  );
}