import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cabecalho from './Cabecalho';
import Sobre from './Sobre';
import Nav from './Nav'; 
import Carrossel from './Carrossel';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Cabecalho/>
        <Carrossel/>
        <Sobre/>
        <Login/>
      
        </div>
    );
  }
}

export default App;
