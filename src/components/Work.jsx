import React, { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { copysData } from "../data/copysData";
import CopyModal from "./CopyModal";

const works = [
  {
    imgSrc: "/assets/projects/SuperPlayer.jpg",
    tags: ["Saúde como Benefício Corporativo"],
    projectLink: "https://www.instagram.com/p/DIguYgPtgiA/?img_index=1",
  },
  {
    imgSrc: "/assets/projects/SuperPlayerGamer.jpg",
    tags: ["Público Gamer - B2B e B2C"],
    projectLink: "https://www.instagram.com/p/DIjZ5rEJYO2/",
  },
  {
    imgSrc: "/assets/projects/SuperPlayerProvedor.jpg",
    tags: ["Saúde e Bem Estar"],
    projectLink: "https://www.instagram.com/p/DIkBW23Jd5V/",
  },
  {
    imgSrc: "/assets/projects/SuperPlayerProvedores2.jpg",
    tags: ["Seguro para Provedores"],
    projectLink: "https://www.instagram.com/p/DIzYaA-pSIv/?img_index=1",
  },
  {
    imgSrc: "/assets/projects/IntelBras.jpg",
    tags: ["Segurança"],
    projectLink: "https://www.instagram.com/p/Cg2e3zBJwUx/",
  },
  {
    imgSrc: "/assets/projects/joolt.jpg",
    tags: ["Fitness"],
    projectLink: "https://www.instagram.com/p/CsJGQfxsClR/",
  },
];

const INITIAL_VISIBLE = 4;

/* ── Card de texto/copy ─────────────────────────────────── */
const CopyCard = ({ copy, onClick }) => (
  <div
    onClick={onClick}
    className="card-base group flex flex-col rounded-2xl p-6 cursor-pointer"
    style={{ minHeight: "200px" }}
  >
    {/* Ícone decorativo */}
    <div className="skill-icon-box mb-4 shrink-0">
      <span className="material-symbols-rounded text-[20px]">article</span>
    </div>

    {/* Tags */}
    <div className="flex flex-wrap gap-2 mb-3">
      <span className="tag-pill">{copy.category}</span>
      {copy.tags?.slice(0, 1).map((tag, i) => (
        <span key={i} className="tag-pill">
          {tag}
        </span>
      ))}
    </div>

    {/* Título */}
    <h3 className="text-[15px] font-semibold text-[hsl(var(--foreground))] leading-snug mb-2 flex-grow">
      {copy.title}
    </h3>

    {/* Preview do primeiro parágrafo */}
    {copy.content?.[0]?.text && (
      <p className="text-xs text-[hsl(var(--muted-foreground))] leading-relaxed line-clamp-3 mb-4">
        {copy.content[0].text}
      </p>
    )}

    {/* Rodapé */}
    <div className="flex items-center justify-between mt-auto pt-4 border-t border-[hsl(var(--border))]">
      <span className="text-xs font-medium text-[hsl(var(--muted-foreground))]">
        Ler copy completa
      </span>
      <div
        className="w-7 h-7 rounded-full border border-[hsl(var(--border))]
          grid place-items-center text-[hsl(var(--muted-foreground))]
          group-hover:bg-[hsl(var(--foreground))] group-hover:text-[hsl(var(--background))]
          group-hover:border-transparent transition-all duration-300 shrink-0"
      >
        <span className="material-symbols-rounded text-[13px]">
          open_in_new
        </span>
      </div>
    </div>
  </div>
);

const Work = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedCopy, setSelectedCopy] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const visibleCopys = expanded
    ? copysData
    : copysData.slice(0, INITIAL_VISIBLE);

  const openModal = (copy) => {
    setSelectedCopy(copy);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCopy(null), 300);
  };

  const handleCollapse = () => {
    setExpanded(false);
    // Rola de volta ao início da seção "Minhas Autorias"
    setTimeout(() => {
      const el = document.getElementById("autorias");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <>
      <section id="work" className="pt-24 lg:pt-36 pb-16">
        <div className="px-4 md:px-8 lg:px-16 xl:px-24 max-w-screen-2xl mx-auto">
          {/* ── Section header ── */}
          <div className="reveal-up flex items-center gap-3 mb-16">
            <span className="w-8 h-px bg-[hsl(var(--accent))]" />
            <p className="section-label">Portfólio</p>
            <span className="flex-1 h-px bg-[hsl(var(--border))]" />
          </div>

          {/* ── Minhas Copys header ── */}
          <div className="lg:flex lg:items-end lg:justify-between mb-12">
            <div className="reveal-left max-w-lg mb-8 lg:mb-0">
              <h2 className="font-serif-display text-[clamp(1.9rem,4vw,3rem)] leading-tight text-[hsl(var(--foreground))] mb-4">
                Minhas Copys
              </h2>
              <p className="text-[hsl(var(--muted-foreground))] text-[15px] leading-relaxed">
                Projetos que transformaram ideias em resultados concretos,
                conectando marcas e audiências.
              </p>
            </div>

            <div className="reveal-right">
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
                className="inline-flex items-center gap-2 h-11 px-6 rounded-full
                  border border-[hsl(var(--foreground)/0.2)]
                  text-sm font-medium text-[hsl(var(--foreground))]
                  hover:border-[hsl(var(--foreground)/0.5)] hover:bg-[hsl(var(--foreground)/0.04)]
                  transition-all duration-300"
              >
                Ver todos os projetos
                <span className="material-symbols-rounded text-[16px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          {/* ── Grid Minhas Copys (imagens) ── */}
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {works.map(({ imgSrc, title, tags, projectLink }, key) => (
              <div
                key={key}
                className={`reveal-up delay-${Math.min(key * 100, 400)}`}
              >
                <ProjectCard
                  imgSrc={imgSrc}
                  title={title}
                  tags={tags}
                  projectLink={projectLink}
                />
              </div>
            ))}
          </div>

          {/* ══════════════════════════════════════════════════════
              MINHAS AUTORIAS
          ══════════════════════════════════════════════════════ */}
          <div id="autorias" className="mt-24">
            {/* Divisor */}
            <div className="reveal-up flex items-center gap-3 mb-16">
              <span className="w-8 h-px bg-[hsl(var(--accent))]" />
              <p className="section-label">Textos & Autorias</p>
              <span className="flex-1 h-px bg-[hsl(var(--border))]" />
            </div>

            {/* Header */}

            {/* Grid de cards de texto */}
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {visibleCopys.map((copy, key) => (
                <div
                  key={copy.id}
                  className={`reveal-up delay-${Math.min(key * 100, 400)}`}
                  style={{
                    animation:
                      expanded && key >= INITIAL_VISIBLE
                        ? "fadeInUp 0.5s cubic-bezier(0.16,1,0.3,1) both"
                        : undefined,
                    animationDelay:
                      expanded && key >= INITIAL_VISIBLE
                        ? `${(key - INITIAL_VISIBLE) * 60}ms`
                        : undefined,
                  }}
                >
                  <CopyCard copy={copy} onClick={() => openModal(copy)} />
                </div>
              ))}
            </div>

            {/* Botão expandir / recolher */}
            {copysData.length > INITIAL_VISIBLE && (
              <div className="flex justify-center mt-10">
                {!expanded ? (
                  <button
                    onClick={() => setExpanded(true)}
                    className="inline-flex items-center gap-2 h-11 px-8 rounded-full
                      border border-[hsl(var(--foreground)/0.2)]
                      text-sm font-medium text-[hsl(var(--foreground))]
                      hover:border-[hsl(var(--foreground)/0.5)] hover:bg-[hsl(var(--foreground)/0.04)]
                      active:scale-[0.98] transition-all duration-300"
                  >
                    Ver mais
                    <span className="material-symbols-rounded text-[16px]">
                      expand_more
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={handleCollapse}
                    className="inline-flex items-center gap-2 h-11 px-8 rounded-full
                      border border-[hsl(var(--foreground)/0.2)]
                      text-sm font-medium text-[hsl(var(--foreground))]
                      hover:border-[hsl(var(--foreground)/0.5)] hover:bg-[hsl(var(--foreground)/0.04)]
                      active:scale-[0.98] transition-all duration-300"
                  >
                    Recolher
                    <span className="material-symbols-rounded text-[16px]">
                      expand_less
                    </span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Modal */}
      <CopyModal
        isOpen={isModalOpen}
        onClose={closeModal}
        copyData={selectedCopy}
      />

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Work;
