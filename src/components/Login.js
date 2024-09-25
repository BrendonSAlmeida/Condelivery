import React, { useState } from 'react';

function Login() {
  return( 
  <div className="container">
    <div className="login-form">
    <h1>Condelivery</h1>
      <h2>Login</h2>
      <input type="text" placeholder="Digite seu e-mail ou código de usuário" />
      <input type="password" placeholder="Digite sua senha" />
      <button>Entrar</button>
      <p>Não possui uma conta? <a href="#">Cadastre-se</a></p>
    </div>
  </div>)
}
export default Login;