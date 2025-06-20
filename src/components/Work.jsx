import React from "react";
import { ProjectCard } from "./ProjectCard";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const works = [
  {
    imgSrc: "/src/assets/projects/inumeraveis.png",
    title: "Inumeraveis Alagoas",
    tags: ["Escrita pesada", "Memorias"],
    projectLink:
      "https://inumeraveis.com.br/antonio-ferreira-de-amorim/",
  },
  {
    imgSrc: "/src/assets/projects/mandafigurinha.jpg",
    title: "Manda figurinha",
    tags: ["Instagram", "Copywriting"],
    projectLink: "https://mandafigurinha.wixsite.com/final",
  },
  {
    imgSrc: "/src/assets/projects/neodent2.png",
    title: "Neodent global",
    tags: ["Instagram", "Copywriting"],
    projectLink: "https://www.instagram.com/p/CNPfERTl2ne/?utm_source=ig_embed&utm_campaign=loading",
  },
  {
    imgSrc: "/src/assets/projects/devoltapracasa.jpg",
    title: "De volta pra casa",
    tags: ["Comercial", "Copywriting"],
    projectLink:
      "https://circuladoralagoas.wordpress.com/2018/09/05/de-volta-pra-casa/",
  },
  {
    imgSrc: "/src/assets/projects/inumeraveis.png",
    title: "Inumeraveis Alagoas",
    tags: ["Escrita pesada", "Memorias"],
    projectLink:
      "https://inumeraveis.com.br/maria-aparecida-de-oliveira-holanda/",
  },
  {
    imgSrc: "/src/assets/projects/DanieleFerreira.jpg",
    title: "Daniele Ferreira",
    tags: ["Político", "Copywriting"],
    projectLink:
      "https://www.facebook.com/danieleferreira.pe/photos/marque-aqui-seus-amigos-para-votar-1040-e-fazer-pernambuco-mais-forte-para-os-pe/139606788802759/",
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
