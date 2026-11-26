import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logop.PNG";


const AdminNavbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">

      {/* LOGO */}
      <Link className="navbar-brand" to="/admin">
        <img
          src={logo}
          alt="logo"
          style={{ height: "40px" }}
        />
      </Link>

      <div className="collapse navbar-collapse show">

        {/* LEFT MENU */}
        <ul className="navbar-nav me-auto">

          <li className="nav-item">
            <Link className="nav-link" to="/admin">Dashboard</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/admin/users">Users</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/admin/products">Products</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/admin/orders">Orders</Link>
          </li>

        </ul>

        {/* RIGHT SIDE */}
        <div className="d-flex align-items-center gap-2">

          {/* SEARCH (optional admin search) */}
          <input
            type="text"
            className="form-control"
            placeholder="Search admin..."
            style={{ width: "200px" }}
          />

          {/* LOGOUT */}
          <button
            onClick={logout}
            className="btn btn-danger"
          >
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
};

export default AdminNavbar;