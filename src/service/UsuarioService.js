import axios from "axios";

const API_URL = "http://localhost:8083/usuarios";

export async function login(data) {
    const { email, password } = data;

    try {
        const encodedEmail = encodeURIComponent(email);
        const encodedPassword = encodeURIComponent(password);

        const response = await axios.post(`${API_URL}/login?email=${encodedEmail}&password=${encodedPassword}`);

        const usuario = response.data;

        if (!usuario || !usuario.idUsuario) { 
            throw new Error("Login falló: ID de usuario ausente en la respuesta.");
        }

        return {
            ...usuario,
            id: usuario.idUsuario
        };

    } catch (error) {
        console.error("Error en la autenticación:", error.response || error);
        const errorMessage = error.response?.data?.message || 'Credenciales incorrectas o error de red.';
        throw new Error(errorMessage);
    }
}
export async function register(data) {
    try {
        const response = await axios.post(`${API_URL}/registrar`, data);
        return response.data;
    } catch (error) {
        console.error("Error en el registro:", error.response || error);
        throw new Error("Fallo en el registro de usuario.");
    }
}
