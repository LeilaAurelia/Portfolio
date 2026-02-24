import React from "react";
import PropTypes from "prop-types";

const ReviewCard = ({ content, name, company }) => {
  return (
    <div className="card-base p-6 flex flex-col h-full rounded-2xl">
      {/* Stars */}
      <div className="flex items-center gap-1 mb-5">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <span
              key={i}
              className="material-symbols-rounded text-yellow-400 text-[16px]"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              star
            </span>
          ))}
      </div>

      {/* Quote icon */}
      <svg
        className="w-6 h-6 mb-3 opacity-20"
        viewBox="0 0 24 24"
        fill="hsl(var(--accent))"
      >
        <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.364zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.496 5c-.8.396-1.56.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.346 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.364z" />
      </svg>

      <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed flex-grow mb-6">
        {content}
      </p>

      <div className="flex items-center gap-3 pt-5 border-t border-[hsl(var(--border))]">
        <div
          className="w-9 h-9 rounded-full grid place-items-center text-sm font-semibold shrink-0"
          style={{
            background: "hsl(var(--accent-light))",
            color: "hsl(var(--accent))",
          }}
        >
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-[hsl(var(--foreground))]">
            {name}
          </p>
          <p className="text-[11px] text-[hsl(var(--muted-foreground))]">
            {company}
          </p>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export { ReviewCard };
