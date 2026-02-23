import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navegação",
      links: [
        { label: "Início", href: "#home" },
        { label: "Sobre", href: "#about" },
        { label: "Habilidades", href: "#skills" },
        { label: "Portfólio", href: "#work" },
        { label: "Contato", href: "#contact" },
      ],
    },
    {
      title: "Social",
      links: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/leila-f-270a4813a/", external: true },
        { label: "Instagram", href: "https://www.instagram.com/_leilafalcao/", external: true },
      ],
    },
  ];

  return (
    <footer className="border-t border-primary/10 bg-white">
      <div className="px-4 md:px-8 lg:px-16 xl:px-24 max-w-screen-2xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Coluna 1: Branding */}
          <div>
            <h3 className="text-xl font-serif text-primary mb-3">
              Leila Falcão
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Copywriter e Estrategista de Marketing Digital. Transformando ideias em comunicação que vende.
            </p>
            <p className="text-xs text-muted-foreground">
              Maceió, Alagoas - Brasil
            </p>
          </div>

          {/* Colunas 2 e 3: Links */}
          {footerLinks.map(({ title, links }, index) => (
            <div key={index}>
              <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map(({ label, href, external }, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-primary/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Leila Falcão. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground">
              Desenvolvido com dedicação e estratégia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
