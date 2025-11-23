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
        <br /><br /><br /><br />
        <div className="container py-5 text-center">
          <p>Producto no encontrado. Vuelve a <Link to="/Productos.html">Tours</Link>.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="detalle-page-wrapper">
      <br /><br /><br /><br />
      <div className="container py-5">
        <div id="detalleProducto" className="card shadow p-4">
          <h2 id="titulo" className="text-center mb-3">{product.titulo}</h2>
          <img id="imagen" src={product.imagen} className="img-fluid rounded mb-3 detalle-img" alt={product.titulo} />
          <div id="descripcion" dangerouslySetInnerHTML={{ __html: product.descripcion }} />
          <p id="precio" className="fw-bold fs-5 mt-2">
            Precio: {product.precio_base.toLocaleString('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 })}
          </p>
          <div className="text-center mt-3">
            <button
              id="btnAgregarCarrito"
              className="btn btn-primary"
              onClick={() => addToCart({ nombre: product.titulo, precio: product.precio_base, img: product.imagen })}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
      <div id="toast-carrito" className="detalle-toast-carrito">¡Se agregó al carrito!</div>
    </div>
  );
};