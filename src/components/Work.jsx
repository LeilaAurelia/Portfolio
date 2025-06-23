import React from "react";
import { ProjectCard } from "./ProjectCard";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const works = [

  {
    imgSrc: "/assets/projects/Biocell.png",
    tags: ["Biotecnologia"],
    projectLink:
      "https://www.instagram.com/p/CTM5sWKtjGf/?igsh=MWhmMnRhZnV6ZmVvNA%3D%3D",
  },

    {
    imgSrc: "/assets/projects/BTAtacado.png",
    tags: ["Varejo alimentar"],
    projectLink:
      "https://www.instagram.com/p/CkGQn35uu3d/?igsh=eDk3bHAxYXJybjJp",
  },

    {
    imgSrc: "/assets/projects/CVC Alagoas.jpg",
    tags: ["Turismo"],
    projectLink:
      "https://www.instagram.com/cvc.al.maceiocentro/",
  },

     {
    imgSrc: "/assets/projects/globalprotecaoveicular.jpg",
    tags: ["Automotivo"],
    projectLink:
      "https://www.instagram.com/p/CckgYukrx5x/",
  },

      {
    imgSrc: "/assets/projects/IntelBras.jpg",
    tags: ["Segurança"],
    projectLink:
      "https://www.instagram.com/p/Cg2e3zBJwUx/",
  },

       {
    imgSrc: "/assets/projects/joolt.jpg",
    tags: ["Fitness"],
    projectLink:
      "https://www.instagram.com/p/CsJGQfxsClR/",
  },

 

  

];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 ">Meu portfolio de trabalhos</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
        <Link
          to="/projetos"
          onClick={(e) => {
            e.preventDefault(); // previne o padrão para poder animar e navegar depois
            scroll.scrollToTop({
              duration: 800,
              smooth: "easeInOutQuart",
            });
            // Navegar para /projetos após a animação (800ms)
            setTimeout(() => {
              window.location.href = "/projetos";
            }, 800);
          }}
          className="text-lg font-semibold transition hover:underline w-full mt-10 flex justify-center"
          style={{
            background: "-webkit-linear-gradient(0deg, #09090b, #7e22ce)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Mostrar mais projetos →
        </Link>
      </div>
    </section>
  );
};

export default Work;
