import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="Navbar">
        {/* <img className="Navbar-logo" alt="logo">
          {}
        </img> */}
        <ul className=" NavbarItems">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/nosotros">
            <li>Nosotros</li>
          </Link>
          <Link to="/tienda">
            <li>Tienda</li>
          </Link>
          <Link to="/contacto">
            <li>Contacto</li>
          </Link>
        </ul>
      </nav>
    );
 }

export default Navbar;


