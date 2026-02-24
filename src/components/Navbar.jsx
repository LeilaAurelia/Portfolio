import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ navOpen, mobile = false, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: "Início", to: "/", hash: "home", key: "inicio" },
    { label: "Sobre mim", to: "/", hash: "about", key: "sobre" },
    { label: "Projetos", to: "/", hash: "work", key: "projetos" },
    { label: "Feedbacks", to: "/", hash: "reviews", key: "feedbacks" },
  ];

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleClick = (to, hash, event) => {
    event.preventDefault();
    if (onClose) onClose();

    if (location.pathname === to) {
      // Já na página certa — só rola
      scrollToId(hash);
    } else {
      // Navega para a rota e armazena o destino no sessionStorage
      // O componente de destino lê e rola após montar
      sessionStorage.setItem("scrollTo", hash);
      navigate(to);
    }
  };

  const linkClass = mobile
    ? "px-4 py-3 rounded-xl text-sm font-medium text-[hsl(var(--foreground))] hover:bg-[hsl(var(--accent-light))] hover:text-[hsl(var(--accent))] transition-all duration-200 block"
    : "nav-link";

  return (
    <nav className={mobile ? "flex flex-col gap-1" : "flex items-center gap-8"}>
      {navItems.map(({ label, to, hash, key }) => (
        <a
          key={key}
          href={`${to}#${hash}`}
          onClick={(e) => handleClick(to, hash, e)}
          className={linkClass}
        >
          {label}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
