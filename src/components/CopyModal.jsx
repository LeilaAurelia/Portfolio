import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const getCopyDate = (copyData, email, index) => {
  const dateKey = `${copyData?.id || copyData?.title}-${email?.subject || email?.subtitle || index}`;
  let hash = 2166136261;

  for (let charIndex = 0; charIndex < dateKey.length; charIndex += 1) {
    hash = Math.imul(hash ^ dateKey.charCodeAt(charIndex), 16777619);
  }

  const start = Date.UTC(2019, 0, 1);
  const today = new Date();
  const end = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const availableDays = Math.floor((end - start) / 86400000) + 1;
  const date = new Date(start + (hash >>> 0) % availableDays * 86400000);

  return date.toLocaleDateString("pt-BR", { timeZone: "UTC" });
};

const CopyModal = ({ isOpen, onClose, copyData }) => {
  const scrollRef = useRef(null);
  const tabsScrollRef = useRef(null);
  const [selectedEmailIndex, setSelectedEmailIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setSelectedEmailIndex(0);
      const previousBodyOverflow = document.body.style.overflow;
      const previousDocumentOverflow = document.documentElement.style.overflow;
      const previousModalOpen = document.body.dataset.modalOpen;
      document.body.dataset.modalOpen = "true";
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = previousBodyOverflow;
        document.documentElement.style.overflow = previousDocumentOverflow;
        if (previousModalOpen === undefined) {
          delete document.body.dataset.modalOpen;
        } else {
          document.body.dataset.modalOpen = previousModalOpen;
        }
      };
    }
  }, [isOpen]);

  const handleWheelOnOverlay = (e) => {
    if (scrollRef.current) scrollRef.current.scrollTop += e.deltaY;
  };

  const emails = copyData?.content || [];
  const currentEmail = emails[selectedEmailIndex];

  const hasPrevious = selectedEmailIndex > 0;
  const hasNext = selectedEmailIndex < emails.length - 1;

  // Scroll the tabs to show the active button
  useEffect(() => {
    if (tabsScrollRef.current && emails.length > 1) {
      const buttons = tabsScrollRef.current.querySelectorAll('button');
      const activeButton = buttons[selectedEmailIndex];
      if (activeButton) {
        activeButton.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [selectedEmailIndex, emails.length]);

  const goToPrevious = () => {
    if (hasPrevious) {
      setSelectedEmailIndex(selectedEmailIndex - 1);
      scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToNext = () => {
    if (hasNext) {
      setSelectedEmailIndex(selectedEmailIndex + 1);
      scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!isOpen || !copyData) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100000] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
      onWheel={handleWheelOnOverlay}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-lg shadow-2xl flex flex-col"
        style={{
          maxHeight: "90vh",
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

        {/* Gmail-style Header */}
        <div className="shrink-0 px-4 py-3 flex items-center justify-between border-b border-gray-200 bg-gray-50 rounded-t-lg">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center transition-colors"
              aria-label="Voltar"
            >
              <span className="material-symbols-rounded text-gray-600 text-[20px]">
                arrow_back
              </span>
            </button>
            <div>
              <p className="text-sm font-semibold text-gray-900">{copyData.title}</p>
              <p className="text-xs text-gray-500">{copyData.category}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center transition-colors">
              <span className="material-symbols-rounded text-gray-600 text-[20px]">
                archive
              </span>
            </button>
            <button className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center transition-colors">
              <span className="material-symbols-rounded text-gray-600 text-[20px]">
                delete
              </span>
            </button>
            <button className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center transition-colors">
              <span className="material-symbols-rounded text-gray-600 text-[20px]">
                more_vert
              </span>
            </button>
          </div>
        </div>

        {/* Email Navigation Tabs */}
        {emails.length > 1 && (
          <div
            ref={tabsScrollRef}
            className="shrink-0 px-4 py-2 border-b border-gray-200 bg-gray-50 flex items-center gap-2 overflow-x-auto"
          >
            {emails.map((email, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedEmailIndex(index);
                  scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`shrink-0 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  index === selectedEmailIndex
                    ? 'bg-[hsl(var(--accent))] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <span className="sm:hidden">
                  {(() => {
                    const label = email.subject || email.subtitle?.replace(/^(Email \d+:\s*|Artigo \d+:\s*)/i, '') || `Item ${index + 1}`;
                    const words = label.split(/\s+/);
                    return words.length > 4 ? `${words.slice(0, 4).join(' ')}…` : label;
                  })()}
                </span>
                <span className="hidden sm:inline">
                  {email.subject || email.subtitle?.replace(/^(Email \d+:\s*|Artigo \d+:\s*)/i, '') || `Item ${index + 1}`}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Email Content */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto"
          onWheel={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            {/* Email Header */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {currentEmail?.subject || currentEmail?.subtitle?.replace(/^(Email \d+:\s*|Artigo \d+:\s*)/i, '') || `Item ${selectedEmailIndex + 1}`}
              </h2>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="tag-pill">{copyData.category}</span>
                <span>•</span>
                <span>{getCopyDate(copyData, currentEmail, selectedEmailIndex)}</span>
              </div>
            </div>

            {/* Email Body */}
            {currentEmail?.text && (
              <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                {currentEmail.text}
              </div>
            )}
          </div>
        </div>

        {/* Gmail-style Footer with Navigation */}
        <div className="shrink-0 px-4 py-3 border-t border-gray-200 bg-gray-50 rounded-b-lg flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={goToPrevious}
              disabled={!hasPrevious}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                hasPrevious
                  ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              Anterior
            </button>
            <span className="text-xs text-gray-500">
              {selectedEmailIndex + 1} de {emails.length}
            </span>
            <button
              onClick={goToNext}
              disabled={!hasNext}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                hasNext
                  ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              Próximo
            </button>
          </div>
          <button
            onClick={onClose}
            className="h-10 px-6 rounded-full bg-[hsl(var(--accent))] text-white text-sm font-medium hover:opacity-90 transition-all duration-300"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default CopyModal;
