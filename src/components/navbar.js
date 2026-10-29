import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="header">
      <h1>Mi Portfolio Personal</h1>
      <nav className="nav">
        <Link to="/">Inicio</Link>
        <Link to="/proyectos">Proyectos</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  );
}

export default Navbar;