import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { productos } from '../data/products';
import "../styles/Detalle.css"

export const Detail = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const { addToCart } = useApp();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id && productos[id]) {
      setProduct(productos[id]);
    }
  }, [id]);

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
          <h2 id="titulo" className="detalle-titulo">{product.titulo}</h2>
          
          <img id="imagen" src={product.imagen} className="detalle-img" alt={product.titulo} /> 
          
          <div className="detalle-text-container"> 
            <div id="descripcion" className="detalle-descripcion" dangerouslySetInnerHTML={{ __html: product.descripcion }} />
            
            <p id="precio" className="detalle-precio"> 
              Precio: {product.precio_base.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 })}
            </p>
            
            <div className="detalle-acciones"> 
              <button
                id="btnAgregarCarrito"
                className="btn-agregar-carrito" 
                onClick={() => addToCart({ nombre: product.titulo, precio: product.precio_base, img: product.imagen })}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="toast-carrito" className="detalle-toast-carrito">¡Se agregó al carrito!</div>
    </div>
  );
};