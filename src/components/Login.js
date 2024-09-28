import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";



function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');   
  const [errorMessage,] = useState('');

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Senha:", password);
   
    if (email === 'teste@outlook.com' && password === '123fiap') {
      navigate('/Home');} 
    else {
      alert('Email ou senha inválidos.');
    }
  };
  return( 
  <div className='all'>
  <div className="container">
    <div className="header">
      <h1>Condelivery</h1>
      </div>
    <div className="login-form">
      <h2 className="login">Login</h2>
      <input
        className="text-box"
        type="text"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="text-box"
        type="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
    <p>Não possui uma conta? <a href="/cadastro">Cadastre-se</a></p>
    <p className='cad'>Ao Cadastrar-se, você concorda com nossos <a href="/termos">Termos</a>, <a href="/privacidade">Política de Privacidade</a> e <a href="/cookies">Política de Cookies</a>.</p>
</div>
    </div>
    {errorMessage && <p>{errorMessage}</p>}
    <div className='footer'></div>
  </div>)
}
export default Login;