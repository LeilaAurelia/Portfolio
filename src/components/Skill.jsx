import React from "react";
import { SkillCard } from "./SkillCard";

const skillItem = [
  {
    label: "SEO & Otimização",
    desc: "Estratégias de ranqueamento orgânico e otimização de conteúdo para mecanismos de busca.",
    icon: "search",
  },
  {
    label: "Copywriting Estratégico",
    desc: "Criação de textos persuasivos que convertem leitores em clientes e geram resultados.",
    icon: "edit_note",
  },
  {
    label: "Análise de Marketing",
    desc: "Interpretação de dados e métricas para decisões estratégicas baseadas em resultados.",
    icon: "analytics",
  },
  {
    label: "Estratégia Digital",
    desc: "Planejamento e execução de campanhas integradas de marketing digital e inbound.",
    icon: "campaign",
  },
];

const Skill = () => {
  return (
    <section className="pt-16 lg:pt-24 pb-16">
      <div className="px-4 md:px-8 lg:px-16 xl:px-24 max-w-screen-2xl mx-auto">
        <div className="max-w-3xl mb-12 text-center mx-auto">
          <p className="text-xs uppercase tracking-widest text-primary mb-4">
            Expertise
          </p>
          <h2 className="text-2xl lg:text-3xl font-serif text-primary mb-4">
            Minhas habilidades
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Competências essenciais para transformar estratégias em resultados concretos.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {skillItem.map(({ label, desc, icon }, key) => (
            <SkillCard key={key} label={label} desc={desc} icon={icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
