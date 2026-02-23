import React from "react";

import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  return (
    <div
      className={
        "relative bg-white border border-primary/10 rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all group " +
        classes
      }
    >
      <figure className="aspect-square overflow-hidden">
        <img 
          src={imgSrc} 
          alt={title} 
          loading="lazy" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
        />
      </figure>

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((label, key) => (
            <span 
              key={key} 
              className="text-xs px-3 py-1 bg-primary/5 text-primary rounded-full font-medium">
              {label}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-foreground">Ver projeto</h3>
          <div className="w-8 h-8 rounded-full bg-primary/10 grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <span className="material-symbols-rounded text-[16px]" aria-hidden="true">
              arrow_outward
            </span>
          </div>
        </div>
      </div>

      <a href={projectLink} className="absolute inset-0" target="_blank" rel="noopener noreferrer"></a>
    </div>
  );
};

ProjectCard.PropTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export { ProjectCard };
