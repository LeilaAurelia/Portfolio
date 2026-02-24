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
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/leila-f-270a4813a/",
          external: true,
        },
        {
          label: "Instagram",
          href: "https://www.instagram.com/_leilafalcao/",
          external: true,
        },
      ],
    },
  ];

  return (
    <footer
      className="pt-16 pb-10"
      style={{
        background: "hsl(var(--foreground))",
        color: "hsl(var(--background))",
      }}
    >
      <div className="px-4 md:px-8 lg:px-16 xl:px-24 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-10 lg:gap-16 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <h3 className="font-serif-display text-2xl text-white mb-4">
              Leila Falcão
            </h3>
            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Copywriter e Estrategista de Marketing Digital. Transformando
              ideias em comunicação que vende.
            </p>
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: "hsl(142 70% 50%)",
                  boxShadow: "0 0 8px hsl(142 70% 50%)",
                }}
              />
              <span
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Disponível para novos projetos
              </span>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map(({ title, links }, index) => (
            <div key={index}>
              <h4
                className="text-[10px] font-medium mb-5 uppercase tracking-[0.18em]"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map(({ label, href, external }, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                      onMouseEnter={(e) => (e.target.style.color = "white")}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(255,255,255,0.55)")
                      }
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            © {currentYear} Leila Falcão. Todos os direitos reservados.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            Maceió, Alagoas — Brasil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
