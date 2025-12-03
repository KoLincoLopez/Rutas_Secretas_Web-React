import axios from "axios";

const API_BASE_URL = "http://localhost:8082/carritos";

export async function fetchCarritoItems(idUsuario) {
    try {
        const response = await axios.get(`${API_BASE_URL}/usuario/${idUsuario}`); 
        return response.data;
    } catch (error) {
        console.error("Error al obtener el carrito por usuario:", error.response || error.message);
        throw error;
    }
}

export async function addItemToCart(itemData) { 
    try {
        const response = await axios.post(API_BASE_URL, itemData);
        return response.data;
    } catch (error) {
        console.error("Error al agregar ítem al carrito:", error.response || error.message);
        throw error;
    }
}

export async function updateCartItem(idCarrito, updatedData) { 
    try {
        const response = await axios.put(`${API_BASE_URL}/${idCarrito}`, updatedData);
        return response.data;
    } catch (error) {
        console.error(`Error al actualizar el ítem ${idCarrito}:`, error.response || error.message);
        throw error;
    }
}

export async function deleteCartItem(idCarrito) { 
    try {
        await axios.delete(`${API_BASE_URL}/${idCarrito}`);
        return true;
    } catch (error) {
        console.error(`Error al eliminar el ítem ${idCarrito}:`, error.response || error.message);
        throw error;
    }
}