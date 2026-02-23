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
      "Tive o privilégio de trabalhar com Leila F. durante um ano e dois meses na LT Marketing, onde atuo como CEO...",
    name: "Leandro Telles",
    company: "CEO LT Marketing",
  },
  {
    content:
      "Leila sempre foi muito criativa e disposta, consegue resolver muitas demandas ao mesmo tempo, trabalha bem em equipe...",
    name: "Gabriel Veras",
    company: "Gerente BMouse",
  },
  {
    content:
      "Uma pessoa muito responsável, criativa e proativa, nos ajudou muito em nossa jornada.",
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".slide-track", {
        xPercent: -50,
        repeat: -1,
        duration: 60,
        ease: "linear",
      });
    }, sliderRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="reviews" className="pt-16 lg:pt-24 pb-16 overflow-hidden">
      <div className="px-4 md:px-8 lg:px-16 xl:px-24 max-w-screen-2xl mx-auto">
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-widest text-primary mb-4">
            Depoimentos
          </p>
          <h2 className="text-2xl lg:text-3xl font-serif text-primary mb-4">
            Feedbacks recebidos
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            O que clientes e parceiros dizem sobre o trabalho desenvolvido.
          </p>
        </div>
      </div>

      <div className="overflow-hidden relative w-full" ref={sliderRef}>
        <div className="slide-track flex gap-6 w-max pl-4 md:pl-8 lg:pl-16 xl:pl-24">
          {[...reviews, ...reviews].map(({ content, name, company }, key) => (
            <div
              key={key}
              className="min-w-[320px] md:min-w-[400px] max-w-md"
            >
              <ReviewCard name={name} company={company} content={content} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
