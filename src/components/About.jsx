import React from "react";

const About = () => {
  return (
    <section id="about" className="pt-24 lg:pt-36 pb-8">
      <div className="px-4 md:px-8 lg:px-16 xl:px-24 max-w-screen-2xl mx-auto">
        {/* Section header */}
        <div className="reveal-up flex items-center gap-3 mb-16">
          <span className="w-8 h-px bg-[hsl(var(--accent))]" />
          <p className="section-label">Quem sou</p>
          <span className="flex-1 h-px bg-[hsl(var(--border))]" />
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Text content */}
          <div className="space-y-8">
            <div className="reveal-up">
              <h2 className="font-serif-display text-[clamp(1.7rem,3.5vw,2.6rem)] leading-tight text-[hsl(var(--foreground))] mb-6">
                Leila Aurelia
                <br />
                <span style={{ color: "hsl(var(--accent))" }}>
                  Falcão de Lima
                </span>
              </h2>
            </div>

            <div className="reveal-up delay-100 space-y-4 text-[hsl(var(--muted-foreground))] leading-relaxed text-[15px] text-justify">
              <p>
                Sou nordestina, formada em Jornalismo pela Universidade Federal
                de Alagoas, e atuo como Copywriter Pleno com especialização em
                Marketing Digital, Branding e Redes Sociais.
              </p>
              <p>
                Trabalho com SEO, copywriting, análise de métricas, campanhas de
                mídia paga e Inbound Marketing, criando estratégias que conectam
                marcas e pessoas — gerando autoridade e vendas.
              </p>
            </div>

            {/* Education badge */}
            <div className="reveal-up delay-200">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-gray-200">
                <div className="w-10 h-10 rounded-full bg-[hsl(var(--accent))] grid place-items-center text-white shrink-0">
                  <span className="material-symbols-rounded text-[18px]">
                    school
                  </span>
                </div>
                <div>
                  <p className="text-xs text-[hsl(var(--muted-foreground))] mb-0.5">
                    Formada em
                  </p>
                  <p className="text-sm font-semibold text-[hsl(var(--foreground))]">
                    Jornalismo · UFAL
                  </p>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="reveal-up delay-300 flex flex-wrap gap-2">
              {[
                "SEO",
                "Copywriting",
                "Analytics",
                "CVC",
                "Conversion",
                "SuperPlayer",
                "Marketing",
              ].map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Cards */}
          <div className="space-y-6">
            {/* Stats grid */}
            <div className="reveal-up delay-300 grid grid-cols-2 gap-4">
              {[
                { n: "+100", label: "Campanhas criadas", icon: "campaign" },
                {
                  n: "+15",
                  label: "Marcas atendidas",
                  icon: "business",
                },
              ].map(({ n, label, icon }, i) => (
                <div key={i} className="bg-white border border-gray-200 p-6 rounded-2xl">
                  <span
                    className="material-symbols-rounded text-[20px] mb-3 block"
                    style={{ color: "hsl(var(--accent))" }}
                  >
                    {icon}
                  </span>
                  <p className="font-serif-display text-4xl text-[hsl(var(--foreground))] mb-1">
                    {n}
                  </p>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* Skills card */}
            <div className="reveal-up delay-400 bg-white border border-gray-200 p-6 rounded-2xl">
              <h3 className="font-semibold text-[hsl(var(--foreground))] mb-4 flex items-center gap-2">
                <span className="material-symbols-rounded text-[20px]" style={{ color: "hsl(var(--accent))" }}>
                  workspace_premium
                </span>
                Minhas Habilidades
              </h3>
              <div className="grid grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2">
                {[
                  "Copywriting Estratégico",
                  "SEO & Analytics",
                  "Social Media Management",
                  "Marketing de Conteúdo",
                  "Branding & Identidade Visual",
                  "Gestão de Tráfego Pago",
                  "Email Marketing",
                  "Inbound Marketing"
                ].map((skill, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))] shrink-0" />
                    <span className="text-sm text-[hsl(var(--muted-foreground))]">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
