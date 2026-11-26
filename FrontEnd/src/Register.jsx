import { useState } from "react";
import api from "./api";
import './style.css' 
import { Link } from "react-router-dom";

function Register({ setIsRegister }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/register", {
        name,
        email,
        password,
      });

      console.log(res.data);

      alert("Register success ✅");

      setIsRegister(false);

    } catch (err) {
      console.log(err);
      alert("Error ❌");
    }
  };

  return (
    <>
     <div className="auth-page" >
      <Link to="/home" class="back-home-link" >
          Retourner a la page d'acceuil 
        </Link>
        <div className="wrapper ">
          <span className="og-animate"></span>
<span className="og-animate2"></span> 
        <div className="form-box register">

          <h2 className="animation" style={{"--i":17, "--j":0}}>
            sign up
          </h2>

          <form onSubmit={handleRegister}>

            <div className="input-box animation" style={{"--i":18, "--j":1}}>
              <input
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <label>Name</label>
              <i className="bx bxs-user"></i>
            </div>

            <div className="input-box animation" style={{"--i":19, "--j":2}}>
              <input
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
              <i className="bx bxs-envelope"></i>
            </div>

            <div className="input-box animation" style={{"--i":20, "--j":3}}>
              <input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
              <i className="bx lock-alt"></i>
            </div>

            <button type="submit" className="btn animation" style={{"--i":21, "--j":4}}>
              sign up
            </button>

            <div className="logreg-link animation" style={{"--i":22, "--j":5}}>
           <p>
               already have an account?
           <Link to="/Login" className="login-link"> login</Link>
          </p>
            </div>

          </form>

        </div>

        <div className="info-text register">
          <h2 className="animation" style={{"--i":17, "--j":0}}>
            welcome back
          </h2>
          <p className="animation" style={{"--i":18,  "--j":1}}>
            create your account to continue
          </p>
        </div>

      </div>
    </div>
    </>
  );
}

export default Register;