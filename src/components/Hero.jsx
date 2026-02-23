import React from "react";

const Hero = () => {
  return (
    <section
      className="pt-32 pb-16 min-h-screen flex items-center"
      id="home"
    >
      <div className="px-4 md:px-8 lg:px-16 xl:px-24 max-w-screen-2xl mx-auto w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-24 items-center">
          
          {/* TEXTO */}
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-widest text-primary mb-4">
              Copywriting & Marketing Estratégico
            </p>

            <h2 className="text-2xl lg:text-4xl xl:text-5xl font-serif leading-tight mb-6">
              Transformo ideias em posicionamentos
              <span className="text-primary"> que vendem.</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Estratégia, narrativa e marketing digital para marcas que querem
              autoridade, conexão e crescimento sustentável.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/assets/curriculo/Curriculo_Leila.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-8 rounded-md inline-flex items-center justify-center
                  bg-primary text-primary-foreground
                  hover:bg-primary/90 hover:scale-105 transition-all duration-300 font-medium"
              >
                Currículo
              </a>

              <a
                href="#contact"
                className="h-11 px-8 rounded-md inline-flex items-center justify-center
                  border border-primary/30
                  text-foreground
                  hover:bg-primary/5 hover:border-primary/50 hover:scale-105 transition-all duration-300 font-medium"
              >
                Fale comigo
              </a>
            </div>
          </div>

          {/* IMAGEM */}
         <div className="hidden lg:flex justify-end -translate-y-8">
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg w-[420px]">
    <img
      src="/assets/picture/Screenshot_1.png"
      alt="Copywriting editorial"
      className="w-full h-full object-cover grayscale"
    />
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
