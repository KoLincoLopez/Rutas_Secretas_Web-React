import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
    fetchCarritoItems,
    addItemToCart,
    updateCartItem,
    deleteCartItem
} from '../service/CarritoService';
import { obtenerProductoPorId } from '../service/ProductoService';
import { login as apiLogin } from '../service/UsuarioService';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('usuarioActual');
        if (storedUser) {
            try {
                const userData = JSON.parse(storedUser);
                setUser(userData);
            } catch (e) {
                console.error("Error parsing user from localStorage", e);
                localStorage.removeItem("usuarioActual");
            }
        }
    }, []);

    const login = async ({ email, password }) => {
        setError(null);
        try {
            const userData = await apiLogin({ email, password });
            setUser(userData);
            localStorage.setItem("usuarioActual", JSON.stringify(userData));

            await loadCart(userData);
            return userData;
        } catch (e) {
            setError(e.message || "Error de inicio de sesión.");
            throw e;
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("usuarioActual");
        setCart([]);
    };

    const loadCart = useCallback(async (user) => {
        if (!user || !user.id) {
            setCart([]);
            return;
        }

        setLoading(true);
        setError(null);
        try {
            const backendCartItems = await fetchCarritoItems(user.id);

            const enrichedCartPromises = backendCartItems.map(async (item) => {
                const paqueteDetails = await obtenerProductoPorId(item.idPaquete); // <-- USADA

                return {
                    ...item,
                    nombre: paqueteDetails.nombre,
                    imagenUrl: paqueteDetails.imagenUrl,
                    precioUnitario: paqueteDetails.precio
                };
            });

            setCart(await Promise.all(enrichedCartPromises));
        } catch (err) {
            console.error("Cart loading error:", err);
            setError("Error al cargar el carrito.");
            setCart([]);
        } finally {
            setLoading(false);
        }
    }, [obtenerProductoPorId, fetchCarritoItems]);

    useEffect(() => {
        if (user && user.id) {
            loadCart(user);
        } else {
            setCart([]);
        }
    }, [user, loadCart]);

    const addToCart = async (idPaquete) => {
        if (!user || !user.id) {
            alert("Debes iniciar sesión para añadir productos.");
            return;
        }

        const existingItem = cart.find(item => item.idPaquete === idPaquete);

        setLoading(true);
        try {
            let precioUnitario;

            if (!existingItem) {
                const paqueteDetails = await obtenerProductoPorId(idPaquete);
                precioUnitario = paqueteDetails.precio;
            } else {
                precioUnitario = existingItem.precioUnitario;
            }

            const cantidadToAdd = 1;

            if (existingItem) {
                const newCantidad = existingItem.cantidad + cantidadToAdd;

                const updatedData = {
                    idUsuario: user.id,
                    idPaquete: existingItem.idPaquete,
                    cantidad: newCantidad,
                    subtotal: precioUnitario * newCantidad
                };

                await updateCartItem(existingItem.idCarrito, updatedData);
            } else {
                const itemData = {
                    idUsuario: user.id,
                    idPaquete: idPaquete,
                    cantidad: 1,
                    subtotal: precioUnitario
                };

                await addItemToCart(itemData);
            }

            await loadCart(user);
        } catch (e) {
            console.error("Error al añadir al carrito:", e);
            setError("Fallo al comunicar con el carrito.");
        } finally {
            setLoading(false);
        }
    };

    const removeFromCart = async (idCarrito) => {
        if (!user || !user.id) return;

        setLoading(true);
        try {
            await deleteCartItem(idCarrito);
            await loadCart(user);
        } catch (e) {
            console.error("Error al eliminar del carrito:", e);
            setError("Fallo al eliminar el ítem.");
        } finally {
            setLoading(false);
        }
    };

    const updateCartQuantity = async (item, delta) => {
        if (!user || !user.id || !item.idCarrito) return;

        const newCantidad = item.cantidad + delta;

        if (newCantidad <= 0) {
            await removeFromCart(item.idCarrito);
            return;
        }

        const updatedData = {
            idUsuario: user.id,
            idPaquete: item.idPaquete,
            cantidad: newCantidad,
            subtotal: item.precioUnitario * newCantidad
        };

        setLoading(true);
        try {
            await updateCartItem(item.idCarrito, updatedData);
            await loadCart(user);
        } catch (e) {
            console.error("Error actualizando cantidad:", e);
            setError("Fallo al actualizar la cantidad.");
        } finally {
            setLoading(false);
        }
    };

    const clearCart = async () => {
        if (!user || !user.id) return;

        setLoading(true);
        try {
            const promises = cart.map(item => deleteCartItem(item.idCarrito));
            await Promise.all(promises);

            await loadCart(user);
        } catch (e) {
            console.error("Error al vaciar carrito:", e);
            setError("Fallo al vaciar el carrito.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AppContext.Provider
            value={{
                user,
                login,
                logout,
                cart,
                loading,
                error,
                addToCart,
                removeFromCart,
                updateCartQuantity,
                clearCart
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useApp debe usarse dentro de AppProvider");
    }
    return context;
};
