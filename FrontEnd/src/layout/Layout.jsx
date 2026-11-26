import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import "./layout.css";

function Layout({ children, theme, setTheme }) {
  return (
    <div className={`app-layout ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />

      <main className="page">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;