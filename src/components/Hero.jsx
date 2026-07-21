import React, { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef(null);

  // Parallax subtle on mouse move
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouse = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;

      const orbs = hero.querySelectorAll(".hero-orb");
      orbs.forEach((orb, i) => {
        const factor = i % 2 === 0 ? 1 : -1;
        orb.style.transform = `translate(${x * factor * 0.8}px, ${y * factor * 0.8}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      id="home"
    >
      {/* Ambient orbs */}
      <div
        className="hero-orb"
        style={{
          width: "560px",
          height: "560px",
          background:
            "radial-gradient(circle, hsl(265 60% 42% / 0.12), transparent 70%)",
          top: "-100px",
          right: "-80px",
          transition: "transform 0.8s ease-out",
        }}
      />
      <div
        className="hero-orb"
        style={{
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, hsl(265 60% 42% / 0.07), transparent 70%)",
          bottom: "-60px",
          left: "10%",
          transition: "transform 0.8s ease-out",
        }}
      />

      <div className="px-4 md:px-8 lg:px-16 xl:px-24 max-w-screen-2xl mx-auto w-full relative z-10">
        <div className="lg:grid lg:grid-cols-[1fr_420px] lg:gap-20 xl:gap-28 items-center">
          {/* TEXT */}
          <div className="max-w-2xl">
            <div className="reveal-up flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-[hsl(var(--accent))]" />
              <p className="section-label">
                Copywriting & Marketing Estratégico
              </p>
            </div>

            <h1 className="reveal-up delay-100 font-serif-display text-[clamp(2.4rem,6vw,4.2rem)] leading-[1.08] text-[hsl(var(--foreground))] mb-8">
              Transformo ideias em
              <br />
              <em
                className="not-italic"
                style={{ color: "hsl(var(--accent))" }}
              >
                posicionamentos
              </em>
              <br />
              que vendem.
            </h1>

            <p className="reveal-up delay-200 text-[hsl(var(--muted-foreground))] text-lg leading-relaxed mb-10 max-w-lg">
              Estratégia, narrativa e marketing digital para marcas que querem
              autoridade, conexão e crescimento sustentável.
            </p>

            <div className="reveal-up delay-300 flex flex-wrap gap-4">
              <a
                href="/assets/curriculo/Curriculo_Leila_Falcão.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 h-12 px-7 rounded-full 
                  bg-[hsl(var(--foreground))] text-[hsl(var(--background))]
                  text-sm font-medium
                  hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
              >
                Currículo
                <span className="material-symbols-rounded text-[16px] group-hover:translate-x-0.5 transition-transform">
                  download
                </span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-full
                  border border-[hsl(var(--foreground)/0.2)]
                  text-sm font-medium text-[hsl(var(--foreground))]
                  hover:border-[hsl(var(--foreground)/0.5)] hover:bg-[hsl(var(--foreground)/0.04)]
                  active:scale-[0.98] transition-all duration-300"
              >
                Fale comigo
              </a>
            </div>

            {/* Stats inline */}
            <div className="reveal-up delay-400 flex items-center gap-10 mt-14 pt-10 border-t border-[hsl(var(--border))]">
              {[
                { n: "+6", label: "anos de experiência" },
                { n: "+40", label: "projetos concluídos" },
                { n: "100%", label: "foco em resultado" },
              ].map(({ n, label }, i) => (
                <div key={i}>
                  <p className="font-serif-display text-3xl text-[hsl(var(--foreground))]">
                    {n}
                  </p>
                  <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <div className="hidden lg:block reveal-scale delay-200">
            <div className="relative">
              {/* Decorative frame */}
              <div
                className="absolute inset-0 rounded-3xl -translate-x-3 -translate-y-3"
                style={{
                  background: "hsl(var(--accent-light))",
                  border: "1px solid hsl(var(--accent) / 0.2)",
                }}
              />
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/picture/Screenshot_1.png"
                  alt="Copywriting editorial"
                  className="w-full h-[520px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Overlay badge */}
                <div
                  className="absolute bottom-6 left-6 right-6 rounded-2xl px-5 py-4 flex items-center justify-between gap-4"
                  style={{
                    background: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid hsl(var(--border))",
                  }}
                >
                  <div>
                    <p className="text-xs text-[hsl(var(--muted-foreground))]">
                      Especialista em
                    </p>
                    <p className="text-sm font-semibold text-[hsl(var(--foreground))]">
                      Copy Estratégica & Branding
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[hsl(var(--accent))] grid place-items-center text-white shrink-0">
                    <span className="material-symbols-rounded text-[15px]">
                      verified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default Hero;
