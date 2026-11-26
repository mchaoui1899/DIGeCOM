import { useState } from "react";
import api from "./api";
import { useNavigate } from "react-router-dom";
import './style.css' 
import { Link } from "react-router-dom";
function Login({ setIsRegister }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      if (res.data.role === "Admin") {
        navigate("/admin");
      } else {
        navigate("/profile");
      }

    } catch (err) {
      console.log(err);
      alert("Email or password incorrect ❌");
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
        
        <div className="form-box login">
    
        
          <h2 className="animation" style={{"--i":0, "--j":21}}>
            login
          </h2>

          <form onSubmit={handleLogin}>

            <div className="input-box animation" style={{"--i":1, "--j":22}}>
              <input
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
              <i className="bx bxs-user"></i>
            </div>

            <div className="input-box animation" style={{"--i":2, "--j":23}}>
              <input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
              <i className="bx bxs-lock-alt"></i>
            </div>

            <button type="submit" className="btn animation" style={{"--i":3, "--j":24}}>
              login
            </button>

            <div className="logreg-link animation" style={{"--i":4, "--j":25}}>
                     
                   <p> don't have an account?
                   <Link to="/Register" className="register-link"> sign up</Link>
                     </p>
            </div>

          </form>

        </div>

        <div className="info-text login">
        <h2 className="animation" style={{"--i":0}}>welcome back</h2> <br></br><br></br>
          <p className="animation" style={{"--i":1}}>
            login to access your dashboard
          </p>
        </div>

      </div>
    </div>
    </>
  );
}

export default Login;