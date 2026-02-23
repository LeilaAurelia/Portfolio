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

  // Garante que o scroll do mouse não "escape" para a página
  const handleWheelOnOverlay = (e) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop += e.deltaY;
    }
  };

  if (!isOpen || !copyData) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4
        bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      onWheel={handleWheelOnOverlay} // ← redireciona scroll do overlay
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl
          flex flex-col"
        style={{ height: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div
          className="shrink-0 bg-white border-b border-primary/10
          px-6 py-4 flex items-center justify-between rounded-t-2xl"
        >
          <div>
            <h3 className="text-xl font-serif text-primary">
              {copyData.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {copyData.category}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full border-2 border-primary/20
              hover:bg-primary hover:text-primary-foreground hover:border-primary
              transition-all flex items-center justify-center text-primary"
            aria-label="Fechar modal"
          >
            <span className="material-symbols-rounded">close</span>
          </button>
        </div>

        {/* ── Conteúdo com scroll ── */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto overflow-x-hidden px-6 py-6"
          // Impede que o evento de scroll saia daqui para o overlay
          onWheel={(e) => e.stopPropagation()}
        >
          <div className="prose prose-sm max-w-none">
            {copyData.content.map((section, index) => (
              <div key={index} className="mb-8">
                {section.subtitle && (
                  <h4 className="text-lg font-semibold text-primary mb-3">
                    {section.subtitle}
                  </h4>
                )}
                {section.subject && (
                  <p className="text-sm font-medium text-foreground mb-2">
                    <strong>Assunto:</strong> {section.subject}
                  </p>
                )}
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {section.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Footer ── */}
        <div
          className="shrink-0 bg-white border-t border-primary/10
          px-6 py-4 rounded-b-2xl"
        >
          <button
            onClick={onClose}
            className="w-full h-11 px-8 rounded-md bg-primary text-primary-foreground
              hover:bg-primary/90 transition font-medium"
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
