import React, { useState } from "react";
import { Link } from "react-router-dom";
function NuevaCuenta() {
  // estados de inicio de sesión

  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
    nombre: "",
    confirmar: "",
  });

  const { email, password, nombre, confirmar } = usuario;

  const onChangeForm = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Obtener una cuenta</h1>
        <form onSubmit={onSubmitForm}>
          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ingresa tu nombre"
              onChange={onChangeForm}
              value={nombre}
            />
          </div>

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
            <label htmlFor="confirmar">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="Confirma tu contraseña"
              onChange={onChangeForm}
              value={confirmar}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Crear Cuenta"
            />
          </div>
        </form>
        <Link to="/" className="enlace-cuenta">
          ¿Ya tienes una cuenta? Inicia sesión aquí
        </Link>
      </div>
    </div>
  );
}

export default NuevaCuenta;
