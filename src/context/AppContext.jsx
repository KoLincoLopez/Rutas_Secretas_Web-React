import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  // Cargar estado inicial
  useEffect(() => {
    const storedUser = localStorage.getItem('usuarioActual');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) { console.error("Error parsing user", e); }
    }

    const storedCart = localStorage.getItem('carrito');
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch (e) { console.error("Error parsing cart", e); }
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('usuarioActual', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('usuarioActual');
  };

  const addToCart = (newItem) => {
    const updatedCart = [...cart];
    const existingIndex = updatedCart.findIndex(item => item.nombre === newItem.nombre);
    
    if (existingIndex > -1) {
      updatedCart[existingIndex].cantidad += 1;
    } else {
      updatedCart.push({ ...newItem, cantidad: 1 });
    }
    
    setCart(updatedCart);
    localStorage.setItem('carrito', JSON.stringify(updatedCart));
    
    // Mostrar toast (simulado para mantener fidelidad visual con original)
    const toast = document.getElementById('toast-carrito');
    if (toast) {
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2000);
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('carrito', JSON.stringify(updatedCart));
  };

  const updateCartQuantity = (index, delta) => {
    const updatedCart = [...cart];
    updatedCart[index].cantidad += delta;
    
    if (updatedCart[index].cantidad <= 0) {
      updatedCart.splice(index, 1);
    }
    
    setCart(updatedCart);
    localStorage.setItem('carrito', JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('carrito');
  };

  return (
    <AppContext.Provider value={{ user, login, logout, cart, addToCart, removeFromCart, updateCartQuantity, clearCart }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp debe ser usado dentro de un AppProvider');
  }
  return context;
};