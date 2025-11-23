import React, { useState } from 'react';
import "../styles/Contactos.css"

export const Contact = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(false);

  const validarEmail = (email) => {
    if (!email) return true;
    if (email.length > 100) return false;
    const re = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!nombre.trim()) newErrors.nombre = 'El nombre es obligatorio.';
    else if (nombre.length > 100) newErrors.nombre = 'El nombre no puede exceder los 100 caracteres.';

    if (!validarEmail(email)) newErrors.email = 'Correo inválido. Debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com y máximo 100 caracteres.';

    if (!mensaje.trim()) newErrors.mensaje = 'El mensaje es obligatorio.';
    else if (mensaje.length > 500) newErrors.mensaje = 'El mensaje no puede exceder los 500 caracteres.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const contacto = {
      nombre,
      email,
      mensaje,
      fecha: new Date().toISOString()
    };

    const contactos = JSON.parse(localStorage.getItem('contactos') || '[]');
    contactos.push(contacto);
    localStorage.setItem('contactos', JSON.stringify(contactos));

    setToast(true);
    setTimeout(() => {
      setToast(false);
      setNombre('');
      setEmail('');
      setMensaje('');
    }, 2500);
  };

  return (
    <div className="contact-page-wrapper">

      <main className="d-flex justify-content-center align-items-center min-vh-100 contact-page-main">
        <section className="contact-box">
          <h2 className="text-center mb-4">Contáctanos</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              <div className="text-danger small">{errors.nombre}</div>
            </div>
            <div className="mb-3">
              <label htmlFor="gmail" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" id="gmail" placeholder="ejemplo@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              <div className="text-danger small">{errors.email}</div>
            </div>
            <div className="mb-3">
              <label htmlFor="mensaje" className="form-label">Mensaje</label>
              <textarea className="form-control" id="mensaje" rows={4} placeholder="Escribe tu mensaje..." value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
              <div className="text-danger small">{errors.mensaje}</div>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
          </form>
        </section>
        <div className={`toast-success ${toast ? 'show' : ''}`}>
          Mensaje enviado correctamente.
        </div>
      </main>

    </div>
  );
};