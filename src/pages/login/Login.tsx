import React, { useState } from "react";
import "./Login.scss";

import { TbUserCircle, TbLock } from "react-icons/tb";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("submit", { email, password });
  };

  return (
    <div className="login-section">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="input-div">
            <TbUserCircle />
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="input-div">
            <TbLock />
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Sua Senha"
              required
            />
          </div>
        </div>
        <div className="login-buttons">
          <button type="submit">Entrar</button>
          <p>Redefinir Senha</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
