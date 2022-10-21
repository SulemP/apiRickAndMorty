import { Header } from './Header/Header'
import { Cards } from './Cards/Cards'
//import { Personaje } from './Personaje/Personaje'
import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>

      <Header />

      <Cards />
    
    </React.Fragment>

    //<Route path="/home/:id" component={<DetallePersonaje />}>
   
  );
}

export default App;
