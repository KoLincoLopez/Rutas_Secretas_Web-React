import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import "../styles/Login.css"

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { login } = useApp();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');

    if (!email || !password) {
      setPasswordError("Debe ingresar correo y contraseña.");
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    const usuario = usuarios.find((u) => u.email.toLowerCase() === email.toLowerCase());

    if (!usuario) {
      setEmailError("El usuario no existe.");
      return;
    }

    if (usuario.password !== password) {
      setPasswordError("Contraseña incorrecta.");
      return;
    }

    login(usuario);
    navigate('/');
  };

  return (
    <main className="d-flex justify-content-center align-items-center min-vh-100 login-page-wrapper">
      <section className="user-box">
        <h2 className="text-center mb-4"> Iniciar Sesión </h2>
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label"> Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="text-danger small">{emailError}</div>
            <div id="emailHelp" className="form-text">Nunca compartiremos tu correo electrónico con nadie más.</div>
          </div>
          <div className="mb-3">

            <label htmlFor="passwordInput" className="form-label">Contraseña</label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="passwordInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="text-danger small">{passwordError}</div>
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="showPassword"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="showPassword">Ver contraseña</label>
          </div>

          <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
          <br /><br />
          <nav>
            <Link to="/Registro.html">¿No tienes una cuenta? Registrate </Link>
          </nav>
        </form>
      </section>
    </main>
  );
};