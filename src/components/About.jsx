import React from "react";

const aboutItems = [
  {
    label: "Projetos concluídos",
    number: 20,
  },
  {
    label: "Anos de experiência",
    number: 6,
  },
];

const About = () => {
  return (
    <section id="about"  className="section">
      <div className="container">
        <div className="p-7 rounded-2xl md:p-12">
          <p className="mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Sou nordestina e apaixonada por contar histórias. Formada pela
            Universidade Federal de Alagoas, tenho uma carreira que combina
            Jornalismo, Copywriting pleno e especialização em Marketing Digital,
            Branding e Redes Sociais pela Uninassau. 
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-violet-700 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-950">{label}</p>
              </div>
            ))}
          </div>
        </div >

        {/* Seção "Sobre mim" separada com título e descrição */}
        <div  className="mt-20 rounded-2xl">
          <h2  className=" headline-2 text-3xl md:text-3xl text-center mb-8 ">
            Um pouco mais sobre mim
          </h2>
          <p className="mb-4 md:mb-8 md:text-xl max-w text-justify">
            Meu trabalho vai além das palavras. Como jornalista, investigo e
            relato com precisão e profundidade. Como copywriter, crio narrativas
            persuasivas que ressoam com o público. Como especialista em
            marketing, desenvolvo estratégias que conectam marcas e pessoas de
            maneira autêntica e eficaz. Minha expertise inclui SEO e otimização
            de conteúdo, copywriting persuasivo, análise de dados e métricas de
            marketing, planejamento e execução de campanhas de mídia paga, redes
            sociais, personas e jornada do cliente e produção de gerenciamento
            de webinars e eventos online.
            <br />
            <br />
            Além de gestão clientes, comunicação corporativa, e estratégias de
            Inbound Marketing. Consigo utilizar diversas ferramentas e
            plataformas, como Trello, Canva, Etus, pacote Office, RD Station,
            HubSpot, ClickUp, Operand, Meta Business, mLabs, Google Analytics,
            Typeform, Photoshop e outras. E então, vamos juntos transformar
            ideias em histórias que emocionam, informam e vendem?
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
