import React, { Component } from 'react';
import './Nav.css';
import logo from './logo.svg';


class Nav extends Component {
  render() {
    return (
    <nav>
<img src={logo}/> 
      <ul>
         <li><a href="#">Sobre Nós</a></li>
         <li><a href="#">Como Funciona</a></li>
         <li><a href="#">Cadastre-se</a></li>
         <li><a href="#">Contato</a></li>
         
         

      </ul>
    </nav>
    );
  }
}

export default Nav;
