import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import "../styles/Login.css"

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  const { login } = useApp();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');

    if (!email || !password) {
      setLoginError("Debe ingresar correo y contraseña.");
      return;
    }

    try {
      await login({ email, password });

      navigate('/');

    } catch (error) {
      console.error("Fallo de autenticación:", error);
      setLoginError("Credenciales incorrectas o usuario no registrado.");
    }
  };

  return (
    <main className="login-page-wrapper">

      <Link to="/" className="login-btn-home">
        <span role="img" aria-label="home"></span> Volver al Inicio
      </Link>

      <div className="login-panel-left">
        <h1 className="login-panel-title">Rápido, Eficiente y Productivo</h1>
        <p className="login-panel-text">
          ¡Descubre rutas secretas y únicas! Inicia sesión para continuar tu aventura.
        </p>
      </div>

      <section className="user-box">
        <h2 className="login-titulo">Iniciar Sesión</h2>
        <p className="login-subtitulo">Tu próxima aventura te espera</p>

        <form className="login-form-content" onSubmit={handleSubmit}>

          <div className="login-form-group">
            <label htmlFor="emailInput" className="login-form-label"> Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autocomplete="username" 
            />
            <div id="emailHelp" className="login-help-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
          </div>

          <div className="login-form-group">
            <label htmlFor="passwordInput" className="login-form-label">Contraseña</label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="passwordInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autocomplete="current-password" 
            />
          </div>

          <div className="login-error-msg">{loginError}</div>

          <div className="login-form-check-group">
            <input
              type="checkbox"
              className="form-check-input"
              id="showPassword"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="showPassword">Ver contraseña</label>
          </div>

          <button type="submit" className="login-btn-submit">Iniciar Sesión</button>

          <div className="login-link-container">
            ¿No tienes una cuenta? <Link to="/Registro.html" className="login-link">Regístrate</Link>
          </div>

        </form>
      </section>
    </main>
  );
};