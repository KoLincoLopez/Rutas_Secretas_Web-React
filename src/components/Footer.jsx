import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer-simple">
      <div className="footer-top">
        <img src="src\assets\logo_basic.png" alt="Logo" className="footer-logo" />
        <p className="footer-slogan">Descubre Chile como nunca antes</p>
      </div>
      <div className="footer-bottom">
        <nav className="footer-nav">
          <Link to="/">Inicio</Link>
          <Link to="/Productos.html">Paquetes</Link>
          <Link to="/Contactos.html">Contacto</Link>
          <Link to="/Nosotros.html">Nosotros</Link>
        </nav>
        <p className="footer-copy">&copy; 2018 Rutas Secretas Chile. Todos los derechos reservados</p>
      </div>
    </footer>
  );
};