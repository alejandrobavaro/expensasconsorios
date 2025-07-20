import React from "react";
import "../assets/scss/_03-Componentes/_Footer.scss";

function Footer() {
  return (
    <footer className="footer-wrapper">
      {/* Contenido principal del footer */}
      <div className="footer-content">
        {/* Columna izquierda con logo */}
        <div className="footer-column">
          <a href="#" className="logo-link">
            <img
              className="footer-logo"
              src="../../img/02-logos/logo1.png"
              alt="Logo de la empresa"
            />
          </a>
        </div>

        {/* Columna central con redes sociales */}
        <div className="footer-column">
          <nav className="footer-nav">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="bi bi-instagram social-icon" />
              <span>Instagram</span>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="bi bi-youtube social-icon" />
              <span>YouTube</span>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="bi bi-facebook social-icon" />
              <span>Facebook</span>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="bi bi-twitter social-icon" />
              <span>Twitter</span>
            </a>
          </nav>
        </div>

        {/* Columna derecha con logo */}
        <div className="footer-column">
          <a href="#" className="logo-link">
            <img
              className="footer-logo"
              src="../../img/02-logos/logo1.png"
              alt="Logo de la empresa"
            />
          </a>
        </div>
      </div>

      {/* Divisor */}
      <hr className="footer-divider" />

      {/* Firma del desarrollador */}
      <div className="footer-copyright">
        <p className="developer-signature">
          <a
            href="https://alejandrobavaro.github.io/gondraworld-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="developer-link"
          >
            <i className="bi bi-brilliance signature-icon" />
            <span>Gondra World Dev</span>
            <i className="bi bi-brilliance signature-icon" />
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;