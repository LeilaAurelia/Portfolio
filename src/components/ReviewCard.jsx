import React from "react";
import PropTypes from "prop-types";

const ratings = new Array(5).fill({
  icon: "star",
  style: { fontVariationSettings: '"FILL" 1' },
});

const ReviewCard = ({ content, name, company }) => {
  return (
    <div className="bg-white ring-1 ring-violet-300 shadow-md p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px] h-full overflow-visible">
      <div className="flex items-center gap-1 mb-3">
        {ratings.map(({ icon, style }, key) => (
          <span
            className="material-symbols-rounded text-yellow-300 text-[18px]"
            style={style}
            key={key}
          >
            {icon}
          </span>
        ))}
      </div>

      <p className="text-zinc-900 mb-8 break-words">{content}</p>

      <div className="flex items-center gap-2 mt-auto">
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-xs text-zinc-900 tracking-wider">{company}</p>
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
