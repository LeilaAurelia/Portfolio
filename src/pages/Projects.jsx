import React, { useState } from "react";
import { copysData } from "../data/copysData";
import CopyModal from "../components/CopyModal";

const Projects = () => {
  const [selectedCopy, setSelectedCopy] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (copy) => {
    setSelectedCopy(copy);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCopy(null), 300);
  };

  return (
    <div className="min-h-screen pt-24 sm:pt-32 pb-16">
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 max-w-screen-2xl mx-auto">
        {/* ── Header ── */}
        <div className="mb-8 sm:mb-12">
          <p className="text-xs uppercase tracking-widest text-primary mb-3 sm:mb-4">
            Portfólio Completo
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-primary mb-3 sm:mb-4">
            Todos os Projetos
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
            Explore todas as copys estratégicas que desenvolvi para diferentes
            marcas e segmentos.
          </p>
        </div>

        {/* ── Grid ──
              mobile  : 1 coluna, card horizontal (imagem lateral + info)
              sm+     : 2 colunas, card vertical (imagem topo + info abaixo)
              lg+     : 3 colunas
        */}
        <div
          className="
          flex flex-col gap-4
          sm:grid sm:grid-cols-2 sm:gap-5
          lg:grid-cols-3
        "
        >
          {copysData.map((copy) => (
            <div
              key={copy.id}
              onClick={() => openModal(copy)}
              className="group relative bg-white border border-primary/10 rounded-xl
                overflow-hidden hover:border-primary/30 hover:shadow-lg
                transition-all cursor-pointer active:scale-[0.99]

                /* mobile: flex horizontal */
                flex flex-row

                /* sm+: volta ao layout vertical normal do card */
                sm:flex-col
              "
            >
              {/* ── Imagem ──
                    mobile : coluna esquerda fixa, quadrada pequena
                    sm+    : topo do card, aspect-square completo
              */}
              <figure
                className="
                shrink-0 overflow-hidden

                /* mobile */
                w-28 h-28 rounded-l-xl

                /* sm+: ocupa topo inteiro */
                sm:w-full sm:h-auto sm:aspect-square sm:rounded-none
              "
              >
                <img
                  src={copy.imgSrc}
                  alt={copy.title}
                  loading="lazy"
                  className="w-full h-full object-cover
                    sm:group-hover:scale-105 sm:transition-transform sm:duration-300"
                />
              </figure>

              {/* ── Conteúdo ── */}
              <div
                className="
                flex flex-col justify-between
                /* mobile: padding compacto, ocupa o espaço restante */
                p-3 min-w-0 flex-1

                /* sm+: padding generoso */
                sm:p-6
              "
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-4">
                  {copy.tags.map((label, key) => (
                    <span
                      key={key}
                      className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1
                        bg-primary/5 text-primary rounded-full font-medium whitespace-nowrap"
                    >
                      {label}
                    </span>
                  ))}
                </div>

                {/* Título */}
                <h3
                  className="
                  font-semibold text-primary leading-snug line-clamp-2
                  text-sm sm:text-lg
                  mb-1 sm:mb-2
                "
                >
                  {copy.title}
                </h3>

                {/* Categoria — esconde no mobile para não poluir */}
                <p className="hidden sm:block text-sm text-muted-foreground mb-4">
                  {copy.category}
                </p>

                {/* Rodapé */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs sm:text-sm font-medium text-foreground">
                    Ver copy
                    <span className="hidden sm:inline"> completa</span>
                  </span>
                  <div
                    className="
                    grid place-items-center rounded-full
                    bg-primary/10 text-primary
                    group-hover:bg-primary group-hover:text-primary-foreground
                    transition-colors shrink-0

                    /* mobile: botão menor */
                    w-7 h-7 ml-2

                    /* sm+: tamanho original */
                    sm:w-8 sm:h-8 sm:ml-0
                  "
                  >
                    <span className="material-symbols-rounded text-[14px] sm:text-[16px]">
                      description
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <CopyModal
        isOpen={isModalOpen}
        onClose={closeModal}
        copyData={selectedCopy}
      />
    </div>
  );
};

export default Projects;
