import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { obtenerProductos } from '../service/ProductoService';
import "../styles/productos.css";

export const Products = () => {
  const { addToCart } = useApp();
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState(''); 

  useEffect(() => {
    async function cargar() {
      try {
        const data = await obtenerProductos();
        setProductos(data);
      } catch (error) {
        console.error("Error cargando productos:", error);
      } finally {
        setCargando(false);
      }
    }
    cargar();
  }, []);
  
  const handleAddToCart = async (idProducto, nombreProducto) => {
    try {
      await addToCart(idProducto);
      
      setToastMessage(`${nombreProducto} agregado al carrito!`);
      setToastType('success');
      setToastVisible(true);
      
      setTimeout(() => {
        setToastVisible(false);
      }, 2000);

    } catch (error) {
      console.error("Fallo al añadir al carrito:", error);
      
      const errorMessage = error.message && error.message.includes("iniciar sesión") 
        ? "Debes iniciar sesión para agregar productos."
        : "Error al agregar al carrito.";
        
      setToastMessage(errorMessage);
      setToastType('error');
      setToastVisible(true);
      
      setTimeout(() => {
        setToastVisible(false);
      }, 4000);
    }
  };

  if (cargando) return <h3 className="text-center mt-5">Cargando productos...</h3>;

  return (
    <div className="productos-page-wrapper">
      <main className="container mt-5 pt-5 py-5">
        <h2 className="text-center mb-5"> Nuestro Catálogo de Tours </h2>

        <div className="productos-grid">
          {productos.map((prod) => (
            <div className="producto-card" key={prod.idProducto}>

              <Link to={`/detalle/${prod.idProducto}`}>
                <img
                  src={prod.imagenUrl}
                  className="card-img-top-compacta"
                  alt={prod.nombre}
                />
              </Link>

              <div className="card-body-compacto">
                <h5 className="titulo-compacto">{prod.nombre}</h5>

                <p className="categoria categoria-compacta">
                  <i className="fas fa-map-marker-alt"></i> Tour
                </p>

                <div className="price-button-compact">
                  <span className="precio precio-compacto">
                    ${prod.precio.toLocaleString("es-CL")} CLP
                  </span>

                  <div className="botones-compactos">
                    <Link
                      to={`/detalle/${prod.idProducto}`}
                      className="btn-detalle"
                    >
                      Detalles
                    </Link>

                    <button
                      className="btn-agregar"
                      onClick={() => handleAddToCart(prod.idProducto, prod.nombre)} 
                    >
                      <i className="fas fa-shopping-cart"></i>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </main>
      
      <div 
        id="toast-general" 
        className={`producto-toast-carrito ${toastVisible ? 'show' : ''} ${toastType === 'error' ? 'toast-error' : 'toast-success'}`}
      >
        <span className="toast-message-content">
          {toastMessage}
        </span>
      </div>
    </div>
  );
};