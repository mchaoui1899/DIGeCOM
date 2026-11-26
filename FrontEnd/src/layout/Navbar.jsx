import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo_light from "../assets/logop.PNG";
import logo_dark from "../assets/logop.PNG";
import toogle_light from "../assets/day.png";
import toogle_dark from "../assets/night.jpg";

const Navbar = ({ theme, setTheme }) => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  // GET CATEGORIES
const [open, setOpen] = useState(false);

//
const [search, setSearch] = useState("");

const handleSearch = () => {
  if (search.trim() !== "") {
    navigate(`/produits?search=${search}`);
  } else {
    navigate("/produits");
  }
};

  // THEME TOGGLE
  const toggle_mode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // GO TO PRODUCTS BY CATEGORY
  const goCategory = (id) => {
    navigate(`/produits?categorie_id=${id}`);
  };
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.log(err));
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">

      {/* LOGO */}
      <Link className="navbar-brand" to="/home">
        <img
          src={theme === "light" ? logo_light : logo_dark}
          alt="logo"
          style={{ height: "40px" }}
        />
      </Link>

      <div className="collapse navbar-collapse show">

        {/* LEFT MENU */}
        <ul className="navbar-nav me-auto">

          <li className="nav-item">
            <Link className="nav-link" to="/home">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/produits">Produits</Link>
          </li>

          {/* DROPDOWN CATEGORIES */}
          <div className="dropdown">
  <button
    className="btn btn-dark"
    /*onClick={() => setOpen(!open)}*/ 
    onClick={()=>navigate("/categories")}
  >
    Categories
  </button>

  {open && (
    <ul className="dropdown-menu dropdown-menu-dark show">
      {categories.map(cat => (
        <li key={cat.id}>
          <span
            className="dropdown-item"
            onClick={() => navigate(`/produits?categorie_id=${cat.id}`)}
          >
            {cat.nomCategorie}
          </span>
        </li>
      ))}
    </ul>
  )}
</div>
              

          <li className="nav-item">
            <Link className="nav-link" to="/panier">Panier</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/apropos">A propos</Link>
          </li>

        </ul>

        {/* RIGHT SIDE */}
        <div className="d-flex align-items-center gap-2">

          {/* SEARCH */}
        
          <input
  type="text"
  className="form-control"
  placeholder="Rechercher..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  }}
  style={{ width: "200px" }}
/>
<button
  className="btn btn-primary"
  onClick={handleSearch}
>
  🔍
</button>
          {/* THEME BUTTON */}
          <button
            onClick={toggle_mode}
            className="btn btn-outline-light"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          {/*  Profil button  */}
          <button
            onClick={()=>navigate("/login")}
            className="btn btn-outline-light"
          >
           👤
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;