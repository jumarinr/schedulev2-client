import React, { useState } from "react";
import { Link } from "react-router-dom";
function Login() {
  // estados de inicio de sesión

  const [usuario, setUsuario] = useState({ email: "", password: "" });

  const { email, password } = usuario;

  const onChangeForm = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar sesión</h1>
        <form onSubmit={onSubmitForm}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingresa tu email"
              onChange={onChangeForm}
              value={email}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              onChange={onChangeForm}
              value={password}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar sesión"
            />
          </div>
        </form>
        <Link to="/nueva-cuenta" className="enlace-cuenta">
          Obtener cuenta
        </Link>
      </div>
    </div>
  );
}

export default Login;
