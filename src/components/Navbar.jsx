import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Aurora Coffee</div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span><span></span><span></span>
      </div>
      <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
        <li><a href="#hero" onClick={() => setIsOpen(false)}>Inicio</a></li>
        <li><a href="#historia" onClick={() => setIsOpen(false)}>Historia</a></li>
        <li><a href="#productos" onClick={() => setIsOpen(false)}>Productos</a></li>
        <li><a href="#testimonios" onClick={() => setIsOpen(false)}>Testimonios</a></li>
        <li><a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a></li>
      </ul>
    </nav>
  );
}

