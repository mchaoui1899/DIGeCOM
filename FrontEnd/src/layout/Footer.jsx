function Footer() {

  return (

    <footer className="footer">

      {/* RETOUR TOP */}
      <div className="footer-top">
        <a href="#top">
          Retour en haut
        </a>
      </div>

      {/* MAIN FOOTER */}
      <div className="footer-content">

        {/* COL 1 */}
        <div className="footer-column">

          <h3>Apprenez à nous connaître</h3>

          <a href="#">Carrières</a>
          <a href="#">Blog</a>
          <a href="#">À propos</a>
          <a href="#">Investisseurs</a>
          <a href="#">Amazon Science</a>

        </div>

        {/* COL 2 */}
        <div className="footer-column">

          <h3>Gagnez de l'argent</h3>

          <a href="#">Vendre des produits</a>
          <a href="#">Amazon Business</a>
          <a href="#">Devenir affilié</a>
          <a href="#">Annoncez vos produits</a>

        </div>

        {/* COL 3 */}
        <div className="footer-column">

          <h3>Amazon Paiement</h3>

          <a href="#">Carte Amazon</a>
          <a href="#">Recharge Balance</a>
          <a href="#">Convertisseur devises</a>

        </div>

        {/* COL 4 */}
        <div className="footer-column">

          <h3>Laissez-nous vous aider</h3>

          <a href="#">Votre compte</a>
          <a href="#">Vos commandes</a>
          <a href="#">Retours</a>
          <a href="#">Aide</a>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>
          © 2026 MyShop — Tous droits réservés
        </p>

      </div>

    </footer>
  );
}

export default Footer;