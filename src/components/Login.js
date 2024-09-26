import React, { useState } from 'react';

function Login() {
  return( 
  <div className="container">
    <div className="header">
      <h1>Condelivery</h1>
      </div>
    <div className="login-form">
      <h2 className="login">Login</h2>
      <input className= "text-box" type="text" placeholder="Digite seu e-mail" />
      <input className= "text-box" type="password" placeholder="Digite sua senha" />
      <button >Entrar</button>
      <p>Não possui uma conta? <a href="#">Cadastre-se</a></p>
      <p>Ao Cadastrar-se, você concorda com nossos <a href="#">Termos</a>, <a href="#">Política de Privacidade</a> e <a href="#">Política de Cookies</a>.</p>
    </div>
      <div className='footer'>-</div>
  </div>)
}
export default Login;