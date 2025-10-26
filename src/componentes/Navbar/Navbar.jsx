import React, { useState } from "react";
import Logo from "../../assets/logo_mutual_sin_fondo.png";
import "./Navbar.css";

const NavbarLinks = [
  {
    id: 1,
    name: "Inicio",
    link: "/",
  },
  {
    id: 2,
    name: "Nuestra Mutual",
    link: "#",
  },
  {
    id: 3,
    name: "Servicios",
    link: "3",
  },
  {
    id: 4,
    name: "Contacto",
    link: "#",
  },
];

const NavbarRedes = [
  {
    id: 1,
    link: "#",
    icon: "bi bi-whatsapp",
  },
  {
    id: 2,
    link: "#",
    icon: "bi bi-instagram",
  },
  {
    id: 3,
    link: "#",
    icon: "bi bi-facebook",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="navbar">
        <div>
          <img
            className="logo"
            src={Logo}
            alt="Logo de la mutual sueño amarillo"
          />
        </div>

        {/* Boton hamburguesa */}
        <div>
          <button onClick={toggleMenu} className="boton_hamburguesa">
            {isOpen ? (
              <i className="bi bi-x-lg"></i>
            ) : (
              <i className="bi bi-list"></i>
            )}
          </button>
        </div>
        <div className="links">
          <ul className="links__ul">
            {NavbarLinks.map((link) => (
              <li key={link.id}>
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="redes">
          <ul className="redes__ul">
            {NavbarRedes.map((link) => (
              <li key={link.id}>
                <a href={link.link}>
                  <i className={`${link.icon}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>

        
      </div>
      {/*Menu mobile  */}
        <div className={`${isOpen ? "menu_mobile" : "menu_mobile_escondido"} `}>
          <ul className="links_menu_mobile">
            {NavbarLinks.map((link) => (
              <li key={link.id}>
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>

          <ul className="redes_menu_mobile">
            {NavbarRedes.map((link) => (
              <li key={link.id}>
                <a href={link.link}>
                  <i className={`${link.icon}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
    </nav>
  );
};

export default Navbar;
