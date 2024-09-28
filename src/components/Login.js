import React, { useState } from 'react';
import AppRoutes from './Routes';
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();

  const handleLogin   
 = () => {
    //adicionar a lógica de autenticação
    // Se a autenticação for bem-sucedida, direcionar para Home
    navigate('/home');
  };
  return( 
  <div className='all'>
  <div className="container">
    <div className="header">
      <h1>Condelivery</h1>
      </div>
    <div className="login-form">
      <h2 className="login">Login</h2>
      <input className= "text-box" type="text" placeholder="Digite seu e-mail" />
      <input className= "text-box" type="password" placeholder="Digite sua senha" />
      <button onClick={handleLogin}>Entrar</button>
      <p>Não possui uma conta? <a href="#">Cadastre-se</a></p>
      <p className='cad'>Ao Cadastrar-se, você concorda com nossos <a href="#">Termos</a>, <a href="#">Política de Privacidade</a> e <a href="#">Política de Cookies</a>.</p>
      </div>
    </div>
    <div className='footer'>-</div>
  </div>)
}
export default Login;