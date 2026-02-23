import React from "react";
import PropTypes from "prop-types";

const ratings = new Array(5).fill({
  icon: "star",
  style: { fontVariationSettings: '"FILL" 1' },
});

const ReviewCard = ({ content, name, company }) => {
  return (
    <div className="bg-white border border-primary/10 rounded-xl p-6 min-w-[320px] flex flex-col lg:min-w-[420px] h-full hover:border-primary/20 hover:shadow-md transition-all">
      <div className="flex items-center gap-1 mb-4">
        {ratings.map(({ icon, style }, key) => (
          <span
            className="material-symbols-rounded text-yellow-400 text-[18px]"
            style={style}
            key={key}
          >
            {icon}
          </span>
        ))}
      </div>

      <p className="text-muted-foreground mb-6 leading-relaxed break-words flex-grow">{content}</p>

      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-primary/10">
        <div className="w-10 h-10 rounded-full bg-primary/10 grid place-items-center text-primary font-semibold">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{company}</p>
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
