import React, { useState, useEffect } from 'react';
import axios from 'axios'; // O no importas nada si usas 'fetch'

function ApiTest() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Usando Axios (Si lo instalaste)
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        setData(response.data);
        console.log("¡Axios funciona! Datos recibidos:", response.data.title);
      })
      .catch(error => {
        console.error("Error con Axios:", error);
      });

    /*
    // O Usando Fetch (Si prefieres la opción nativa)
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(data => {
        setData(data);
        console.log("¡Fetch funciona! Datos recibidos:", data.title);
      })
      .catch(error => {
        console.error("Error con Fetch:", error);
      });
    */
  }, []);

  return (
    <div>
      <h2>Prueba de Conexión a API</h2>
      {data ? <p>Título cargado: **{data.title}**</p> : <p>Cargando...</p>}
    </div>
  );
}

export default ApiTest;