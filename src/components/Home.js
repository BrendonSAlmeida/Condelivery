import React, { useState } from 'react';


function Home() {
    return (
        <div className="App">
          <div>
            <div className="hamburger hamburgerIcon"></div>
          </div>
          <div className="list">
            <ul className="listItems">
              <li>HOME</li>
              <li>PRODUCTS</li>
              <li>CONTACT</li>
              <li>ABOUT US</li>
            </ul>
          </div>
        </div>
      );

}
export default Home;
