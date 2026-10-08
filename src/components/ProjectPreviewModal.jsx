import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const DEVICE = {
  desktop: { label: "Desktop", width: "100%", maxW: "100%" },
  mobile: { label: "Mobile", width: "390px", maxW: "390px" },
};

export default function ProjectPreviewModal({ project, onClose }) {
  const [device, setDevice] = useState("desktop");
  const [loading, setLoading] = useState(true);
  const [previewFailed, setPreviewFailed] = useState(false);
  const overlayRef = useRef(null);

  const isImagePreview = project?.previewType === "image";
  const isVideoPreview = project?.previewType === "video";
  const isFacebookPreview = project?.previewType === "facebook";
  const isInstagramPreview = project?.previewType === "instagram";
  const link = project?.projectLink || project?.link || "";
  const reelEmbedUrl = project?.videoEmbedUrl ||
    (link && /^https:\/\/(?:www\.)?instagram\.com\/reel\//i.test(link)
      ? link.replace(/\/$/, "") + "/embed/"
      : "");
  const hasInstagramVideoPreview = isVideoPreview || (isInstagramPreview && Boolean(reelEmbedUrl));

  useEffect(() => {
    const handler = (event) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    setLoading(true);
    setPreviewFailed(false);
  }, [link, project?.imgSrc]);

  if (!project) return null;

  const handleOverlayClick = (event) => {
    if (event.target === overlayRef.current) onClose();
  };

  return createPortal(
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 backdrop-blur-sm ${hasInstagramVideoPreview || isInstagramPreview ? "p-3 sm:p-6" : "p-3 sm:p-6"} animate-[fadeIn_0.25s_ease]`}
    >
      <div
        className={`relative flex flex-col ${isInstagramPreview ? "w-full max-w-[440px] rounded-[28px]" : isFacebookPreview ? "w-full max-w-[620px] max-h-[90vh] rounded-xl" : "w-full max-w-5xl h-[90vh] rounded-2xl"} overflow-hidden bg-white border border-gray-200 shadow-2xl animate-[modalIn_0.35s_cubic-bezier(0.16,1,0.3,1)]`}
        onClick={(event) => event.stopPropagation()}
      >
        <header className="shrink-0 flex items-center gap-3 px-4 py-3 border-b border-gray-200 bg-white">
          <span className="text-sm font-semibold text-gray-900 truncate mr-auto">
            {project.title}
          </span>

          {!isImagePreview && !hasInstagramVideoPreview && !isInstagramPreview && !isFacebookPreview && (
            <div className="hidden sm:flex items-center gap-0.5 rounded-lg bg-gray-100 p-0.5">
              {Object.entries(DEVICE).map(([key, { label }]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setDevice(key);
                    setLoading(true);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${device === key ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                  aria-pressed={device === key}
                >
                  {key === "desktop" ? <DesktopIcon className="w-3.5 h-3.5" /> : <MobileIcon className="w-3 h-3" />}
                  {label}
                </button>
              ))}
            </div>
          )}

          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-900 text-white hover:opacity-80 transition-opacity"
            >
              <span className="material-symbols-rounded text-[14px]">open_in_new</span>
              Abrir original
            </a>
          ) : null}

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="Fechar pré-visualização"
          >
            <CloseIcon className="w-4 h-4" />
          </button>
        </header>

        {!hasInstagramVideoPreview && !isInstagramPreview && !isFacebookPreview && (
          <div className="shrink-0 flex items-center gap-2 px-4 py-2 bg-gray-50 border-b border-gray-200">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <div className="w-3 h-3 rounded-full bg-green-400/70" />
            </div>
            <div className="flex-1 flex items-center gap-2 mx-2 px-3 py-1 rounded-md bg-white border border-gray-200">
              <LockIcon className="w-3 h-3 text-green-500 shrink-0" />
              <span className="text-xs text-gray-500 truncate">
                {link ? link.replace(/^https?:\/\//, "") : project.category || "pré-visualização"}
              </span>
            </div>
            {link ? (
              <a href={link} target="_blank" rel="noopener noreferrer" className="sm:hidden flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-gray-900 text-white hover:opacity-80 transition-opacity shrink-0">
                Abrir
              </a>
            ) : null}
          </div>
        )}

        <div className={`flex-1 min-h-0 ${isInstagramPreview ? "bg-[#f5f5f5] p-3 sm:p-4" : isFacebookPreview ? "overflow-y-auto bg-[#f0f2f5] p-3 sm:p-6" : "flex items-start justify-center overflow-hidden bg-gray-100"}`}>
          {isImagePreview ? (
            <div className="relative w-full h-full flex items-center justify-center p-4">
              <img src={project.imgSrc} alt={`Pré-visualização: ${project.title}`} className="max-w-full max-h-full object-contain rounded-lg shadow-lg" onLoad={() => setLoading(false)} />
            </div>
          ) : isFacebookPreview ? (
            <article className="mx-auto w-full max-w-[500px] overflow-hidden rounded-lg border border-[#dddfe2] bg-white shadow-sm">
              <header className="flex items-center gap-3 px-4 py-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1877f2] text-white">
                  <span className="text-2xl font-bold leading-none">f</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-[#050505]">Daniele Ferreira</p>
                  <p className="text-xs text-[#65676b]">Publicação · 🌐</p>
                </div>
                <span className="material-symbols-rounded text-[#65676b]">more_horiz</span>
              </header>

              <div className="px-4 pb-3">
                <p className="text-sm leading-relaxed text-[#050505]">{project.description}</p>
              </div>

              <div className="relative max-h-[min(60vh,620px)] overflow-hidden bg-[#f0f2f5]">
                {loading && !previewFailed && <div className="absolute inset-0 z-10 flex items-center justify-center bg-white"><div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-[#1877f2]" /></div>}
                {project.imgSrc && !previewFailed ? (
                  <img
                    src={project.imgSrc}
                    alt={`Pré-visualização: ${project.title}`}
                    className="max-h-[min(60vh,620px)] w-full object-contain"
                    onLoad={() => setLoading(false)}
                    onError={() => {
                      setLoading(false);
                      setPreviewFailed(true);
                    }}
                  />
                ) : (
                  <div className="flex min-h-52 flex-col items-center justify-center gap-3 bg-white p-6 text-center">
                    <span className="material-symbols-rounded text-3xl text-gray-400">image_not_supported</span>
                    <p className="text-sm text-gray-600">Não foi possível carregar a imagem deste projeto.</p>
                  </div>
                )}
              </div>

              <div className="px-4">
                <div className="flex items-center justify-between border-b border-[#ced0d4] py-2 text-xs text-[#65676b]">
                  <span>👍 Curtir</span>
                  <span>Comentar</span>
                  <span>Compartilhar</span>
                </div>
              </div>
              <div className="px-4 py-3">
                <p className="text-sm font-semibold text-[#050505]">{project.title}</p>
                {link && (
                  <a href={link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#1877f2] hover:underline">
                    Ver publicação original <span className="material-symbols-rounded text-[14px]">open_in_new</span>
                  </a>
                )}
              </div>
            </article>
          ) : isInstagramPreview ? (
            <div className="mx-auto w-full max-w-[400px] overflow-hidden rounded-[26px] border border-gray-200 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
              <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffd7a8_0%,#ef4374_25%,#5d3fd3_70%,#1f1f1f_100%)] text-[11px] font-bold text-white">
                    L
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-gray-900">leila.aurelia</p>
                    <p className="text-[10px] text-gray-500">{project.category || "Instagram"}</p>
                  </div>
                </div>
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer" className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[10px] font-medium text-gray-700 hover:bg-gray-100">
                    Abrir
                  </a>
                ) : null}
              </div>

              <div className="relative h-[520px] overflow-hidden bg-gray-100">
                {loading && !previewFailed && <div className="absolute inset-0 z-10 flex items-center justify-center bg-white"><div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900" /></div>}
                {project.imgSrc && !previewFailed ? (
                  <img
                    src={project.imgSrc}
                    alt={`Pré-visualização: ${project.title}`}
                    className="h-full w-full object-cover"
                    onLoad={() => setLoading(false)}
                    onError={() => {
                      setLoading(false);
                      setPreviewFailed(true);
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white p-6 text-center">
                    <span className="material-symbols-rounded text-3xl text-gray-400">image_not_supported</span>
                    <p className="text-sm text-gray-600">Não foi possível carregar a imagem deste projeto.</p>
                    {link && (
                      <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white hover:opacity-80">
                        Abrir no Instagram
                        <span className="material-symbols-rounded text-[16px]">open_in_new</span>
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between px-4 py-3 text-gray-700">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-rounded text-[22px]">favorite_border</span>
                  <span className="material-symbols-rounded text-[22px]">chat_bubble_outline</span>
                  <span className="material-symbols-rounded text-[22px]">send</span>
                </div>
                <span className="material-symbols-rounded text-[22px]">bookmark_border</span>
              </div>

              <div className="px-4 pb-4">
                <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-gray-500">1.234 curtidas</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-800">
                  <span className="font-semibold">leila.aurelia</span> {project.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{project.description}</p>
              </div>
            </div>
          ) : (
            <div className="relative h-full transition-all duration-300 ease-in-out" style={{ width: DEVICE[device].width, maxWidth: DEVICE[device].maxW }}>
              {loading && <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10"><div className="w-8 h-8 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" /></div>}
              <iframe key={`${device}-${link}`} src={link} title={`Pré-visualização: ${project.title}`} className="w-full h-full border-0" onLoad={() => setLoading(false)} sandbox="allow-scripts allow-same-origin allow-forms allow-popups" />
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}

function DesktopIcon({ className }) {
  return <svg className={className} viewBox="0 0 20 20" fill="currentColor"><rect x="2" y="3" width="16" height="11" rx="1.5" /><path d="M7 17h6M10 14v3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" /></svg>;
}

function MobileIcon({ className }) {
  return <svg className={className} viewBox="0 0 14 20" fill="currentColor"><rect x="1" y="1" width="12" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" /><circle cx="7" cy="16.5" r="0.75" /></svg>;
}

function CloseIcon({ className }) {
  return <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 3l10 10M13 3L3 13" /></svg>;
}

function LockIcon({ className }) {
  return <svg className={className} viewBox="0 0 12 14" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="6" width="10" height="7" rx="1.5" fill="currentColor" stroke="none" opacity=".2" /><rect x="1" y="6" width="10" height="7" rx="1.5" /><path d="M3.5 6V4a2.5 2.5 0 015 0v2" /></svg>;
}
