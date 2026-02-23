import React from 'react'
import PropTypes from 'prop-types'

const SkillCard = ({ label, desc, icon, classes }) => {
  return (
    <div className={'group relative bg-white rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ' + classes}>
      {/* Borda animada flutuante */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:via-primary/10 group-hover:to-primary/5 transition-all duration-500 -z-10"></div>
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-500"></div>
      
      {/* Ícone */}
      <div className="w-14 h-14 rounded-xl bg-primary/10 grid place-items-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
        <span className="material-symbols-rounded text-primary group-hover:text-primary-foreground text-[28px] transition-colors duration-500">
          {icon}
        </span>
      </div>

      {/* Conteúdo */}
      <div>
        <h3 className='text-xl font-semibold text-primary mb-3 group-hover:text-primary transition-colors duration-300'>{label}</h3>
        <p className='text-muted-foreground text-sm leading-relaxed'>
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
