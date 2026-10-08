import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({
  imgSrc,
  title,
  profileName,
  description,
  category,
  cardType,
  tags,
  projectLink,
  onPreview,
  previewLabel = "Ver projeto",
  externalLabel = "Abrir original",
  showActions = true,
  openLink = false,
  classes,
}) => {
  const categoryLabel = category || tags?.[0] || "Projeto";
  const stack = tags?.length ? tags : [categoryLabel];
  const instagramProfileName = profileName || title.replace(/^Conteúdo para\s+/i, "");
  const isFacebookCard = /facebook\.com/i.test(projectLink || "");
  const isInstagramCard = /instagram/i.test(category || "") || /instagram/i.test((projectLink || "") + " " + (tags || []).join(" "));
  const isExternalLinkCard = !showActions && openLink && projectLink;
  const isPreviewCard = !showActions && !isExternalLinkCard && onPreview;
  const Card = isExternalLinkCard ? "a" : isPreviewCard ? "button" : "article";

  return (
    <Card
      type={isPreviewCard ? "button" : undefined}
      href={isExternalLinkCard ? projectLink : undefined}
      target={isExternalLinkCard ? "_blank" : undefined}
      rel={isExternalLinkCard ? "noopener noreferrer" : undefined}
      onClick={isPreviewCard ? onPreview : undefined}
      aria-label={
        isPreviewCard
          ? `Pré-visualizar projeto: ${title}`
          : isExternalLinkCard
            ? `Abrir projeto: ${title}`
            : undefined
      }
      className={
        "h-full min-w-0 overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-sm " +
        (["event", "sensitive", "gmail", "report"].includes(cardType) || isFacebookCard || isInstagramCard ? "min-h-[470px] flex flex-col bg-white" : "portfolio-card min-h-[420px] flex flex-col") +
        (isPreviewCard || isExternalLinkCard ? " cursor-pointer text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 " : "") +
        (classes || "")
      }
    >
      {cardType === "gmail" ? (
        <div className="group flex h-full flex-col bg-white">
          <div className="relative h-56 shrink-0 overflow-hidden bg-[#f3f6fc]">
            {imgSrc ? (
              <img
                src={imgSrc}
                alt={`Thumbnail do email: ${title}`}
                loading="lazy"
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-[#4285f4]">
                <span className="material-symbols-rounded text-5xl">mail</span>
              </div>
            )}
            <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-medium text-[#356ac3] shadow-sm">
              <span className="material-symbols-rounded text-[14px]">mail</span>
              Email marketing
            </span>
          </div>
          <div className="flex flex-1 flex-col p-4">
            <h3 className="line-clamp-2 text-base font-semibold leading-snug text-gray-900">{title}</h3>
            <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-gray-600">{description}</p>
            <span className="mt-auto inline-flex items-center gap-1 border-t border-gray-100 pt-3 text-xs font-medium text-gray-800">
              <span className="material-symbols-rounded text-[15px]">open_in_new</span>
              Ver email completo
            </span>
          </div>
        </div>
      ) : cardType === "report" ? (
        <div className="flex h-full flex-col bg-[#f7f5f0]">
          <div className="border-b-2 border-[#292821] px-4 pb-2 pt-4">
            <p className="font-serif-display text-[10px] uppercase tracking-[0.2em] text-[#777366]">{profileName || "Reportagem"}</p>
            <div className="mt-2 flex items-center justify-between border-t border-[#d8d5ca] pt-2">
              <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#777366]">Jornalismo · Reportagem</span>
              <span className="material-symbols-rounded text-[16px] text-[#777366]">article</span>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-[#e8e5dc]">
            {imgSrc && (
              <img
                src={imgSrc}
                alt={title}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            )}
          </div>
          <div className="flex flex-1 flex-col px-4 py-3">
            <span className="mb-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8a593d]">{categoryLabel}</span>
            <h3 className="font-serif-display text-lg leading-snug text-[#292821]">{title}</h3>
            <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-[#625f55]">{description}</p>
            <div className="mt-auto border-t border-[#d8d5ca] pt-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#514d42]">
              Ler reportagem <span aria-hidden="true">↗</span>
            </div>
          </div>
        </div>
      ) : cardType === "event" ? (
        <div className="flex h-full flex-col">
          <div className="flex items-center gap-3 border-b border-gray-100 px-3 py-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--accent-light))] text-[hsl(var(--accent))]">
              <span className="material-symbols-rounded text-[18px]">event</span>
            </div>
            <div className="min-w-0">
              <p className="truncate text-[11px] font-semibold text-gray-900">{profileName || "Eventos"}</p>
              <p className="text-[9px] text-gray-500">Comunicação de evento</p>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden bg-gray-100">
            {imgSrc && <img src={imgSrc} alt={title} loading="lazy" className="h-full w-full object-cover" />}
          </div>
          <div className="flex flex-1 flex-col p-3">
            <span className="mb-2 w-fit rounded-full bg-gray-100 px-2 py-1 text-[9px] font-medium uppercase tracking-wide text-gray-600">{categoryLabel}</span>
            <h3 className="text-sm font-semibold leading-snug text-gray-900">{title}</h3>
            <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-gray-600">{description}</p>
            <span className="mt-auto pt-3 text-[10px] font-medium text-gray-700">Ver projeto ↗</span>
          </div>
        </div>
      ) : cardType === "sensitive" ? (
        <div className="flex h-full flex-col bg-[#fbfaf7]">
          <div className="flex items-center justify-between border-b border-[#ece9e1] px-3 py-2.5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e9e3d5] text-[#74684f]">
                <span className="material-symbols-rounded text-[17px]">auto_stories</span>
              </div>
              <div className="min-w-0">
                <p className="truncate text-[11px] font-semibold text-gray-900">{profileName || "Inumeráveis"}</p>
                <p className="text-[9px] text-gray-500">História biográfica</p>
              </div>
            </div>
            <span className="material-symbols-rounded text-[17px] text-gray-500">more_horiz</span>
          </div>
          <div className="flex flex-1 flex-col justify-center px-5 py-5">
            <span className="material-symbols-rounded mb-3 text-3xl text-[#b7aa8e]">format_quote</span>
            <h3 className="text-base font-semibold leading-snug text-[#3d3a33]">{title}</h3>
            <p className="mt-3 text-xs leading-relaxed text-[#6c675d]">{description}</p>
            <div className="mt-5 flex items-center gap-3 border-t border-[#e7e2d8] pt-4">
              {imgSrc && <img src={imgSrc} alt="" loading="lazy" className="h-12 w-12 rounded-full object-cover" />}
              <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#8a806d]">Uma história preservada com sensibilidade</span>
            </div>
          </div>
          <div className="border-t border-[#ece9e1] px-3 py-2 text-[10px] font-medium text-[#74684f]">Ler história ↗</div>
        </div>
      ) : isFacebookCard ? (
        <div className="flex h-full flex-col">
          <div className="flex items-center gap-2.5 border-b border-gray-100 px-3 py-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1877f2] text-white">
              <span className="text-xl font-bold leading-none">f</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-semibold text-gray-900">Daniele Ferreira</p>
              <p className="text-[9px] text-gray-500">Publicação · 🌐</p>
            </div>
            <span className="material-symbols-rounded text-gray-500">more_horiz</span>
          </div>

          <div className="px-3 py-3">
            <p className="text-xs leading-relaxed text-gray-800">{description}</p>
          </div>

          <div className="relative aspect-square overflow-hidden bg-gray-100">
            {imgSrc ? (
              <img src={imgSrc} alt={title} loading="lazy" className="h-full w-full object-cover" />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-gray-100 to-gray-200" />
            )}
          </div>

          <div className="mt-auto">
            <div className="flex items-center justify-between border-b border-gray-100 px-3 py-2 text-[10px] text-gray-500">
              <span className="inline-flex items-center gap-1"><span className="text-[#1877f2]">👍</span> Curtir</span>
              <span>Comentar</span>
              <span>Compartilhar</span>
            </div>
            <div className="px-3 py-2">
              <p className="text-xs font-semibold text-gray-900">{title}</p>
              <p className="mt-1 text-[10px] text-gray-500">Ver publicação no Facebook</p>
            </div>
          </div>
        </div>
      ) : isInstagramCard ? (
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-gray-100 px-3 py-2.5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffd7a8_0%,#ef4374_25%,#5d3fd3_70%,#1f1f1f_100%)] text-[10px] font-bold text-white shadow-sm">
                L
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold text-gray-900">{instagramProfileName}</p>
                <p className="text-[9px] text-gray-500">{categoryLabel}</p>
              </div>
            </div>
            <span className="rounded-full border border-gray-200 bg-gray-50 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-gray-700">
              Seguir
            </span>
          </div>

          <div className="relative aspect-square overflow-hidden bg-gray-100">
            {imgSrc ? (
              <img
                src={imgSrc}
                alt={title}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-[hsl(var(--accent)/0.18)] to-gray-100" />
            )}
          </div>

          <div className="flex items-center justify-between px-3 py-2.5 text-gray-700">
            <div className="flex items-center gap-3">
              <span className="material-symbols-rounded text-[20px]">favorite_border</span>
              <span className="material-symbols-rounded text-[20px]">chat_bubble_outline</span>
              <span className="material-symbols-rounded text-[20px]">send</span>
            </div>
            <span className="material-symbols-rounded text-[20px]">bookmark_border</span>
          </div>

          <div className="px-3 pb-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-gray-500">1.234 curtidas</p>
            <p className="mt-2 text-xs leading-relaxed text-gray-800">
              <span className="font-semibold">{instagramProfileName}</span> {title}
            </p>
            <p className="mt-1 text-[11px] leading-relaxed text-gray-600 line-clamp-2">{description}</p>
          </div>
        </div>
      ) : (
        <>
          <div className="h-40 sm:h-44 relative shrink-0 bg-gray-100 overflow-hidden">
            {imgSrc ? (
              <img
                src={imgSrc}
                alt={title}
                loading="lazy"
                className="portfolio-card-img w-full h-full object-cover object-center"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[hsl(var(--accent)/0.18)] to-gray-100" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <span className="absolute top-3 left-3 text-xs font-medium px-2.5 py-1 rounded-full bg-white/90 text-gray-900 shadow">
              {categoryLabel}
            </span>
          </div>

          <div className="p-4 flex flex-col flex-1 gap-2.5 min-h-0">
            <div>
              <h3 className="min-h-[2.75rem] text-base font-semibold text-gray-900 leading-snug line-clamp-2">
                {title}
              </h3>
              {description ? (
                <p className="mt-1 min-h-[3.375rem] text-xs leading-relaxed text-gray-600 line-clamp-3">
                  {description}
                </p>
              ) : <p className="mt-1 min-h-[3.375rem]" aria-hidden="true" />}
            </div>

            <div className="mt-auto min-h-[52px]">
              <p className="text-[10px] font-medium uppercase tracking-wide text-gray-500 mb-1.5">
                Frentes de trabalho
              </p>
              <ul className="flex flex-wrap gap-1">
                {stack.map((tech) => (
                  <li key={tech}>
                    <span className="inline-block text-[10px] px-2 py-0.5 rounded-md bg-gray-100 text-gray-800 border border-gray-200/80">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {showActions ? (
              <div className="flex flex-col gap-2 mt-auto pt-1">
                <button
                  type="button"
                  onClick={onPreview}
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg py-2 px-3 text-xs font-medium bg-gray-900 text-white hover:opacity-90 transition-opacity"
                  aria-label={`${previewLabel}: ${title}`}
                >
                  <span className="material-symbols-rounded text-[16px]">visibility</span>
                  {previewLabel}
                </button>

                {projectLink ? (
                  <a
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg py-2 px-3 text-xs font-medium border border-gray-300 text-gray-800 hover:bg-gray-50 transition-colors"
                    aria-label={`${externalLabel}: ${title}`}
                  >
                    <span className="material-symbols-rounded text-[16px]">open_in_new</span>
                    {externalLabel}
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        </>
      )}
    </Card>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  profileName: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  cardType: PropTypes.string,
  tags: PropTypes.array,
  projectLink: PropTypes.string,
  onPreview: PropTypes.func,
  previewLabel: PropTypes.string,
  externalLabel: PropTypes.string,
  showActions: PropTypes.bool,
  openLink: PropTypes.bool,
  classes: PropTypes.string,
};

export { ProjectCard };
