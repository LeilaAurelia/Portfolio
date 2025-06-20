import React, { useRef, useEffect } from "react";
import { ReviewCard } from "./ReviewCard";
import gsap from "gsap";

const reviews = [
  {
    content:
      "Trabalhar com a Leila é ter a tranquilidade de que o conteúdo da sua marca está em ótimas mãos. Ela é uma copywriter que une técnica, criatividade e sensibilidade de um jeito autêntico...",
    name: "- Tayná Nascimento",
    company: "Superplayer & Co",
  },
  {
    content:
      "Tive o privilégio de trabalhar com Leila F. durante um ano e dois meses na LT Marketing, onde atuo como CEO...",
    name: "- Leandro Telles",
    company: "CEO LT Marketing",
  },
  {
    content:
      "Leila sempre foi muito criativa e disposta, consegue resolver muitas demandas ao mesmo tempo, trabalha bem em equipe...",
    name: "- Gabriel Veras",
    company: "Gerente BMouse",
  },
  {
    content:
      "Uma pessoa muito responsável, criativa e proativa, nos ajudou muito em nossa jornada.",
    name: "- Márcia Pimentel",
    company: "Memóraveis AL",
  },
  {
    content:
      "Uma redatora talentosa, sempre tem ideias fora da caixa. Ótima parceira de trabalho e dedicada em tudo que se envolve.",
    name: "- Thiago Silva",
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
        duration: 60, // ← Mais devagar aqui
        ease: "linear",
      });
    }, sliderRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8">Feedbacks recebidos</h2>

        <div ref={sliderRef} className="overflow-hidden relative w-full">
          <div className="slide-track flex gap-6 w-max">
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
      </div>
    </section>
  );
};

export default Review;
