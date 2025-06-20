import React from "react";

import { SkillCard } from "./SkillCard";

const skillItem = [
  {
    label: "SEO e Otimização de Conteúdo",
    desc: "Melhoria de textos para ranqueamento e alcance orgânico.",
  },
  {
    label: "Copywriting Persuasivo",
    desc: "Criação de textos que despertam desejo e geram conversões.",
  },
  {
    label: "Análise de Dados e Métricas de Marketing",
    desc: "Interpretação de números para decisões estratégicas.",
  },
  {
    label: "Desenvolvimento de Personas e Jornada do Cliente",
    desc: "Mapeamento de perfis e comportamentos do público-alvo.",
  },
  {
    label: "Planejamento e Execução de Campanhas de Mídia Paga",
    desc: "Estratégia, segmentação e gestão de anúncios.",
  },
  {
    label: "Marketing de Influência",
    desc: "Parcerias com influenciadores para ampliar o alcance.",
  },
  {
    label: "Produção e Gerenciamento de Webinars e Eventos Online",
    desc: "Organização de eventos digitais com foco em engajamento.",
  },
  {
    label: "Desenvolvimento e Implementação de Estratégias de Inbound",
    desc: "Atração de clientes por meio de conteúdo relevante.",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-3 reveal-up">Minhas habilidades</h2>

        <p className="mt-3 mb-8 ">
          Utilizo técnicas de copywriting e marketing digital para criar
          mensagens que conectam, vendem e posicionam marcas com autenticidade e
          impacto.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ label, desc }, key) => (
            <SkillCard key={key} label={label} desc={desc}  />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
