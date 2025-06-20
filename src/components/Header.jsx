import React, { useState } from "react";
import Navbar from "./Navbar";


const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-violet-300 to-white">
      <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-6 flex justify-between items-center md:grid md:grid-cols-3">
        
        {/* Logo no canto esquerdo */}
        <h2 className="title-1 logo text-lg font-semibold md:justify-self-start md:self-center">Leila Falcão</h2>

        {/* Menu centralizado (somente em telas grandes) */}
        <div className="hidden md:flex md:justify-center">
          <Navbar navOpen={true} />
        </div>

        {/* Botão sanduíche e menu flutuante (mobile apenas) */}
        <div className="relative md:hidden">
          <button className="menu-btn" onClick={() => setNavOpen(!navOpen)}>
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        {/* Botão Contato - visível apenas em desktop */}
        <div className="hidden md:flex md:justify-end">
          <a href="https://www.linkedin.com/in/leila-f-270a4813a/" target="_blank" className="btn btn-secondary">
            Contato
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
