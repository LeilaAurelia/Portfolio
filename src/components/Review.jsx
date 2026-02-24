import React, { useRef, useEffect } from "react";
import { ReviewCard } from "./ReviewCard";
import gsap from "gsap";

const reviews = [
  {
    content:
      "Trabalhar com a Leila é ter a tranquilidade de que o conteúdo da sua marca está em ótimas mãos. Ela é uma copywriter que une técnica, criatividade e sensibilidade de um jeito autêntico...",
    name: "Tayná Nascimento",
    company: "Superplayer & Co",
  },
  {
    content:
      "Tive o privilégio de trabalhar com Leila F. durante um ano e dois meses na LT Marketing, onde atuo como CEO. Uma profissional de alto nível que entrega resultados consistentes.",
    name: "Leandro Telles",
    company: "CEO LT Marketing",
  },
  {
    content:
      "Leila sempre foi muito criativa e disposta, consegue resolver muitas demandas ao mesmo tempo, trabalha bem em equipe e entrega resultados excepcionais.",
    name: "Gabriel Veras",
    company: "Gerente BMouse",
  },
  {
    content:
      "Uma pessoa muito responsável, criativa e proativa, nos ajudou muito em nossa jornada de crescimento digital.",
    name: "Márcia Pimentel",
    company: "Memoráveis AL",
  },
  {
    content:
      "Uma redatora talentosa, sempre tem ideias fora da caixa. Ótima parceira de trabalho e dedicada em tudo que se envolve.",
    name: "Thiago Silva",
    company: "Especialista em Marketing",
  },
];

const Review = () => {
  const sliderRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      tweenRef.current = gsap.to(".slide-track", {
        xPercent: -50,
        repeat: -1,
        duration: 55,
        ease: "linear",
      });
    }, sliderRef);

    return () => ctx.revert();
  }, []);

  const pause = () => tweenRef.current?.pause();
  const resume = () => tweenRef.current?.resume();

  return (
    <section id="reviews" className="pt-24 lg:pt-36 pb-20">
      <div className="px-4 md:px-8 lg:px-16 xl:px-24 max-w-screen-2xl mx-auto mb-14">
        {/* Section header */}
        <div className="reveal-up flex items-center gap-3 mb-16">
          <span className="w-8 h-px bg-[hsl(var(--accent))]" />
          <p className="section-label">Depoimentos</p>
          <span className="flex-1 h-px bg-[hsl(var(--border))]" />
        </div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div className="reveal-left max-w-lg mb-4 lg:mb-0">
            <h2 className="font-serif-display text-[clamp(1.9rem,4vw,3rem)] leading-tight text-[hsl(var(--foreground))] mb-4">
              Feedbacks recebidos
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] text-[15px] leading-relaxed">
              O que clientes e parceiros dizem sobre o trabalho desenvolvido.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee — overflow-x hidden mas padding-bottom garante que sombras/bordas não sejam cortadas */}
      <div
        className="relative w-full"
        style={{
          overflowX: "hidden",
          overflowY: "visible",
          paddingBottom: "12px",
        }}
        ref={sliderRef}
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, hsl(var(--background)), transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, hsl(var(--background)), transparent)",
          }}
        />

        <div className="slide-track flex gap-5 w-max pl-4 md:pl-8 lg:pl-16 pr-4">
          {[...reviews, ...reviews].map(({ content, name, company }, key) => (
            <div key={key} className="min-w-[340px] md:min-w-[420px] max-w-md">
              <ReviewCard name={name} company={company} content={content} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
