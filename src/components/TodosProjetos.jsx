import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";
import CopyModal from "./CopyModal";
import { copysData } from "../data/copysData";
import Footer from "./Footer";

const projects = [
  {
    imgSrc: "/assets/projects/Biocell.png",
    profileName: "Biocell",
    title: "Conteúdo para Biocell",
    description: "Comunicação de marca para o segmento de biotecnologia.",
    category: "Biotecnologia",
    group: "social",
    tags: ["Social Media", "Conteúdo"],
    projectLink: "https://www.instagram.com/p/CTM5sWKtjGf/?igsh=MWhmMnRhZnV6ZmVvNA%3D%3D",
  },
  {
    imgSrc: "/assets/projects/BTAtacado.png",
    profileName: "BT Atacado",
    title: "Conteúdo para BT Atacado",
    description: "Peça de comunicação para o varejo de alimentação.",
    category: "Varejo de alimentação",
    group: "social",
    tags: ["Social Media", "Varejo"],
    projectLink: "https://www.instagram.com/p/CkGQn35uu3d/?igsh=eDk3bHAxYXJybjJp",
  },
  {
    imgSrc: "/assets/projects/CVC Alagoas.jpg",
    profileName: "CVC Alagoas",
    title: "Comunicação CVC Alagoas",
    description: "Conteúdo e comunicação para uma marca de turismo.",
    category: "Turismo",
    group: "social",
    tags: ["Social Media", "Turismo"],
    projectLink: "https://www.instagram.com/cvc.al.maceiocentro/",
  },
  {
    imgSrc: "/assets/projects/cvc ivete.jpg",
    profileName: "CVC Alagoas",
    title: "Conteúdo de turismo",
    description: "Peça de comunicação para divulgação de experiências de viagem.",
    category: "Turismo",
    group: "social",
    tags: ["Social Media", "Turismo"],
    projectLink: "https://www.instagram.com/cvc.al.maceiocentro/",
  },
  {
    imgSrc: "/assets/projects/Dra.Elisangela.png",
    profileName: "Dra. Elisangela",
    title: "Conteúdo para Dra. Elisangela",
    description: "Comunicação digital para o segmento de marketing médico.",
    category: "Marketing médico",
    group: "social",
    tags: ["Social Media", "Saúde"],
    projectLink: "https://www.instagram.com/p/ClRhHSMr7bs/?igsh=MW40ZmVyYjk0M3JkaA%3D%3D",
  },
  {
    imgSrc: "/assets/projects/draelisangela.jpg",
    profileName: "Dra. Elisangela",
    title: "Conteúdo de saúde infantil",
    description: "Conteúdo informativo desenvolvido para comunicar temas de saúde infantil.",
    category: "Saúde infantil",
    group: "social",
    tags: ["Social Media", "Saúde"],
    projectLink: "https://www.instagram.com/p/C0JoFeIx0JL/",
  },
  {
    imgSrc: "/assets/projects/DanieleFerreiraa.jpg",
    title: "Vídeo de campanha política",
    description: "Conteúdo em vídeo produzido para uma campanha política.",
    category: "Campanha política",
    group: "campaigns",
    tags: ["Campanha", "Vídeo"],
    projectLink: "https://www.facebook.com/watch/?v=474477527924203",
  },
  {
    imgSrc: "/assets/projects/devoltapracasa.jpg",
    cardType: "report",
    profileName: "Circuladora Alagoas",
    title: "De volta pra casa",
    description: "Reportagem publicada no Circuladora Alagoas.",
    category: "Reportagem",
    group: "editorial",
    tags: ["Jornalismo", "Conteúdo editorial"],
    projectLink: "https://circuladoralagoas.wordpress.com/2018/09/05/de-volta-pra-casa/",
  },
  {
    imgSrc: "/assets/projects/escolainternacionalfpolis.png",
    profileName: "Escola Internacional de Florianópolis",
    title: "Conteúdo para escola internacional",
    description: "Comunicação para uma instituição de ensino bilíngue.",
    category: "Educação bilíngue",
    group: "social",
    tags: ["Social Media", "Educação"],
    projectLink: "https://www.instagram.com/p/CaR18gNrErf/?igsh=MXV3OWoydHplcDFrdQ%3D%3D",
  },
  {
    imgSrc: "/assets/projects/Fpolis.jpg",
    profileName: "Escola Internacional de Florianópolis",
    title: "Comunicação para educação",
    description: "Conteúdo digital para o segmento de educação bilíngue.",
    category: "Educação bilíngue",
    group: "social",
    tags: ["Social Media", "Educação"],
    projectLink: "https://www.instagram.com/p/Cb0UKWQAnwB/",
  },
  {
    imgSrc: "/assets/projects/globalprotecaoveicular.jpg",
    profileName: "Global Proteção Veicular",
    title: "Conteúdo de proteção veicular",
    description: "Peça de comunicação para o segmento automotivo.",
    category: "Automotivo",
    group: "social",
    tags: ["Social Media", "Automotivo"],
    projectLink: "https://www.instagram.com/p/CckgYukrx5x/",
  },
  {
    imgSrc: "/assets/projects/inumeraveis.png",
    cardType: "sensitive",
    profileName: "Inumeráveis",
    title: "História de Antonio Ferreira de Amorim",
    description: "Perfil biográfico publicado no projeto Inumeráveis.",
    category: "Escrita sensível",
    group: "editorial",
    tags: ["Redação", "Storytelling"],
    projectLink: "https://inumeraveis.com.br/antonio-ferreira-de-amorim/",
  },
  {
    imgSrc: "/assets/projects/inumeraveis.png",
    cardType: "sensitive",
    profileName: "Inumeráveis",
    title: "História de Maria Aparecida de Oliveira Holanda",
    description: "Perfil biográfico publicado no projeto Inumeráveis.",
    category: "Escrita sensível",
    group: "editorial",
    tags: ["Redação", "Storytelling"],
    projectLink: "https://inumeraveis.com.br/maria-aparecida-de-oliveira-holanda/",
  },
  {
    imgSrc: "/assets/projects/LTMarketing.jpg",
    profileName: "LT Marketing",
    title: "Conteúdo para LT Marketing",
    description: "Conteúdo digital desenvolvido para uma agência de marketing.",
    category: "Infoprodutos",
    group: "campaigns",
    tags: ["Conteúdo", "Marketing digital"],
    projectLink: "https://www.instagram.com/agencialt_mkt/",
  },
  {
    imgSrc: "/assets/projects/Miriangontijoadv.jpg",
    profileName: "Miriam Gontijo Advocacia",
    title: "Conteúdo jurídico",
    description: "Conteúdo em vídeo para comunicação no segmento jurídico.",
    category: "Jurídico",
    group: "social",
    tags: ["Social Media", "Vídeo"],
    projectLink: "https://www.instagram.com/tv/Chk0NLIMzhp/?igsh=MW02cnAzbmdmM3ZkZg%3D%3D",
  },
  {
    imgSrc: "/assets/projects/mandafigurinha.jpg",
    cardType: "report",
    profileName: "Manda Figurinha",
    title: "Manda Figurinha",
    description: "Projeto editorial e reportagem digital.",
    category: "Reportagem",
    group: "editorial",
    tags: ["Jornalismo", "Conteúdo editorial"],
    projectLink: "https://mandafigurinha.wixsite.com/final",
  },
  {
    imgSrc: "/assets/projects/Neodent.png",
    profileName: "Neodent",
    title: "Conteúdo para Neodent",
    description: "Peça de comunicação para o segmento odontológico.",
    category: "Odontologia",
    group: "social",
    tags: ["Social Media", "Saúde"],
    projectLink: "https://www.instagram.com/p/CUfFFZftmXq/?igsh=MWZ4a3Vic2p5NWF6dw%3D%3D",
  },
  {
    imgSrc: "/assets/projects/neodent2.png",
    profileName: "Neodent",
    title: "Conteúdo odontológico",
    description: "Conteúdo digital para comunicação de marca em odontologia.",
    category: "Odontologia",
    group: "social",
    tags: ["Social Media", "Saúde"],
    projectLink: "https://www.instagram.com/p/CNPfERTl2ne/?utm_source=ig_embed&utm_campaign=loading",
  },
  {
    imgSrc: "/assets/projects/Patense.jpg",
    profileName: "Patense",
    title: "Conteúdo para Patense",
    description: "Conteúdo de marca desenvolvido para o agronegócio.",
    category: "Agronegócio",
    group: "social",
    tags: ["Social Media", "B2B"],
    projectLink: "https://www.instagram.com/tv/Cis_h55rv78/",
  },
  {
    imgSrc: "/assets/projects/pajuçara.jpg",
    cardType: "event",
    profileName: "Pajuçara",
    title: "Comunicação de eventos",
    description: "Conteúdo e comunicação para eventos.",
    category: "Eventos",
    group: "campaigns",
    tags: ["Campanha", "Eventos"],
    projectLink: "https://management.pajucara.com/",
  },
  {
    imgSrc: "/assets/projects/PetsMeelon.jpg",
    profileName: "Pets Meelon",
    title: "Conteúdo para Pets Meelon",
    description: "Peça de comunicação para o segmento pet.",
    category: "Pets",
    group: "social",
    tags: ["Social Media", "Conteúdo"],
    projectLink: "https://www.instagram.com/p/CkOi_8zB0g8/?img_index=1",
  },
  {
    imgSrc: "/assets/projects/Petsmellon.png",
    profileName: "Pets Meelon",
    title: "Reel para marca pet",
    description: "Conteúdo em vídeo para comunicação de uma marca do segmento pet.",
    category: "Pets",
    group: "social",
    tags: ["Social Media", "Reels"],
    projectLink: "https://www.instagram.com/reel/CztKue1NTk5/?igsh=NGgxMjFsOHV0emhs",
  },
  {
    imgSrc: "/assets/projects/Dindin.jpg",
    profileName: "DinDin",
    title: "Conteúdo sobre crédito",
    description: "Conteúdo em vídeo para comunicar serviços financeiros.",
    category: "Crédito",
    group: "social",
    tags: ["Social Media", "Reels"],
    projectLink: "https://www.instagram.com/reel/CfTv2MyjBMn/",
  },
  {
    imgSrc: "/assets/projects/TransTriangulo.jpg",
    profileName: "TransTriângulo",
    title: "Conteúdo para TransTriângulo",
    description: "Comunicação de marca desenvolvida para o agronegócio.",
    category: "Agronegócio",
    group: "social",
    tags: ["Social Media", "B2B"],
    projectLink: "https://www.instagram.com/p/Cwxac5cMvCj/",
  },
  {
    imgSrc: "/assets/projects/IntelBras.jpg",
    profileName: "Intelbras",
    title: "Conteúdo de segurança",
    description: "Post com copy de autoridade para o segmento de segurança.",
    category: "Instagram Copy",
    group: "social",
    tags: ["Social Media", "Copywriting"],
    previewType: "instagram",
    projectLink: "https://www.instagram.com/p/Cg2e3zBJwUx/",
  },
  {
    imgSrc: "/assets/projects/joolt.jpg",
    profileName: "Joolt",
    title: "Conteúdo fitness",
    description: "Peça para o segmento fitness com tom motivacional e chamada objetiva.",
    category: "Instagram Copy",
    group: "social",
    tags: ["Social Media", "Copywriting"],
    previewType: "instagram",
    projectLink: "https://www.instagram.com/p/CsJGQfxsClR/",
  },
  {
    imgSrc: "/assets/projects/zenit-faturamento-fidelizacao.png",
    cardType: "gmail",
    title: "Faturamento + fidelização = Zenit no seu portfólio",
    description: "Campanha de email com foco em fidelização e oportunidades de faturamento.",
    category: "Email Marketing",
    group: "email-gmail",
    tags: ["Email", "Copywriting", "Campanha"],
    projectLink: "https://app.rdstation.email/mail/4c8c58c9-0f31-4f9c-8fa0-a0b2722cb464",
  },
  {
    imgSrc: "/assets/projects/SVASlucrativos.png",
    cardType: "gmail",
    title: "Novidade: SVAs lucrativos a partir de R$ 0,25",
    description: "Email promocional para apresentação de novos serviços de valor agregado.",
    category: "Email Marketing",
    group: "email-gmail",
    tags: ["Email", "Copywriting", "Campanha"],
    projectLink: "https://app.rdstation.email/mail/7a81a12f-8edc-4644-8853-ea473d841dcc",
  },
  {
    imgSrc: "/assets/projects/Wellhub.png",
    cardType: "gmail",
    title: "Seu time merece Wellhub",
    description: "Campanha de email apresentando um benefício para equipes.",
    category: "Email Marketing",
    group: "email-gmail",
    tags: ["Email", "Copywriting", "Campanha"],
    projectLink: "https://app.rdstation.email/mail/4fb697cc-3287-4520-994a-814b7b703bb1",
  },
  {
    imgSrc: "/assets/projects/VendeEInstala.png",
    cardType: "gmail",
    title: "Você vende. Instala. E o cliente some.",
    description: "Email de campanha com foco em relacionamento e retenção de clientes.",
    category: "Email Marketing",
    group: "email-gmail",
    tags: ["Email", "Copywriting", "Campanha"],
    projectLink: "https://app.rdstation.email/mail/7d20532a-2942-4246-8ae1-ab613bb6a336",
  },
  {
    imgSrc: "/assets/projects/combogamer.png",
    cardType: "gmail",
    title: "Combo Gamer: alta performance + segurança",
    description: "Campanha de email para divulgação de solução voltada ao público gamer.",
    category: "Email Marketing",
    group: "email-gmail",
    tags: ["Email", "Copywriting", "Campanha"],
    projectLink: "https://app.rdstation.email/mail/5b830c27-7bcc-4599-9183-9255ffb36038",
  },
];

const emailCopyProjects = copysData
  .filter((copy) => copy.category === "E-mail Marketing")
  .map((copy) => ({
    ...copy,
    group: "email-copy",
    category: "E-mail Marketing",
    tags: copy.tags || [copy.title],
  }));

const filters = [
  { id: "all", label: "Todos os projetos" },
  { id: "social", label: "Social media" },
  { id: "campaigns", label: "Campanhas" },
  { id: "editorial", label: "Conteúdo editorial" },
  { id: "email", label: "Email marketing" },
];

const emailGroups = [
  { id: "email-campaigns", title: "Emails e campanhas digitais", groups: ["email", "email-gmail"] },
  { id: "email-copy", title: "Produção Textual e Comunicação Corporativa", groups: ["email-copy"] },
];

const ProjectGrid = ({ items, onCopyPreview }) => (
  <div className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {items.map((project) => {
      if (project.group === "email-copy") {
        const firstEmail = project.content?.[0];
        const emailBody = firstEmail?.text?.replace(/\s+/g, " ").trim() || "";
        const signatureMatch = emailBody.match(/(?:Atenciosamente,|Cordialmente,|Abraços,|Um abraço,)\s*([^.!?]+)/i);
        const signature = signatureMatch?.[1]?.trim();

        return (
          <button
            key={project.id}
            type="button"
            onClick={() => onCopyPreview(project)}
            aria-label={`Abrir copies de email de ${project.title}`}
            className="group flex h-full min-h-[430px] min-w-0 flex-col overflow-hidden rounded-xl border border-gray-200/80 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
          >
            <div className="shrink-0 border-b border-gray-200 bg-[#f7f8fa]">
              <div className="flex items-center gap-2 border-b border-gray-200 bg-white px-4 py-3">
                <span className="material-symbols-rounded text-[18px] text-[#d44638]">mail</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-gray-500">Prévia de email</span>
                <span className="ml-auto rounded-full bg-gray-100 px-2 py-1 text-[9px] font-medium text-gray-600">
                  {project.content?.length || 0} {(project.content?.length || 0) === 1 ? "copy" : "copies"}
                </span>
              </div>
              <div className="px-4 py-3">
                <p className="text-[10px] text-gray-500">Categoria · {project.tags?.join(", ") || "Conteúdo"}</p>
                <p className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-gray-900">
                  {firstEmail?.subject || firstEmail?.subtitle || project.title}
                </p>
              </div>
              <div className="mx-4 border-t border-dashed border-gray-300" />
              <div className="px-4 py-3">
                <p className="line-clamp-5 text-xs leading-relaxed text-gray-600">
                  {emailBody || "Abra para consultar o conteúdo desta copy."}
                </p>
              </div>
            </div>
            <div className="flex flex-1 items-end justify-between gap-2 px-4 py-3">
              <div className="min-w-0">
                <h3 className="truncate text-xs font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-1 truncate text-[10px] text-gray-500">
                  {signature ? `Assinatura: ${signature}` : "Texto e autoria no conteúdo completo"}
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1 text-[10px] font-semibold text-gray-800 transition-colors group-hover:text-[hsl(var(--accent))]">
                Abrir <span className="material-symbols-rounded text-[14px]">arrow_forward</span>
              </span>
            </div>
          </button>
        );
      }

      return (
        <div key={`${project.projectLink}-${project.title}`} className="h-full">
          <ProjectCard
            imgSrc={project.imgSrc}
            profileName={project.profileName}
            title={project.title}
            description={project.description}
            category={project.category}
            cardType={project.cardType}
            tags={project.tags}
            projectLink={project.projectLink}
            previewLabel="Pré-visualizar"
            openLink
            showActions={false}
          />
        </div>
      );
    })}
  </div>
);

const EmailSections = ({ items, onCopyPreview }) => (
  <div className="space-y-12">
    {emailGroups.map((group) => {
      const groupProjects = items.filter((project) => group.groups.includes(project.group));
      if (!groupProjects.length) return null;
      return (
        <section key={group.id} aria-labelledby={`${group.id}-title`}>
          <h3 id={`${group.id}-title`} className="mb-5 border-b border-[hsl(var(--border))] pb-3 text-base font-semibold text-[hsl(var(--foreground))]">
            {group.title}
          </h3>
          <ProjectGrid items={groupProjects} onCopyPreview={onCopyPreview} />
        </section>
      );
    })}
  </div>
);

const TodosProjetos = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedCopy, setSelectedCopy] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProjects = [...projects, ...emailCopyProjects];
  const visibleProjects = activeFilter === "all"
    ? allProjects
    : activeFilter === "email"
      ? allProjects.filter((project) => project.group.startsWith("email"))
      : allProjects.filter((project) => project.group === activeFilter);
  return (
    <>
      <main className="min-h-screen pb-20 pt-24 lg:pt-32">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 lg:px-16 xl:px-24">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0 })}
            className="mb-12 inline-flex h-9 items-center gap-2 rounded-full border border-[hsl(var(--border))] px-4 text-xs font-medium text-[hsl(var(--muted-foreground))] transition-all duration-200 hover:border-[hsl(var(--accent)/0.4)] hover:bg-[hsl(var(--accent-light))] hover:text-[hsl(var(--accent))]"
          >
            <span className="material-symbols-rounded text-[14px]">arrow_back</span>
            Voltar para o início
          </Link>

          <header className="mb-12 grid gap-8 border-b border-[hsl(var(--border))] pb-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[hsl(var(--accent))]" />
                <p className="section-label">Portfólio completo</p>
              </div>
             <h1 className="font-serif-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.02] text-[hsl(var(--foreground))]">
  Projetos além do feed.
</h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-[hsl(var(--muted-foreground))]">
                Uma seleção de trabalhos em social media, campanhas, conteúdo
                editorial e email marketing — cada peça pensada para seu canal e
                seu público.
              </p>
            </div>
<div className="flex items-center gap-3 lg:justify-self-end">
  <span className="font-serif-display text-5xl leading-none text-[hsl(var(--foreground))]">
    {allProjects.length}
  </span>

  <span className="max-w-20 text-xs uppercase leading-relaxed tracking-[0.12em] text-[hsl(var(--muted-foreground))]">
    projetos selecionados
  </span>
</div>

          </header>

          <div className="mb-8 flex flex-wrap gap-2" aria-label="Filtrar projetos">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                aria-pressed={activeFilter === filter.id}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                  activeFilter === filter.id
                    ? "border-[hsl(var(--foreground))] bg-[hsl(var(--foreground))] text-[hsl(var(--background))]"
                    : "border-[hsl(var(--border))] text-[hsl(var(--muted-foreground))] hover:border-[hsl(var(--foreground)/0.4)] hover:text-[hsl(var(--foreground))]"
                }`}
              >
                {filter.label}
                <span className="ml-2 opacity-60">
                  {filter.id === "all"
                    ? allProjects.length
                    : filter.id === "email"
                      ? allProjects.filter((project) => project.group.startsWith("email")).length
                      : allProjects.filter((project) => project.group === filter.id).length}
                </span>
              </button>
            ))}
          </div>

          <div className="mb-5 flex items-center justify-between border-b border-[hsl(var(--border))] pb-4">
            <h2 className="text-sm font-medium text-[hsl(var(--foreground))]">
              {filters.find((filter) => filter.id === activeFilter)?.label}
            </h2>
            <span className="text-xs tabular-nums text-[hsl(var(--muted-foreground))]">
              {visibleProjects.length} trabalhos
            </span>
          </div>

          {activeFilter === "email" ? (
            <EmailSections items={visibleProjects} onCopyPreview={setSelectedCopy} />
          ) : activeFilter === "all" ? (
            <div className="space-y-12">
              <ProjectGrid
                items={visibleProjects.filter((project) => !project.group.startsWith("email"))}
                onCopyPreview={setSelectedCopy}
              />
              <EmailSections
                items={visibleProjects.filter((project) => project.group.startsWith("email"))}
                onCopyPreview={setSelectedCopy}
              />
            </div>
          ) : (
            <ProjectGrid items={visibleProjects} onCopyPreview={setSelectedCopy} />
          )}
        </div>
      </main>

      <CopyModal
        isOpen={Boolean(selectedCopy)}
        onClose={() => setSelectedCopy(null)}
        copyData={selectedCopy}
      />
      <Footer />
    </>
  );
};

export default TodosProjetos;
