import React from "react";
import PropTypes from "prop-types";

const SkillCard = ({ label, desc, icon, classes }) => {
  return (
    <div className={"card-base group p-7 rounded-2xl " + (classes || "")}>
      <div className="skill-icon-box mb-5">
        <span className="material-symbols-rounded text-[22px]">{icon}</span>
      </div>
      <h3 className="text-[15px] font-semibold text-[hsl(var(--foreground))] mb-3">
        {label}
      </h3>
      <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
        {desc}
      </p>
    </div>
  );
};

SkillCard.propTypes = {
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export { SkillCard };
