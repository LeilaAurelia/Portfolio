import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  return (
    <div
      className={
        "card-base group relative overflow-hidden rounded-2xl " +
        (classes || "")
      }
    >
      <figure className="aspect-[4/3] overflow-hidden">
        <img
          src={imgSrc}
          alt={title || "Projeto"}
          loading="lazy"
          className="project-img w-full h-full object-cover"
        />
      </figure>

      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((label, key) => (
            <span key={key} className="tag-pill">
              {label}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-[hsl(var(--foreground)/0.7)]">
            Ver projeto
          </span>
          <div
            className="w-8 h-8 rounded-full border border-[hsl(var(--border))]
              grid place-items-center text-[hsl(var(--muted-foreground))]
              group-hover:bg-[hsl(var(--foreground))] group-hover:text-[hsl(var(--background))]
              group-hover:border-transparent
              transition-all duration-400 shrink-0"
          >
            <span className="material-symbols-rounded text-[14px]">
              arrow_outward
            </span>
          </div>
        </div>
      </div>

      <a
        href={projectLink}
        className="absolute inset-0"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver projeto"
      />
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export { ProjectCard };
