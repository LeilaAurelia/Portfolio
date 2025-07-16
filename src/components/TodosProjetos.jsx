import React from "react";
import { Link } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";
import { useEffect } from "react";

const projetos = [

   {
    imgSrc: "/assets/projects/Biocell.png",
    tags: ["Biotecnologia"],
    projectLink:
      "https://www.instagram.com/p/CTM5sWKtjGf/?igsh=MWhmMnRhZnV6ZmVvNA%3D%3D",
  },
  {
    imgSrc: "/assets/projects/BTAtacado.png",
    tags: ["Varejo de Alimentação"],
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
    imgSrc: "/assets/projects/cvc ivete.jpg",
    tags: ["Turismo"],
    projectLink: "https://www.instagram.com/cvc.al.maceiocentro/",
  },
  {
    imgSrc: "/assets/projects/Dra.Elisangela.png",
    tags: ["Marketing Médico"],
    projectLink:
      "https://www.instagram.com/p/ClRhHSMr7bs/?igsh=MW40ZmVyYjk0M3JkaA%3D%3D",
  },
  {
    imgSrc: "/assets/projects/draelisangela.jpg",
    tags: ["Saúde Infantil"],
    projectLink: "https://www.instagram.com/p/C0JoFeIx0JL/",
  },
  {
    imgSrc: "/assets/projects/DanieleFerreiraa.jpg",
    tags: ["Campanha Política"],
    projectLink: "https://www.facebook.com/watch/?v=474477527924203",
  },
  {
    imgSrc: "/assets/projects/DanieleFerreira.jpg",
    tags: ["Campanha Política"],
    projectLink:
      "https://www.facebook.com/danieleferreira.pe/photos/marque-aqui-seus-amigos-para-votar-1040-e-fazer-pernambuco-mais-forte-para-os-pe/139606788802759/",
  },
  {
    imgSrc: "/assets/projects/devoltapracasa.jpg",
    tags: ["Reportagem"],
    projectLink:
      "https://circuladoralagoas.wordpress.com/2018/09/05/de-volta-pra-casa/",
  },
  {
    imgSrc: "/assets/projects/escolainternacionalfpolis.png",
    tags: ["Educação Bilíngue"],
    projectLink:
      "https://www.instagram.com/p/CaR18gNrErf/?igsh=MXV3OWoydHplcDFrdQ%3D%3D",
  },
  {
    imgSrc: "/assets/projects/Fpolis.jpg",
    tags: ["Educação Bilíngue"],
    projectLink:
      "https://www.instagram.com/p/Cb0UKWQAnwB/",
  },
  {
    imgSrc: "/assets/projects/globalprotecaoveicular.jpg",
    tags: ["Automotivo"],
    projectLink:
      "https://www.instagram.com/p/CckgYukrx5x/",
  },
  {
    imgSrc: "/assets/projects/inumeraveis.png",
    tags: ["Escrita Sensível"],
    projectLink:
      "https://inumeraveis.com.br/antonio-ferreira-de-amorim/",
  },
  {
    imgSrc: "/assets/projects/inumeraveis.png",
    tags: ["Escrita Sensível"],
    projectLink:
      "https://inumeraveis.com.br/maria-aparecida-de-oliveira-holanda/",
  },
  {
    imgSrc: "/assets/projects/LTMarketing.jpg",
    tags: ["Infoprodutos"],
    projectLink:
      "https://www.instagram.com/agencialt_mkt/",
  },
  {
    imgSrc: "/assets/projects/Miriangontijoadv.jpg",
    tags: ["Jurídico"],
    projectLink:
      "https://www.instagram.com/tv/Chk0NLIMzhp/?igsh=MW02cnAzbmdmM3ZkZg%3D%3D",
  },
  {
    imgSrc: "/assets/projects/mandafigurinha.jpg",
    tags: ["Reportagem"],
    projectLink: "https://mandafigurinha.wixsite.com/final",
  },
  {
    imgSrc: "/assets/projects/Neodent.png",
    tags: ["Odontológico"],
    projectLink:
      "https://www.instagram.com/p/CUfFFZftmXq/?igsh=MWZ4a3Vic2p5NWF6dw%3D%3D",
  },
  {
    imgSrc: "/assets/projects/neodent2.png",
    tags: ["Odontológico"],
    projectLink: "https://www.instagram.com/p/CNPfERTl2ne/?utm_source=ig_embed&utm_campaign=loading",
  },
  {
    imgSrc: "/assets/projects/Patense.jpg",
    tags: ["Agronegócio"],
    projectLink:
      "https://www.instagram.com/tv/Cis_h55rv78/",
  },
  {
    imgSrc: "/assets/projects/pajuçara.jpg",
    tags: ["Eventos"],
    projectLink:
      "https://management.pajucara.com/",
  },
  {
    imgSrc: "/assets/projects/PetsMeelon.jpg",
    tags: ["Pets"],
    projectLink:
      "https://www.instagram.com/p/CkOi_8zB0g8/?img_index=1",
  },
  {
    imgSrc: "/assets/projects/Petsmellon.png",
    tags: ["Pets"],
    projectLink:
      "https://www.instagram.com/reel/CztKue1NTk5/?igsh=NGgxMjFsOHV0emhs",
  },
  {
    imgSrc: "/assets/projects/Dindin.jpg",
    tags: ["Crédito"],
    projectLink:
      "https://www.instagram.com/reel/CfTv2MyjBMn/",
  },
  {
    imgSrc: "/assets/projects/TransTriangulo.jpg",
    tags: ["Agronegócio"],
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

        <p> <a className="Projetos text-lg font-semibold transition hover:underline w-full mt-10 flex justify-center my-2"
       style={{
            background: "-webkit-linear-gradient(0deg, #09090b, #7e22ce)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }} 
        href="https://drive.google.com/drive/folders/1tD89977YkysOwM2PvFH3ciTemxYjrp82">Mais projetos realizados</a></p>

        
        
          

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
