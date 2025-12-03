import axios from 'axios';
const API_URL = "http://localhost:8081/productos";

export async function obtenerProductos() {
  try {
    const resp = await axios.get(API_URL); 
    return resp.data;
  } catch (error) {
    console.error("Error al obtener la lista de productos:", error);
    throw new Error("Error al obtener la lista de productos.");
  }
}

export async function obtenerProductoPorId(id) {
  try {
    const resp = await axios.get(`${API_URL}/${id}`);
    return resp.data;
  } catch (error) {
    console.error(`Error al obtener producto por ID ${id}:`, error);
    throw new Error(`Error al obtener producto por ID ${id}.`);
  }
}

export const fetchPaqueteDetails = obtenerProductoPorId;

