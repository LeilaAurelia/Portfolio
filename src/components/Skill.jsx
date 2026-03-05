import React from "react";

const skillItem = [
  {
    label: "SEO & Otimização",
    desc: "Estratégias de ranqueamento orgânico e otimização de conteúdo para mecanismos de busca.",
    icon: "search",
    number: "01",
  },
  {
    label: "Copywriting Estratégico",
    desc: "Criação de textos persuasivos que convertem leitores em clientes e geram resultados.",
    icon: "edit_note",
    number: "02",
  },
  {
    label: "Análise de Marketing",
    desc: "Interpretação de dados e métricas para decisões estratégicas baseadas em resultados.",
    icon: "analytics",
    number: "03",
  },
  {
    label: "Estratégia Digital",
    desc: "Planejamento e execução de campanhas integradas de marketing digital e inbound.",
    icon: "campaign",
    number: "04",
  },
];

const Skill = () => {
  return (
    <section className="pt-24 lg:pt-36 pb-16">
      <div className="px-4 md:px-8 lg:px-16 xl:px-24 max-w-screen-2xl mx-auto">
        {/* Section header */}
        <div className="reveal-up flex items-center gap-3 mb-16">
          <span className="w-8 h-px bg-[hsl(var(--accent))]" />
          <p className="section-label">Expertise</p>
          <span className="flex-1 h-px bg-[hsl(var(--border))]" />
        </div>

        <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-20 xl:gap-28 items-start">
          {/* Left: heading */}
          <div className="mb-10 lg:mb-0 reveal-left">
            <h2 className="font-serif-display text-[clamp(1.9rem,4vw,3rem)] leading-tight text-[hsl(var(--foreground))] mb-5">
              Minhas
              <br />
              habilidades
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] text-[15px] leading-relaxed">
              Competências essenciais para transformar estratégias em resultados
              concretos.
            </p>
          </div>

          {/* Right: cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {skillItem.map(({ label, desc, icon, number }, key) => (
              <div
                key={key}
                className={`card-base group p-7 rounded-2xl reveal-up delay-${key * 100}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="skill-icon-box">
                    <span className="material-symbols-rounded text-[22px]">
                      {icon}
                    </span>
                  </div>
                  <span
                    className="font-serif-display text-4xl leading-none opacity-[0.06] select-none"
                    style={{ color: "hsl(var(--accent))" }}
                  >
                    {number}
                  </span>
                </div>
                <h3 className="text-[15px] font-semibold text-[hsl(var(--foreground))] mb-3 leading-snug">
                  {label}
                </h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
