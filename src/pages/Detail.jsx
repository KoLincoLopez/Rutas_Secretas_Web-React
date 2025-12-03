import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { obtenerProductoPorId } from '../service/ProductoService';
import "../styles/Detalle.css";

export const Detail = () => {
  const { id } = useParams();

  const { addToCart, showToast } = useApp(); 
  const [product, setProduct] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [toastVisible, setToastVisible] = useState(false); 

  useEffect(() => {
    async function cargarProducto() {
      try {
        if (!id) return;

        const data = await obtenerProductoPorId(id);
               setProduct({ ...data, idPaquete: id });
      } catch (error) {
        console.error("Error cargando producto:", error);
      } finally {
        setCargando(false);
      }
    }
    cargarProducto();
  }, [id]);


  const handleAddToCart = async () => {
    if (!product || !product.idPaquete) {
      console.error("Error: Producto o idPaquete no disponible.");
      return;
    }

    try {
      await addToCart(product.idPaquete, 1); 

      setToastVisible(true);
      setTimeout(() => {
        setToastVisible(false);
      }, 2000);

    } catch (error) {
      console.error("Error al agregar al carrito:", error);
      // Opcional: Mostrar un toast de error
    }
  };


  if (cargando) {
    return (
      <div className="detalle-page-wrapper">
        <div className="detalle-contenido-vacio">
          <p>Cargando producto...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="detalle-page-wrapper">
        <div className="detalle-contenido-vacio">
          <p>Producto no encontrado. Vuelve a <Link to="/Productos.html">Tours</Link>.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="detalle-page-wrapper">
      <div className="detalle-main-container">

        <div id="detalleProducto" className="detalle-card-layout">

          <h2 className="detalle-titulo">{product.nombre}</h2>

          <img
            src={product.imagenUrl}
            className="detalle-img"
            alt={product.nombre}
          />

          <div className="detalle-text-container">

            <div
              className="detalle-descripcion"
              dangerouslySetInnerHTML={{ __html: product.descripcion }}
            />

            <p className="detalle-precio">
              Precio: {product.precio.toLocaleString('es-CL', {
                style: 'currency',
                currency: 'CLP',
                minimumFractionDigits: 0
              })}
            </p>

            <div className="detalle-acciones">
              <button
                className="btn-agregar-carrito"
                onClick={handleAddToCart} 
              >
                Agregar al carrito
              </button>
            </div>

          </div>
        </div>

      </div>

      <div id="toast-carrito" className={`detalle-toast-carrito ${toastVisible ? 'show' : ''}`}>
        ¡Se agregó al carrito!
      </div>
    </div>
  );
};