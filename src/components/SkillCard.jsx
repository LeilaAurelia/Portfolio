import React from 'react'
import PropTypes from 'prop-types'

const SkillCard = ( {

  label,
  desc,
  classes
}) => {
  return (
    <div className={'flex items-center gap-3 ring-2 ring-inset ring-violet-400 rounded-2xl p-3 hover:bg-zinc-200 transition-colors group ' + classes}>
    

      <div>
        <h3>{label}</h3>
        <p className='text-zinc-600 text-sm'>
          {desc}
        </p>
      </div>
    </div>
  );
}

SkillCard.propTypes = {
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export { SkillCard };
