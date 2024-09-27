import React, { useState } from 'react';

function Home() {
    const [active, setActive] = useState(false);

    const toggleMode = () => {
      setActive(!active);
    };
  
    return (
      <div className="hamburguerAll">
        <div className=''>fef4efg
        <div className={active ? "icon iconActive" : "icon"} onClick={toggleMode}>
        <div className="hamburger hamburgerIcon"></div>
        </div>
        <div className={active ? "menu menuOpen" : "menu menuClose"}>
            <div className='list'>
             <ul className="listItems">
                <li>Home</li>
                <li>Configurações</li>
                <li>Perfil</li>
                <li>Sair</li>
            </ul>
          </div>
        </div>
        </div> 
      </div>
      
    );
  }
  
export default Home;
