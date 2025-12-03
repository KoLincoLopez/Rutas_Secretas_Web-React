import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../service/UsuarioService';
import "../styles/Registro.css"

export const Register = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidoPaterno: '',
    email: '',
    password: '',
    confirmar: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(false);
  const [apiError, setApiError] = useState('');
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
    setApiError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    setApiError('');

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Correo inválido. Debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com y máximo 100 caracteres.';
    }

    if (formData.password.length < 4 || formData.password.length > 10) {
      newErrors.password = 'La contraseña debe tener entre 4 y 10 caracteres.';
    }

    if (formData.password !== formData.confirmar) {
      newErrors.confirmar = 'Las contraseñas no coinciden.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const nuevoUsuario = {
      nombres: formData.nombres,
      apellidoPaterno: formData.apellidoPaterno,
      email: formData.email,
      password: formData.password,
    };

    try {
      await register(nuevoUsuario);

      setToast(true);
      setTimeout(() => {
        setToast(false);
        navigate('/Login.html');
      }, 2500);

    } catch (error) {
      console.error("Error de registro API:", error);
      setApiError(error.message || "Fallo en el registro. Intente más tarde.");
    }
  };

  return (
    <main className="registro-page-wrapper">
      <Link to="/" className="register-btn-home">
        <span role="img" aria-label="home"></span> Volver al Inicio
      </Link>
      <div className="registro-panel-left">
        <h1 className="registro-panel-title">Rápido y Facil</h1>
        <p className="registro-panel-text">
          Descubre rutas secretas y únicas. Inscríbete ahora para empezar tu aventura.
        </p>
      </div>

      <section className="registro-box">
        <h2 className="registro-titulo">Crear Cuenta</h2>
        <p className="registro-subtitulo">Tu próxima aventura te espera</p>

        <form className="registro-form" onSubmit={handleSubmit} noValidate>

          <div className="registro-form-group-grid">
            <div className="registro-form-group">
              <label htmlFor="nombres" className="registro-form-label">Nombres</label>
              <input type="text" className="registro-form-control" id="nombres" placeholder="Tu nombre" onChange={handleChange} />
            </div>
            <div className="registro-form-group">
              <label htmlFor="apellidoPaterno" className="registro-form-label">Apellido Paterno</label>
              <input type="text" className="registro-form-control" id="apellidoPaterno" placeholder="Apellido paterno" onChange={handleChange} />
            </div>
          </div>

          <div className="registro-form-group">
            <label htmlFor="email" className="registro-form-label">Correo Electrónico</label>
            <input
              type="email"
              className="registro-form-control"
              id="email"
              onChange={handleChange}
              autocomplete="username" 
            />
            <div className="registro-error-msg">{errors.email || apiError}</div>
            <div className="registro-help-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
          </div>

          <div className="registro-form-group-grid">
            <div className="registro-form-group">
              <label htmlFor="password" className="registro-form-label">Contraseña</label>
              <input
                type={showPassword ? "text" : "password"}
                className="registro-form-control"
                id="password"
                placeholder="Crea una contraseña"
                onChange={handleChange}
                autocomplete="new-password" 
              />
              <div className="registro-error-msg">{errors.password}</div>
            </div>
            <div className="registro-form-group">
              <label htmlFor="confirmar" className="registro-form-label">Confirmar Contraseña</label>
              <input
                type={showPassword ? "text" : "password"}
                className="registro-form-control"
                id="confirmar"
                placeholder="Repite la contraseña"
                onChange={handleChange}
                autocomplete="new-password" 
              />
              <div className="registro-error-msg">{errors.confirmar}</div>
            </div>
          </div>

          <div className="registro-form-check-group">
            <input type="checkbox" className="registro-form-check-input" id="showPasswordRegistro" checked={showPassword} onChange={(e) => setShowPassword(e.target.checked)} />
            <label className="registro-form-check-label" htmlFor="showPasswordRegistro">Ver contraseña</label>

          </div>

          <div className="registro-submit-group">
            <button type="submit" className="registro-btn-submit">Registrarse</button>
          </div>

          <div className="registro-login-link-container">
            ¿Ya tienes una cuenta? <Link to="/Login.html" className="registro-login-link">Iniciar Sesión</Link>
          </div>

        </form>
      </section>

      <div className={`registro-toast-success ${toast ? 'show' : ''}`}>
        Registro exitoso. Redirigiendo al login...
      </div>
    </main>
  );
};