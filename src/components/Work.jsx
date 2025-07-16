import React from "react";
import { ProjectCard } from "./ProjectCard";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const works = [
{
    imgSrc: "/assets/projects/SuperPlayer.jpg",
    tags: ["Saúde como Benefício Corporativo"],
    projectLink:
      "https://www.instagram.com/p/DIguYgPtgiA/?img_index=1",
  },
  {
    imgSrc: "/assets/projects/SuperPlayerGamer.jpg",
    tags: ["Público Gamer - B2B e B2C"],
    projectLink:
      "https://www.instagram.com/p/DIjZ5rEJYO2/",
  },
   {
    imgSrc: "/assets/projects/SuperPlayerProvedor.jpg",
    tags: ["Saúde e Bem Estar"],
    projectLink:
      "https://www.instagram.com/p/DIkBW23Jd5V/",
  },
  {
    imgSrc: "/assets/projects/SuperPlayerProvedores2.jpg",
    tags: ["Seguro para Provedores"],
    projectLink:
      "https://www.instagram.com/p/DIzYaA-pSIv/?img_index=1",
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
