import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layout/Layout";
import AdminLayout from "./layout/AdminLayout";

import Home from "./components/pages/Home";
import Categories from "./components/pages/Categories";
import Produits from "./components/pages/Produits";
import Contact from "./components/pages/Contact";
import Apropos from "./components/pages/Apropos";
import Utilisateur from "./components/pages/Utilisateur";
import Panier from "./components/pages/Panier";
import Commande from "./components/pages/Commandes/Commande";
import DetailsProduit from "./components/pages/DetailsProduit";
import Checkout from "./components/pages/Checkout";

import Login from "./Login";
import Register from "./Register";

import ProtectedRoute from "./components/ProtectedRoute";

import Admin from "./components/pages/Admin/Dashboard";
import Users from "./components/pages/Admin/UtilisateursAd";
import Products from "./components/pages/Admin/ProduitsAd";
import Orders from "./components/pages/Admin/CommandesAd";

function App() {
  const current_theme = localStorage.getItem("current_theme");

  const [theme, setTheme] = useState(
    current_theme ? current_theme : "light"
  );

  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <BrowserRouter>
      <div className={theme}>
        
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          

          <Route
            path="/"
            element={<Layout theme={theme} setTheme={setTheme} />}
          />
       
          <Route path="/profile" element={<Utilisateur />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/commande" element={<Commande />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/produit/:id" element={<DetailsProduit />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/home" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />


          <Route
            path="/admin/*"
            element={
              <ProtectedRoute role="Admin">
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Admin />} />
            <Route path="users" element={<Users />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;
