import React, { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./Signup";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";

export default function LogIn({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const { username, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;

    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      username,
      password,
    };
    login(credentials).then((res) => {
      if (!res.status) {
        return setError({ message: "Invalid credentials" });
      }
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(`/:${res.data?.user?._id}`);
    });
  }

  return (
    <div className="regBox">
      <h1>Entra</h1>
      <form onSubmit={handleFormSubmission} className="auth__form">
        <label htmlFor="input-username" className="label">Nombre de usuario</label>
        <input className="input"
          id="input-username"
          type="text"
          name="username"
          placeholder="Nombre de usuario"
          value={username}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="input-password" className="label">Contraseña</label>
        <input className="input"
          id="input-password"
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={handleInputChange}
          required
          minLength="8"
        />

        {error && (
          <div className="error-block">
            <p>Hubo un error en tus datos:</p>
            <p>Usuario o contraseña incorrectos</p>
          </div>
        )}

        <button className="button__submit" type="submit">
          ¡Entrar!
        </button>
      </form>
    </div>
  );
}
