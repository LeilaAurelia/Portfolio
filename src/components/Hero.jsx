import React from "react";

import { ButtonPrimary } from "./Button";

const Hero = () => {
  return (
    <section className="pt-28 lg:pt-36 " id="home">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10 ">
        <div>
          <div className="flex items-center gap-3 ">
            <div className="flex items-center gap-1.5 text-zinc-700 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Disponivel para trabalho
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-2 lg:mb-8 ">
            Jornalista, Copywritter e Especialista em Marketing Digital.
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary
              href="/Curriculo_Leila_Falcao.pdf"
              target="_blank"
              label="Curriculo"
              icon="download"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-violet-400 via-violet-400/40 to-transparent rounded-[60px] overflow-hidden">
            <img
              src="/src/assets/picture/Perfil-Photoroom.png"
              alt=""
              width={656}
              height={800}
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
