import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { productos } from '../data/products';
import "../styles/productos.css"

export const Products = () => {
  const { addToCart } = useApp();

  const displayIds = ['4', '5', '6', '7', '8', '9', '10', '11'];

  return (
    <div className="productos-page-wrapper">
      <main className="container mt-5 pt-5 py-5">
        <h2 className="text-center mb-5"> Nuestro Catálogo de Tours </h2>
        
        <div className="productos-grid">
          {displayIds.map(id => {
              const prod = productos[id];
              if(!prod) return null;
              
              return (
                <div className="producto-card" key={id}>
                  <Link to={`/Detalle.html?id=${id}`}>
                      <img src={prod.imagen} className="card-img-top-compacta" alt={prod.titulo} />
                  </Link>
                  <div className="card-body-compacto">
                      <h5 className="titulo-compacto">{prod.titulo}</h5>
                      <p className="categoria categoria-compacta">
                        <i className="fas fa-map-marker-alt"></i> Tour
                      </p>
                      <div className="price-button-compact">
                        <span className="precio precio-compacto">${prod.precio_base.toLocaleString('es-CL')} CLP</span>
                        <div className="d-flex">
                          <Link to={`/Detalle.html?id=${id}`} className="btn btn-primary btn-sm me-2">Detalles</Link>
                          <button className="agregar-btn btn btn-success btn-sm" 
                              onClick={() => addToCart({ nombre: prod.titulo, precio: prod.precio_base, img: prod.imagen })}
                          >
                            <i className="fas fa-shopping-cart"></i>
                          </button>
                        </div>
                      </div>
                  </div>
                </div>
              );
          })}
        </div>
        <div id="toast-carrito" className="toast-carrito">¡Se agregó al carrito!</div>
      </main>
    </div>
  );
};