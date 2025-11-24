import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const Navbar = () => {
    const { user, logout, cart } = useApp();
    
    const [isLoggingOut, setIsLoggingOut] = useState(false); 

    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    
    const userMenuRef = useRef(null);
    const dropdownRef = useRef(null);
    const location = useLocation();

    const totalItems = cart.reduce((acc, item) => acc + (item.cantidad || 0), 0);

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
            setUserMenuOpen(false);
          }
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
          }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
        setDropdownOpen(false);
        setUserMenuOpen(false);
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
          const navbar = document.querySelector('.custom-navbar');
          if (navbar) {
              if (window.scrollY > 20) {
                navbar.classList.add("scrolled");
              } else {
                navbar.classList.remove("scrolled");
              }
          }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        setUserMenuOpen(false);
        setIsLoggingOut(true); 

        setTimeout(() => {
            logout();
            setIsLoggingOut(false);
        }, 800);
    };


    return (
      <nav className="custom-navbar fixed-top">
        <div className="custom-container"> 
          
          <Link className="navbar-brand-custom" to="/">
            <img src="src/assets/logo_basic.png" alt="Rutas Secretas" className="navbar-logo me-2" />
            <span className="brand-text fs-4">Rutas Secretas</span>
          </Link>

          <button 
            className={`navbar-toggler-custom ${mobileMenuOpen ? 'open' : ''}`} 
            type="button" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon-custom"></span>
          </button>
          
          <div className={`nav-links-container ${mobileMenuOpen ? 'show' : ''}`} id="navbarNav">
            
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname.includes('Productos') ? 'active' : ''}`} to="/Productos.html">Tours</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname.includes('Nosotros') ? 'active' : ''}`} to="/Nosotros.html">Nosotros</Link>
              </li>
              
              <li className="nav-item custom-dropdown" ref={dropdownRef}>
                <a 
                  className={`nav-link dropdown-toggle-custom ${dropdownOpen ? 'open' : ''}`} 
                  href="#" 
                  role="button" 
                  onClick={(e) => { e.preventDefault(); setDropdownOpen(!dropdownOpen); }}
                  aria-expanded={dropdownOpen}
                >
                  Más
                </a>
                <ul className={`custom-dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                  <li><Link className="dropdown-item-custom" to="/Contactos.html">Contacto</Link></li>
                  <li><Link className="dropdown-item-custom" to="/Blogs.html">Blogs</Link></li>
                </ul>
              </li>
            </ul>

            <div className="navbar-right" id="userArea">
              
              {isLoggingOut ? (
                <div className="nav-btn highlight logging-out-indicator ms-2">
                    Cerrando Sesión...
                </div>
              ) : user ? (
                <div className="user-menu-container" id="userMenuContainer" ref={userMenuRef}>
                  <div id="userMenuToggle" className="user-toggle" onClick={() => setUserMenuOpen(!userMenuOpen)}>
                    <img src="src/assets/Vintage_nature-preview.png" className="user-avatar" alt="user" />
                    <span id="userNameLabel">{user.nombre}</span>
                    <span className="arrow">▼</span>
                  </div>

                  <div id="userPanel" className={`user-panel ${userMenuOpen ? 'open' : 'hidden'}`}>
                    <div className="user-info">
                      <img src="src/assets/Vintage_nature-preview.png" className="user-avatar-large" alt="Avatar Grande"/>
                      <p id="panelUserName" className="user-name">{user.nombre} {user.apellidoP || ''}</p>
                      <p id="panelUserEmail" className="user-email">{user.email}</p>
                    </div>
                    <hr />
                    <button className="user-btn">Mi Perfil</button>
                    <button id="logoutBtn" className="user-btn logout" onClick={handleLogout}>Cerrar Sesión</button>
                  </div>
                </div>
              ) : (
                <Link to="/Login.html" className="nav-btn highlight ms-2" id="loginBtn">
                    Iniciar Sesión
                </Link>
              )}

              <Link to="/Carrito.html" className="nav-btn ms-2" id="carritoBtn">
                Carrito <span className="cart-count">{totalItems}</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
};