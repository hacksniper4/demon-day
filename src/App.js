import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cabecalho from './Cabecalho';
import Sessao from './Sessao';
import Nav from './Nav'; 
import Carrossel from './Carrossel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Cabecalho/>
        <Carrossel/>
        <Sessao/>
        <Sessao/>
        <Sessao/>

        </div>
    );
  }
}

export default App;
