import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import "../styles/Carrito.css";

export const Cart = () => {
    const { cart, loading, error, removeFromCart, updateCartQuantity, clearCart } = useApp();

    const total = cart.reduce((acc, item) => acc + (item.subtotal || 0), 0);

    if (loading) {
        return (
            <div className="carrito-page-wrapper">
                <main className="carrito-container">
                    <p className="mensaje-texto">Cargando carrito...</p>
                </main>
            </div>
        );
    }

    if (error) {
        return (
            <div className="carrito-page-wrapper">
                <main className="carrito-container">
                    <p className="mensaje-texto error">Error al cargar el carrito: {error}</p>
                </main>
            </div>
        );
    }

    return (
        <div className="carrito-page-wrapper">
            <main className="carrito-container">
                <div className="carrito-content-wrapper">
                    <h2 className="carrito-titulo">Tu Carrito de Compras</h2>

                    <div className="carrito-grid-layout">

                        <div className="carrito-lista-columna">
                            <section className="carrito-lista-section">
                                <div className="carrito-lista">
                                    {cart.length === 0 ? (
                                        <div className="carrito-vacio-mensaje">
                                            <p className="mensaje-texto">
                                                Tu carrito está vacío. ¡Explora nuestros <Link to="/Productos.html">Tours</Link>!
                                            </p>
                                        </div>
                                    ) : (
                                        cart.map((item) => (
                                            <div className="carrito-item-contenedor" key={item.idCarrito}>
                                                <div className="carrito-item-card">
                                                    {/* CORRECCIÓN 1: Usar 'imagenUrl' */}
                                                    <img src={item.imagenUrl} className="carrito-item-img" alt={item.nombre} />

                                                    <div className="carrito-item-body">
                                                        <h5 className="item-titulo">{item.nombre}</h5>
                                                        {/* CORRECCIÓN 3: Simplificación de la descripción */}
                                                        <p className="item-descripcion">Paquete de Tour | ID: {item.idPaquete}</p>

                                                        {/* CORRECCIÓN 2: Usar 'precioUnitario' */}
                                                        <p className="item-precio-unitario">Precio unitario: <strong>${item.precioUnitario.toLocaleString('es-CL')}</strong></p>

                                                        <div className="item-cantidad-control">
                                                            <span className="cantidad-label">Cantidad:</span>
                                                            <button className="btn-control btn-menos" onClick={() => updateCartQuantity(item, -1)}>-</button>
                                                            <span className="cantidad-valor">{item.cantidad}</span>
                                                            <button className="btn-control btn-mas" onClick={() => updateCartQuantity(item, 1)}>+</button>
                                                        </div>

                                                        <p className="item-subtotal">Subtotal: <strong>${item.subtotal.toLocaleString('es-CL')}</strong></p>
                                                        <button className="btn-eliminar" onClick={() => removeFromCart(item.idCarrito)}>Eliminar Tour</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </section>
                        </div>

                        <div className="carrito-resumen-columna">
                            <div className="resumen-orden-box">
                                <h4 className="resumen-titulo">Resumen de la Compra</h4>

                                <div className="resumen-fila">
                                    <span className="resumen-label">Subtotal:</span>
                                    <span className="resumen-valor">${total.toLocaleString('es-CL')}</span>
                                </div>

                                <div className="resumen-fila">
                                    <span className="resumen-label">Descuento:</span>
                                    <span className="resumen-valor text-danger">-$0</span>
                                </div>

                                <hr className="resumen-divisor" />

                                <div className="resumen-total-fila">
                                    <h4 className="resumen-total-label">Total:</h4>
                                    <h4 className="resumen-total-valor">${total.toLocaleString('es-CL')}</h4>
                                </div>

                                <button className="btn-pago" onClick={() => console.log("Procesando pago... ¡Gracias por tu compra!")}>
                                    Proceder al Pago
                                </button>

                                <button className="btn-vaciar" onClick={clearCart}>
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