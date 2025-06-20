import React from "react";
import { Link } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";
import { useEffect } from "react";

const projetos = [
  {
    imgSrc: "/assets/projects/Biocell.png",
    title: "Biocell",
    tags: ["Instagram", "Copywriting"],
    projectLink:
      "https://www.instagram.com/p/CTM5sWKtjGf/?igsh=MWhmMnRhZnV6ZmVvNA%3D%3D",
  },
  {
    imgSrc: "/assets/projects/BTAtacado.png",
    title: "BT Atacado",
    tags: ["Instagram", "Copywriting"],
    projectLink:
      "https://www.instagram.com/p/CkGQn35uu3d/?igsh=eDk3bHAxYXJybjJp",
  },
  {
    imgSrc: "/assets/projects/CVC Alagoas.jpg",
    title: "CVC Alagoas",
    tags: ["Comercial", "Copywriting"],
    projectLink:
      "https://www.instagram.com/cvc.al.maceiocentro/",
  },
  {
    imgSrc: "/assets/projects/cvc ivete.jpg",
    title: "CVC Alagoas",
    tags: ["Comercial", "Copywriting"],
    projectLink: "https://www.instagram.com/cvc.al.maceiocentro/",
  },
  {
    imgSrc: "/assets/projects/Dra.Elisangela.png",
    title: "Dra. Elisangela Menezes",
    tags: ["Comercial", "Copywriting"],
    projectLink:
      "https://www.instagram.com/p/ClRhHSMr7bs/?igsh=MW40ZmVyYjk0M3JkaA%3D%3D",
  },

  {
    imgSrc: "/assets/projects/draelisangela.jpg",
    title: "Dra. Elisangela Menezes",
    tags: ["Comercial", "Copywriting"],
    projectLink: "https://www.instagram.com/p/C0JoFeIx0JL/",
  },

   {
    imgSrc: "/assets/projects/DanieleFerreiraa.jpg",
    title: "Dra. Elisangela Menezes",
    tags: ["Comercial", "Copywriting"],
    projectLink: "https://www.facebook.com/watch/?v=474477527924203",
  },

  {
    imgSrc: "/assets/projects/escolainternacionalfpolis.png",
    title: "Escola Internacional Florianópolis ",
    tags: ["Escolar", "Copywriting"],
    projectLink:
      "https://www.instagram.com/p/CaR18gNrErf/?igsh=MXV3OWoydHplcDFrdQ%3D%3D",
  },

   {
    imgSrc: "/assets/projects/Fpolis.jpg",
    title: "Escola Internacional Florianópolis ",
    tags: ["Escolar", "Copywriting"],
    projectLink:
      "https://www.instagram.com/p/Cb0UKWQAnwB/",
  },

    {
    imgSrc: "/assets/projects/globalprotecaoveicular.jpg",
    title: "Global Proteção Veícular ",
    tags: ["Comercial", "Copywriting"],
    projectLink:
      "https://www.instagram.com/p/CckgYukrx5x/",
  },

    {
    imgSrc: "/assets/projects/IntelBras.jpg",
    title: "IntelBras ",
    tags: ["Comercial", "Copywriting"],
    projectLink:
      "https://www.instagram.com/p/Cg2e3zBJwUx/",
  },

      {
    imgSrc: "/assets/projects/joolt.jpg",
    title: "Joolt Indaiatuba ",
    tags: ["Comercial", "Copywriting"],
    projectLink:
      "https://www.instagram.com/p/CsJGQfxsClR/",
  },

     {
    imgSrc: "/assets/projects/LTMarketing.jpg",
    title: "LT Marketing",
    tags: ["Comercial", "Copywriting"],
    projectLink:
      "https://www.instagram.com/agencialt_mkt/",
  },

   {
    imgSrc: "/assets/projects/Miriangontijoadv.jpg",
    title: "Mírian Gontijo Advogados",
    tags: ["Comercial", "Copywriting"],
    projectLink:
      "https://www.instagram.com/tv/Chk0NLIMzhp/?igsh=MW02cnAzbmdmM3ZkZg%3D%3D",
  },

   {
    imgSrc: "/assets/projects/Neodent.png",
    title: "Neodent",
    tags: ["Comercial", "Copywriting"],
    projectLink:
      "https://www.instagram.com/p/CUfFFZftmXq/?igsh=MWZ4a3Vic2p5NWF6dw%3D%3D",
  },

  {
    imgSrc: "/assets/projects/Patense.jpg",
    title: "Patense",
    tags: ["Comercial", "Copywriting"],
    projectLink:
      "https://www.instagram.com/tv/Cis_h55rv78/",
  },

  {
    imgSrc: "/assets/projects/pajuçara.jpg",
    title: "Pajuçara Management",
    tags: ["Instagram", "Copywriting"],
    projectLink:
      "https://management.pajucara.com/",
  },

  {
    imgSrc: "/assets/projects/PetsMeelon.jpg",
    title: "Pets Mellon",
    tags: ["Instagram", "Copywriting"],
    projectLink:
      "https://www.instagram.com/p/CkOi_8zB0g8/?img_index=1",
  },

  {
    imgSrc: "/assets/projects/Petsmellon.png",
    title: "Pets Mellon",
    tags: ["Instagram", "Copywriting"],
    projectLink:
      "https://www.instagram.com/reel/CztKue1NTk5/?igsh=NGgxMjFsOHV0emhs",
  },

   {
    imgSrc: "/assets/projects/Dindin.jpg",
    title: "Quero dindin",
    tags: ["Instagram", "Copywriting"],
    projectLink:
      "https://www.instagram.com/reel/CfTv2MyjBMn/",
  },

   {
    imgSrc: "/assets/projects/TransTriangulo.jpg",
    title: "TransTriangulo",
    tags: ["Instagram", "Copywriting"],
    projectLink:
      "https://www.instagram.com/p/Cwxac5cMvCj/",
  },
  // Adicione mais aqui...
];

const TodosProjetos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="section min-h-screen pt-20 lg:pt-32">
      <div className="container">
        {/* Título com botão voltar */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="headline-2">Todos os Projetos</h2>
        </div>

        <p className="mb-10 text-base text-stone-700">
          Projetos que atuei como social media, copywritter, analista de
          marketing, inbound e endomarketing, gestão de contas, SEO content e
          outros.
        </p>

        {/* Grid igual Work */}
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {projetos.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TodosProjetos;
