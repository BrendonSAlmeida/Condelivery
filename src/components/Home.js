import React, { useState } from 'react';

function Home() {
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
                  <li className='menuItens' >Sair</li>
                </ul>
              </div>
            </div>
              <div className='endereço'><p>Alameda Mamoré , nº 809 - Apto 513 - 6º andar</p></div>
                <div className='inicio'><h1>Bem vindo(a) de volta</h1></div>
                  <div ><p>Alameda Mamoré , nº 809 - Apto 513 - 6º andar</p></div>
          </div>
      </div>
      
    );
  }
  
export default Home;
