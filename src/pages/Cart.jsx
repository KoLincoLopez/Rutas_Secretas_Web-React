import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import "../styles/Carrito.css"

export const Cart = () => {
  const { cart, removeFromCart, updateCartQuantity, clearCart } = useApp();

  const total = cart.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

  return (
    <div className="carrito-page-wrapper">
      <main className="container mt-5 pt-5">
        <div className="container-fluid">
          <h2 id="carrito-titulo" className="text-center mb-4 pt-3">
            Tu Carrito de Compras</h2>
          <div className="row">

            <div className="col-lg-8 mb-4">
              <section id="carritoSection">
                <div className="row" id="carrito-lista">
                  {cart.length === 0 ? (
                    <div className="col-12">
                      <p className="text-center p-5 border rounded">
                        Tu carrito está vacío. ¡Explora nuestros <Link to="/Productos.html">Tours</Link>!
                      </p>
                    </div>
                  ) : (
                    cart.map((item, index) => (
                      <div className="col-12 col-md-6 mb-4" key={index}>
                        <div className="card h-100 shadow-sm">
                          <img src={item.img || item.imagen} className="card-img-top" alt={item.nombre} />
                          <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{item.nombre}</h5>
                            <p className="card-text text-muted small">{item.descripcion ? 'Ver detalles en tour' : 'Sin descripción.'}</p>
                            <p className="card-text fw-bold">Precio unitario: ${item.precio.toLocaleString('es-CL')}</p>

                            <div className="d-flex align-items-center mb-3 mt-auto">
                              <span className="me-3">Cantidad:</span>
                              <button className="btn btn-sm btn-outline-secondary" onClick={() => updateCartQuantity(index, -1)}>-</button>
                              <span className="mx-2">{item.cantidad}</span>
                              <button className="btn btn-sm btn-outline-secondary" onClick={() => updateCartQuantity(index, 1)}>+</button>
                            </div>

                            <p className="card-text fw-bold">Subtotal: ${(item.precio * item.cantidad).toLocaleString('es-CL')}</p>
                            <button className="btn btn-sm btn-danger mt-2" onClick={() => removeFromCart(index)}>Eliminar Tour</button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </section>
            </div>

            <div className="col-lg-4">
              <div className="resumen-orden shadow-sm p-4">
                <h4 className="card-title mb-3 border-bottom pb-2">Resumen de la Compra</h4>

                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal:</span>
                  <span id="carrito-total-subtotal">${total.toLocaleString('es-CL')}</span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span>Descuento:</span>
                  <span className="text-danger">-$0</span>
                </div>

                <hr />

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="m-0">Total:</h4>
                  <h4 className="m-0 text-primary">${total.toLocaleString('es-CL')}</h4>
                </div>

                {/* NOTA: He reemplazado el alert() por un mensaje temporal en la consola, 
                   ya que alert() no funciona en este entorno de desarrollo. */}
                <button id="Pagar" className="btn-full-width mb-3" onClick={() => console.log("Procesando pago... ¡Gracias por tu compra!")}>
                  Proceder al Pago
                </button>

                <button id="vaciar-carrito" className="btn-outline-full-width" onClick={clearCart}>
                  Vaciar Carrito
                </button>

              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};