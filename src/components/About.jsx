import React from "react";

const About = () => {
  return (
    <section id="about" className="pt-24 lg:pt-36 pb-16">
      <div className="px-4 md:px-8 lg:px-16 xl:px-24 max-w-screen-2xl mx-auto">
        {/* Section header */}
        <div className="reveal-up flex items-center gap-3 mb-16">
          <span className="w-8 h-px bg-[hsl(var(--accent))]" />
          <p className="section-label">Quem sou</p>
          <span className="flex-1 h-px bg-[hsl(var(--border))]" />
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-20 xl:gap-28 items-center">
          {/* IMAGE */}
          <div className="reveal-left mb-12 lg:mb-0">
            <div className="relative max-w-[480px]">
              {/* Background decoration */}
              <div
                className="absolute -inset-4 rounded-[2rem] opacity-60"
                style={{
                  background: "hsl(var(--accent-light))",
                }}
              />
              {/* Dot grid decoration */}
              <div
                className="absolute -right-8 -bottom-8 w-32 h-32 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(hsl(var(--accent)) 1px, transparent 1px)",
                  backgroundSize: "8px 8px",
                }}
              />
              {/* Image card */}
              <div className="relative bg-white p-3 rounded-[1.75rem] shadow-xl">
                <img
                  src="/assets/picture/Perfil-Photoroom.png"
                  alt="Leila Aurelia Falcão de Lima"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              {/* Floating badge */}
              <div
                className="absolute -right-4 top-10 rounded-2xl px-4 py-3 shadow-lg"
                style={{
                  background: "white",
                  border: "1px solid hsl(var(--border))",
                }}
              >
                <p className="text-[10px] text-[hsl(var(--muted-foreground))] mb-0.5">
                  Formada em
                </p>
                <p className="text-xs font-semibold text-[hsl(var(--foreground))]">
                  Jornalismo · UFAL
                </p>
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="max-w-xl">
            <div className="reveal-up">
              <h2 className="font-serif-display text-[clamp(1.9rem,4vw,3rem)] leading-tight text-[hsl(var(--foreground))] mb-6">
                Leila Aurelia
                <br />
                <span style={{ color: "hsl(var(--accent))" }}>
                  Falcão de Lima
                </span>
              </h2>
            </div>

            <div className="reveal-up delay-100 space-y-4 text-[hsl(var(--muted-foreground))] leading-relaxed mb-10 text-[15px]">
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

            {/* Stats grid */}
            <div className="reveal-up delay-200 grid grid-cols-2 gap-4 mb-10">
              {[
                { n: "+6", label: "Anos de experiência", icon: "schedule" },
                {
                  n: "+40",
                  label: "Projetos concluídos",
                  icon: "check_circle",
                },
              ].map(({ n, label, icon }, i) => (
                <div key={i} className="card-base p-6 rounded-2xl">
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

            {/* Tags */}
            <div className="reveal-up delay-300 flex flex-wrap gap-2">
              {[
                "SEO",
                "Copywriting",
                "Analytics",
                "CVC",
                "Conversion",
                "Superplayer",
                "Marketing",
              ].map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
