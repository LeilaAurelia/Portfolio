import React from "react";
import { Link } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";

const influencerVideos = [
  {
    id: "DWWVyhjDTHm",
    imgSrc: "/assets/projects/SuperPlayer.jpg",
    title: "Conteúdo com influenciador 01",
    previewType: "video",
    projectLink: "https://www.instagram.com/reel/DWWVyhjDTHm/",
  },
  {
    id: "DVyRq0jjXGn",
    imgSrc: "/assets/projects/SuperPlayerGamer.jpg",
    title: "Conteúdo com influenciador 02",
    previewType: "video",
    projectLink: "https://www.instagram.com/reel/DVyRq0jjXGn/",
  },
  {
    id: "Dcb5odvvYLC",
    imgSrc: "/assets/projects/SuperPlayerProvedor.jpg",
    title: "Conteúdo com influenciador 03",
    previewType: "video",
    projectLink: "https://www.instagram.com/reel/Dcb5odvvYLC/",
  },
  {
    id: "DHRrRerpEHo",
    imgSrc: "/assets/projects/SuperPlayerProvedores2.jpg",
    title: "Conteúdo com influenciador 04",
    previewType: "video",
    projectLink: "https://www.instagram.com/reel/DHRrRerpEHo/",
  },
];

const portfolioItems = [
  {
    type: "blog", previewType: "web", imgSrc: "/assets/projects/paguefacil1.png",
    title: "Blog — Dívida com mais de 5 anos",
    description: "Artigo SEO para Pagou Fácil, com copy clara sobre cobrança de dívidas antigas e orientação ao leitor.",
    category: "Blog Post", tags: ["Copywriting", "SEO", "Blog"],
    projectLink: "https://www.pagoufacil.com.br/blog/a-divida-com-mais-de-5-anos-pode-ser-cobrada/",
  },
  {
    type: "blog", previewType: "web", imgSrc: "/assets/projects/pagoufacil2.png",
    title: "Blog — Dívidas de cartão de crédito",
    description: "Conteúdo educativo com tom acessível, explicando cenários de dívida e caminhos de regularização.",
    category: "Blog Post", tags: ["Copywriting", "SEO", "Blog"],
    projectLink: "https://www.pagoufacil.com.br/blog/dividas-de-cartao-de-credito/",
  },
  {
    type: "email", previewType: "web", imgSrc: "/assets/projects/preemail2.png",
    title: "Email Mundo Gamer",
    description: "Campanha de email para LT Marketing, com hierarquia de mensagem, persuasão e CTA direto.",
    category: "Email Marketing", tags: ["Email", "Copy", "RD Station"],
    projectLink: "https://app.rdstation.email/mail/5b830c27-7bcc-4599-9183-9255ffb36038",
  },
  {
    type: "email", previewType: "web", imgSrc: "/assets/projects/preemail.png",
    title: "Email Provedor de Internet",
    description: "Sequência de nutrição com copy objetiva, foco em conversão e consistência da marca.",
    category: "Email Marketing", tags: ["Email", "Copy", "RD Station"],
    projectLink: "https://app.rdstation.email/mail/4c8c58c9-0f31-4f9c-8fa0-a0b2722cb464",
  },
  {
    type: "instagram", previewType: "instagram", imgSrc: "/assets/projects/SuperPlayer.jpg",
    profileName: "SuperPlayer",
    title: "Saúde como benefício corporativo",
    description: "Copy para Instagram unindo benefício, autoridade e convite à ação em formato de carrossel.",
    category: "Instagram Copy", tags: ["Social Media", "Copy", "Instagram"],
    projectLink: "https://www.instagram.com/p/DIguYgPtgiA/?img_index=1",
  },
  {
    type: "instagram", previewType: "instagram", imgSrc: "/assets/projects/SuperPlayerGamer.jpg",
    profileName: "SuperPlayer",
    title: "Público gamer — B2B e B2C",
    description: "Peça de social media com linguagem gamer, posicionamento de marca e gancho de engajamento.",
    category: "Instagram Copy", tags: ["Social Media", "Copy", "Instagram"],
    projectLink: "https://www.instagram.com/p/DIjZ5rEJYO2/",
  },
  {
    type: "instagram", previewType: "instagram", imgSrc: "/assets/projects/SuperPlayerProvedor.jpg",
    profileName: "SuperPlayer",
    title: "Saúde e bem-estar",
    description: "Copy visual para feed, equilibrando informação, tom humano e identidade da marca.",
    category: "Instagram Copy", tags: ["Social Media", "Copy", "Instagram"],
    projectLink: "https://www.instagram.com/p/DIkBW23Jd5V/",
  },
  {
    type: "facebook", previewType: "facebook", imgSrc: "/assets/projects/DanieleFerreira.jpg",
    title: "Peça de campanha política",
    description: "Peça de comunicação para mobilização e divulgação de campanha.",
    category: "Campanha política", tags: ["Campanha", "Social Media"],
    projectLink: "https://www.facebook.com/danieleferreira.pe/photos/marque-aqui-seus-amigos-para-votar-1040-e-fazer-pernambuco-mais-forte-para-os-pe/139606788802759/",
  },
];

const VideoCard = ({ video }) => {
  const embedUrl = `${video.projectLink.replace(/\/?$/, "")}/embed/captioned/`;

  return (
    <article className="portfolio-card min-w-0 w-full overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="aspect-[9/15] overflow-hidden bg-black">
        <iframe
          src={embedUrl}
          title={video.title}
          className="h-full w-full border-0"
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          scrolling="no"
        />
      </div>
    </article>
  );
};

const Work = () => {
  return (
    <>
    <section id="work" className="pt-16 lg:pt-24 pb-16">
      <div className="px-4 md:px-8 lg:px-16 xl:px-24 max-w-screen-2xl mx-auto">
        <div className="reveal-up flex items-center gap-3 mb-12"><span className="w-8 h-px bg-[hsl(var(--accent))]"/><p className="section-label">Portfólio</p><span className="flex-1 h-px bg-[hsl(var(--border))]"/></div>
        <section aria-labelledby="influencer-work-title" className="mb-20">
          <div className="reveal-up mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-gray-500">Marketing de influência <span className="px-1.5"></span></p>
              
            </div>
            
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {influencerVideos.map((video, index) => (
              <div key={video.id} className={`reveal-up delay-${Math.min(index * 100, 400)}`}>
                <VideoCard video={video} />
              </div>
            ))}
          </div>
        </section>
        <section aria-labelledby="content-work-title">
          <div className="reveal-up mb-8 max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-gray-500">Copywriting <span className="px-1.5">/</span> conteúdo digital</p>
            
          </div>
          <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {portfolioItems.map((project, key) => <div key={project.projectLink} className={`reveal-up h-full delay-${Math.min(key * 100, 400)}`}>
              <ProjectCard
                imgSrc={project.imgSrc}
                title={project.title}
                description={project.description}
                category={project.category}
                tags={project.tags}
                projectLink={project.projectLink}
                profileName={project.profileName}
                openLink
                showActions={false}
              />
            </div>)}
          </div>
        </section>
        <div className="flex justify-center pt-12"><Link to="/projetos" className="w-max inline-flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 hover:bg-gray-100 transition-colors duration-500">Ver todos os projetos<span className="material-symbols-rounded text-[16px]">arrow_forward</span></Link></div>
      </div>
    </section>
    </>
  );
};

export default Work;
