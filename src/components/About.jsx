import React from "react";

const About = () => {
  return (
    <section id="about" className="pt-16 lg:pt-24">
      <div className="px-4 md:px-8 lg:px-16 xl:px-24 max-w-screen-2xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-24 items-stretch">

          {/* IMAGEM AJUSTADA */}
          <div className="flex justify-start">
            <div className="relative w-full max-w-[520px]">
              
              {/* Sombra de fundo mais próxima */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-black/5 blur-xl"></div>

              {/* Moldura branca menor */}
              <div className="relative bg-white p-3 rounded-3xl shadow-sm">
                <img
                  src="/assets/picture/Perfil-Photoroom.png"
                  alt="Leila Aurelia Falcão de Lima"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

            </div>
          </div>

          {/* TEXTO */}
          <div className="max-w-xl flex flex-col justify-center">
            <p className="text-xs uppercase tracking-widest text-primary mb-4">
              Quem sou
            </p>

            <h3 className="text-2xl lg:text-3xl font-serif text-primary mb-6">
              Leila Aurelia Falcão de Lima
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Sou nordestina, formada em Jornalismo pela Universidade Federal de Alagoas, e atuo como Copywriter Pleno com especialização em Marketing Digital, Branding e Redes Sociais.
              </p>

              <p>
                Trabalho com SEO, copywriting, análise de métricas, campanhas de mídia paga e Inbound Marketing, criando estratégias que conectam marcas e pessoas — gerando autoridade e vendas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="border border-primary/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">+6</div>
                <p className="text-sm text-muted-foreground leading-tight">
                  Anos de experiência
                </p>
              </div>

              <div className="border border-primary/20 rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">+40</div>
                <p className="text-sm text-muted-foreground leading-tight">
                  Projetos concluídos
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
