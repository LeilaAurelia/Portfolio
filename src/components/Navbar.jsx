import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ navOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: "Início", to: "/", hash: "#home", key: "inicio" },
    { label: "Sobre mim", to: "/", hash: "#about", key: "sobre" },
    { label: "Projetos", to: "/", hash: "#work", key: "projetos" },
    { label: "Feedbacks", to: "/", hash: "#reviews", key: "feedbacks" },
  ];

  const handleClick = (to, hash, event) => {
    event.preventDefault();

    if (location.pathname === "/" && to === "/") {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      window.history.replaceState(null, "", to + hash);
    } else {
      navigate(to + hash);
    }
  };

  return (
    <nav className={`flex gap-10 ${navOpen ? "block" : ""}`}>
      {navItems.map(({ label, to, hash, key }) => (
        <a
          key={key}
          href={to + hash}
          onClick={(e) => handleClick(to, hash, e)}
          className="text-sm font-medium text-foreground/70 hover:text-primary hover:scale-110 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
        >
          {label}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
