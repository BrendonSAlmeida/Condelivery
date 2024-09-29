import React, { useState } from 'react';
import imagemifood from '../resources/ifood.png';
import imagemiRappi from '../resources/Rappi.png';
import imagemiUberEats from '../resources/uber eats.png';
import Uber from '../resources/uber.png';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const handleInicio =()=>{
    navigate('/')};

    // menu hamburguer e header
    const [active, setActive] = useState(false);

    const toggleMode = () => {
      setActive(!active);
    };
    return (
      <div>
        <div className='title'><h1 >Condelivery</h1></div>
         <div className="hamburguerAll"> {/*menu hamburguer */}
            <div className={active ? "icon iconActive" : "icon"} onClick={toggleMode}>
                <div className="hamburger hamburgerIcon"></div>
          </div>
          <div className={active ? "menu menuOpen" : "menu menuClose"}>
              <div className='list'>
                <ul className="listItems">
                  <li className='menuItens'>Home</li>
                  <li className='menuItens'>Configurações</li>
                  <li className='menuItens' >Perfil</li>
                  <li  className='menuItens'onClick={handleInicio} >Sair</li>
                </ul>
              </div>
            </div>
            {/* fim menu hamburger e header*/}

            <div className='homeCompleta'>
              <div className='endereço'><p>Alameda Mamoré , nº 809 - Apto 513 - 6º andar</p></div>
                <div className='inicio'><h1>Bem vindo(a) de volta!</h1></div>

                <div className='inicio1'><h2>como funciona?</h2></div>

                <div className='inicio1'><p>o colaborador do app parceiro deixará seu pedido ou encomenda na entrada ou portaria do condomínio para que o parceiro <br></br> da nossa plataforma que trabalha para o condominio através do Condelivery possa realizar sua entrega.</p></div>
                
                  <div className='inicio1'><h2>Fez o pedido no app parceiro?</h2></div>

                  <div className='inicio1'><p>Que maravilha!! nos informe qual o app parceiro, o código, se necessário pode inserir informações adicionais para o entregador e deixa que cuidamos do resto.</p></div>

                    <div className='appParceiro'>
                      <img src={Uber} alt='logo Uber'/>
                      <img className='imagemUberEats' src={imagemiUberEats} alt='logo Uber eats'/>
                      <img src={imagemifood} alt='logo Ifood'/>
                      <img src={imagemiRappi} alt='logo Rappi'/>
                    </div>

                  <div className='caixas-de-texto'>
                    <div className='instruções'>
                      <p >Se necessário, você pode inserir instruções de <br>
                      </br>entrega para nosso entregador no campo abaixo:</p>
                    <input className='instruções1'
                      type='text'
                      placeholder='Ex: não estou em casa, pode deixar na porta.'></input>
                    </div>

                    <div className='código'>
                      <p>Digite o código fornecido pelo app parceiro, <br>
                        </br>este código serve para rastreio do item</p>
                      <input className='código1'
                      type='text'
                      placeholder='Digite aqui seu código'></input>  
                    </div>

                    <button className='enviar-informações'>Enviar</button>
                    </div>
                  <div>
                  
                  </div>
                  </div>
                <footer className='footerHome'>
                ®Condelivery – Todos os direitos reservados
                </footer>
          </div>
      </div>
      
    );
  }
  
export default Home;
