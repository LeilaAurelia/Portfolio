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

    <section id="work" className="pt-16 lg:pt-24 pb-16">

      <div className="px-4 md:px-8 lg:px-16 xl:px-24 max-w-screen-2xl mx-auto">

        <div className="max-w-3xl mb-12">

          <p className="text-xs uppercase tracking-widest text-primary mb-4">

            Portfólio

          </p>

          <h2 className="text-2xl lg:text-3xl font-serif text-primary mb-4">

            Minhas Copys

          </h2>

          <p className="text-muted-foreground leading-relaxed">

            Projetos que transformaram ideias em resultados concretos, conectando marcas e audiências.

          </p>

        </div>



        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

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

        

        <div className="flex justify-center mt-12">

          <Link

            to="/projetos"

            onClick={(e) => {

              e.preventDefault();

              scroll.scrollToTop({

                duration: 800,

                smooth: "easeInOutQuart",

              });

              setTimeout(() => {

                window.location.href = "/projetos";

              }, 800);

            }}

            className="h-11 px-8 rounded-md inline-flex items-center justify-center border border-primary/30 text-primary hover:bg-primary/5 transition font-medium"

          >

            Ver todos os projetos

            <span className="material-symbols-rounded ml-2 text-[18px]">

              arrow_forward

            </span>

          </Link>

        </div>

      </div>

    </section>

  );

};



export default Work;

