import React from 'react'
import './Header.css'
import logo from './Logodomoblanco.jpg'

// / creamos props con destructuring ({}) 
const Header = ({ title, subtitle }) => {
    return (
      <div className="Header">
        <h1>{(title = "Bienvenidos a Domo Blanco Helados")}</h1>
        <img className="App-logo" src={logo} alt="logo" />
        <h2>{(subtitle = "Aqui podras adquirir tus productor favoritos")}</h2>
      </div>
    );  
}


export default Header;


