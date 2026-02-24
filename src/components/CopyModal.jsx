import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const CopyModal = ({ isOpen, onClose, copyData }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.dataset.scrollY = scrollY.toString();
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      return () => {
        const savedScrollY = parseInt(document.body.dataset.scrollY || "0");
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        delete document.body.dataset.scrollY;
        window.scrollTo({ top: savedScrollY, behavior: "instant" });
      };
    }
  }, [isOpen]);

  const handleWheelOnOverlay = (e) => {
    if (scrollRef.current) scrollRef.current.scrollTop += e.deltaY;
  };

  if (!isOpen || !copyData) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
      onWheel={handleWheelOnOverlay}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl flex flex-col"
        style={{
          height: "88vh",
          animation: "scaleIn 0.3s cubic-bezier(0.16,1,0.3,1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <style>{`
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.95) translateY(16px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }
        `}</style>

        {/* Header */}
        <div className="shrink-0 px-7 py-5 flex items-start justify-between border-b border-[hsl(var(--border))]">
          <div>
            <h3 className="font-serif-display text-xl text-[hsl(var(--foreground))] mb-1">
              {copyData.title}
            </h3>
            <span className="tag-pill">{copyData.category}</span>
          </div>
          <button
            onClick={onClose}
            className="ml-4 shrink-0 w-9 h-9 rounded-full border border-[hsl(var(--border))]
              grid place-items-center text-[hsl(var(--muted-foreground))]
              hover:bg-[hsl(var(--foreground))] hover:text-white hover:border-transparent
              transition-all duration-300"
            aria-label="Fechar"
          >
            <span className="material-symbols-rounded text-[16px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto px-7 py-6"
          onWheel={(e) => e.stopPropagation()}
        >
          <div className="space-y-8">
            {copyData.content.map((section, index) => (
              <div key={index}>
                {section.subtitle && (
                  <h4 className="font-serif-display text-lg text-[hsl(var(--foreground))] mb-3">
                    {section.subtitle}
                  </h4>
                )}
                {section.subject && (
                  <p className="text-sm font-medium text-[hsl(var(--foreground))] mb-2">
                    <span className="text-[hsl(var(--muted-foreground))]">
                      Assunto:{" "}
                    </span>
                    {section.subject}
                  </p>
                )}
                <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed whitespace-pre-line">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="shrink-0 px-7 py-5 border-t border-[hsl(var(--border))]">
          <button
            onClick={onClose}
            className="w-full h-11 rounded-xl bg-[hsl(var(--foreground))] text-[hsl(var(--background))]
              text-sm font-medium hover:opacity-80 transition-all duration-300"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

CopyModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  copyData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        subtitle: PropTypes.string,
        subject: PropTypes.string,
        text: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }),
};

export default CopyModal;
