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
                Leila Aurélia
                <br />
                <span style={{ color: "hsl(var(--accent))" }}>
                  Falcão de Lima
                </span>
              </h2>
            </div>

            <div className="reveal-up delay-100 space-y-4 text-[hsl(var(--muted-foreground))] leading-relaxed text-[15px] text-justify">
              <p>
                Jornalista formada pela Universidade Federal de Alagoas (UFAL), atuo como Copywriter Pleno e Estrategista de Conteúdo B2B/B2C, com especialização em Marketing Digital, Branding e Mídias Sociais. Alinho inteligência de dados, SEO e copywriting persuasivo à gestão de tráfego e Inbound Marketing, criando assim estratégias de multicanal que constroem autoridade de marca e aceleram a conversão de vendas.
              </p>
            </div>

            {/* Formação */}
            <div className="reveal-up delay-200 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex min-h-[112px] items-start gap-3 rounded-2xl border border-gray-200 bg-white p-4 sm:p-5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[hsl(var(--accent-light))] text-[hsl(var(--accent))]">
                  <span className="material-symbols-rounded text-[20px]">school</span>
                </div>
                <div className="min-w-0">
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[hsl(var(--muted-foreground))]">
                    Graduação
                  </p>
                  <p className="text-sm font-semibold leading-snug text-[hsl(var(--foreground))]">
                    Jornalismo
                  </p>
                  <p className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">UFAL</p>
                </div>
              </div>
              <div className="flex min-h-[112px] items-start gap-3 rounded-2xl border border-[hsl(var(--accent)/0.3)] bg-[hsl(var(--accent-light))] p-4 shadow-sm sm:p-5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[hsl(var(--accent-light))] text-[hsl(var(--accent))]">
                  <span className="material-symbols-rounded text-[20px]">workspace_premium</span>
                </div>
                <div className="min-w-0">
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[hsl(var(--accent))]">
                    Pós-graduação
                  </p>
                  <p className="text-sm font-semibold leading-snug text-[hsl(var(--foreground))]">
                    Especialização em Branding, Comunicação, Marketing e Redes Sociais
                  </p>
                  <p className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">UNINASSAU</p>
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
