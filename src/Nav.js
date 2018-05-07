import React, { Component } from 'react';
import './Nav.css';
import logo from './logo.svg';


class Nav extends Component {
  render() {
    return (
    <nav>
<img src={logo}/> 
      <ul>
         <li>Contato</li>
         <li>Sobre nós</li>
         <li>Cadastro</li>

      </ul>
    </nav>
    );
  }
}

export default Nav;
