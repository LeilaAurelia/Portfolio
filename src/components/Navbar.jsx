// import React, { useRef, useEffect } from "react";
// import PropTypes from "prop-types";

// const Navbar = ({ navOpen }) => {
//   const lastActiveLink = useRef();
//   const activeBox = useRef();

//   const initActiveBox = () => {
//     activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";

//     activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";

//     activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";

//     activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
//   };

//   useEffect(initActiveBox, []);
// window.addEventListener("resize", initActiveBox);
//   const activeCurrentLink = (event) => {
//     lastActiveLink.current?.classList.remove("active");
//     event.target.classList.add("active");
//     lastActiveLink.current = event.target;

//     activeBox.current.style.top = event.target.offsetTop + "px";

//     activeBox.current.style.left = event.target.offsetLeft + "px";

//     activeBox.current.style.width = event.target.offsetWidth + "px";

//     activeBox.current.style.height = event.target.offsetHeight + "px";
//   };

//   const navItems = [
//     {
//       label: "Inicio",
//       link: "#home",
//       className: "nav-link active",
//       ref: lastActiveLink,
//     },
//     { label: "Sobre mim", link: "#about", className: "nav-link" },
//     { label: "Projetos", link: "#work", className: "nav-link" },
//     { label: "Feedbacks", link: "#reviews", className: "nav-link" },
//   ];

//   return (
//     <nav className={`navbar ${navOpen ? "active" : ""}`}>
//       {navItems.map(({ label, link, className, ref }, key) => (
//         <a
//           href={link}
//           key={key}
//           ref={ref}
//           className={className}
//           onClick={activeCurrentLink}
//         >
//           {label}
//         </a>
//       ))}
//       <div className="active-box" ref={activeBox}></div>
//     </nav>
//   );
// };

// Navbar.propTypes = {
//   navOpen: PropTypes.bool.isRequired,
// };

// export default Navbar;



// 

import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ navOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const activeBox = useRef();
  const lastActiveLink = useRef();

  const navItems = [
    { label: "Inicio", to: "/", hash: "#home", key: "inicio" },
    { label: "Sobre mim", to: "/", hash: "#about", key: "sobre" },
    { label: "Projetos", to: "/", hash: "#work", key: "projetos" },
    { label: "Feedbacks", to: "/", hash: "#reviews", key: "feedbacks" },
  ];

  const [activeKey, setActiveKey] = useState("inicio");

  // Função para scroll suave quando estiver na página /
  const scrollToHash = (hash) => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Atualiza o activeKey com base no hash ou pathname
    if (location.pathname === "/") {
      if (location.hash === "#about") setActiveKey("sobre");
      else if (location.hash === "#work") setActiveKey("projetos");
      else if (location.hash === "#reviews") setActiveKey("feedbacks");
      else setActiveKey("inicio");

      // Faz scroll suave na página principal
      scrollToHash(location.hash || "#home");
    } else {
      // Em outras rotas, ativa "projetos" (se estiver em /projetos)
      if (location.pathname === "/projetos") setActiveKey("projetos");
      else setActiveKey(null);
    }
  }, [location]);

  useEffect(() => {
    const activeLinkElement = document.querySelector(
      `.nav-link[data-key="${activeKey}"]`
    );
    if (activeLinkElement && activeBox.current) {
      activeBox.current.style.top = activeLinkElement.offsetTop + "px";
      activeBox.current.style.left = activeLinkElement.offsetLeft + "px";
      activeBox.current.style.width = activeLinkElement.offsetWidth + "px";
      activeBox.current.style.height = activeLinkElement.offsetHeight + "px";
      lastActiveLink.current = activeLinkElement;
    }
  }, [activeKey]);

  // Função para lidar com clique nos links
  const handleClick = (key, to, hash, event) => {
    event.preventDefault();

    if (location.pathname === "/" && to === "/") {
      // Se já estiver na página principal, só faz scroll suave
      setActiveKey(key);
      scrollToHash(hash);
      // Atualiza URL com hash sem recarregar (opcional)
      window.history.replaceState(null, "", to + hash);
    } else {
      // Se estiver em outra rota, navega para rota + hash
      setActiveKey(key);
      navigate(to + hash);
    }
  };

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, to, hash, key }) => (
        <a
          href={to + hash}
          key={key}
          data-key={key}
          className={`nav-link ${activeKey === key ? "active" : ""}`}
          onClick={(e) => handleClick(key, to, hash, e)}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

export default Navbar;
