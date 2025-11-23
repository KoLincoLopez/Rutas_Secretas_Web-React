import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Registro.css"

export const Register = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    comuna: '',
    direccion: '',
    email: '',
    password: '',
    confirmar: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    if (!email) return false;
    if (email.length > 100) return false;
    const re = /^[^\s@]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/i;
    return re.test(email);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Correo inválido. Debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com y máximo 100 caracteres.';
    }

    if (formData.password.length < 4 || formData.password.length > 10) {
      newErrors.password = 'La contraseña debe tener entre 4 y 10 caracteres.';
    }

    if (formData.password !== formData.confirmar) {
      newErrors.confirmar = 'Las contraseñas no coinciden.';
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    if (usuarios.some((u) => u.email.toLowerCase() === formData.email.toLowerCase())) {
      newErrors.email = 'El correo ya está registrado.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const nuevoUsuario = {
      nombre: formData.nombres,
      apellidoP: formData.apellidoPaterno,
      email: formData.email,
      password: formData.password,
      creadoEn: new Date().toISOString()
    };

    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    setToast(true);
    setTimeout(() => {
      setToast(false);
      navigate('/Login.html');
    }, 2500);
  };

  return (
    <main className="registro-page-wrapper d-flex justify-content-center align-items-center min-vh-100">
      <section className="registro-box">
        <h2 className="text-center mb-4">Registrarse</h2>
        <form className="row g-3" onSubmit={handleSubmit} noValidate>
          <div className="col-md-6">
            <label htmlFor="nombres" className="form-label">Nombres</label>
            <input type="text" className="form-control" id="nombres" placeholder="Tu nombre" onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label htmlFor="apellidoPaterno" className="form-label">Apellido Paterno</label>
            <input type="text" className="form-control" id="apellidoPaterno" placeholder="Apellido paterno" onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label htmlFor="apellidoMaterno" className="form-label">Apellido Materno</label>
            <input type="text" className="form-control" id="apellidoMaterno" placeholder="Apellido materno" onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label htmlFor="comuna" className="form-label">Comuna</label>
            <input type="text" className="form-control" id="comuna" placeholder="Comuna" onChange={handleChange} />
          </div>
          <div className="col-md-12">
            <label htmlFor="direccion" className="form-label">Dirección</label>
            <input type="text" className="form-control" id="direccion" placeholder="Dirección" onChange={handleChange} />
          </div>
          <div className="col-md-12">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={handleChange} />
            <div className="text-danger small mt-1">{errors.email}</div>
            <div id="emailHelp" className="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input type={showPassword ? "text" : "password"} className="form-control" id="password" placeholder="Crea una contraseña" onChange={handleChange} />
            <div className="text-danger small mt-1">{errors.password}</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="confirmar" className="form-label">Confirmar Contraseña</label>
            <input type={showPassword ? "text" : "password"} className="form-control" id="confirmar" placeholder="Repite la contraseña" onChange={handleChange} />
            <div className="text-danger small mt-1">{errors.confirmar}</div>
          </div>
          <div className="col-md-12 form-check">
            <input type="checkbox" className="form-check-input" id="showPasswordRegistro" checked={showPassword} onChange={(e) => setShowPassword(e.target.checked)} />
            <label className="form-check-label" htmlFor="showPasswordRegistro">Ver contraseña</label>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">Registrarse</button>
          </div>
        </form>
      </section>
      <div className={`toast-success ${toast ? 'show' : ''}`}>
        Registro exitoso. Redirigiendo al login...
      </div>
      <br /><br /><br /><br />
    </main>
  );
};