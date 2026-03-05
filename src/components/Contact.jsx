import React, { useState } from "react";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/leila-f-270a4813a/",
    label: "LinkedIn",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.75 3C4.24 3 3 4.24 3 5.75V18.25C3 19.76 4.24 21 5.75 21H18.25C19.76 21 21 19.76 21 18.25V5.75C21 4.24 19.76 3 18.25 3H5.75ZM7.75 6.5C8.44 6.5 9 7.06 9 7.75C9 8.44 8.44 9 7.75 9C7.06 9 6.5 8.44 6.5 7.75C6.5 7.06 7.06 6.5 7.75 6.5ZM7 10H8.5V17.5H7V10ZM10.5 10H12V10.77C12.5 10.29 13.2 10 14 10C15.65 10 17 11.35 17 13V17.5H15.5V13.25C15.5 12.56 14.94 12 14.25 12C13.56 12 13 12.56 13 13.25V17.5H11.5V10.5C11.5 10.22 11.28 10 11 10H10.5V10Z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/_leilafalcao/",
    label: "Instagram",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.75 2.5C5.58 2.5 3 5.08 3 8.25V15.75C3 18.92 5.58 21.5 8.75 21.5H16.25C19.42 21.5 22 18.92 22 15.75V8.25C22 5.08 19.42 2.5 16.25 2.5H8.75ZM17.5 6C18.05 6 18.5 6.45 18.5 7C18.5 7.55 18.05 8 17.5 8C16.95 8 16.5 7.55 16.5 7C16.5 6.45 16.95 6 17.5 6ZM12.5 7C15.26 7 17.5 9.25 17.5 12C17.5 14.75 15.26 17 12.5 17C9.75 17 7.5 14.75 7.5 12C7.5 9.25 9.75 7 12.5 7ZM12.5 8.5C10.56 8.5 9 10.06 9 12C9 13.94 10.56 15.5 12.5 15.5C14.44 15.5 16 13.94 16 12C16 10.06 14.44 8.5 12.5 8.5Z" />
      </svg>
    ),
  },
];

const Contact = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("");
    const formData = new FormData(event.target);
    formData.append("access_key", "9ec6fedb-df29-4820-87fa-d222d2d45962");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setResult("success");
        event.target.reset();
      } else {
        setResult("error");
      }
    } catch {
      setResult("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="pt-24 lg:pt-36 pb-24">
      <div className="px-4 md:px-8 lg:px-16 xl:px-24 max-w-screen-2xl mx-auto">
        {/* Section header */}
        <div className="reveal-up flex items-center gap-3 mb-16">
          <span className="w-8 h-px bg-[hsl(var(--accent))]" />
          <p className="section-label">Contato</p>
          <span className="flex-1 h-px bg-[hsl(var(--border))]" />
        </div>

        <div className="lg:grid lg:grid-cols-[1fr_480px] lg:gap-20 xl:gap-28 items-start">
          {/* LEFT */}
          <div className="mb-12 lg:mb-0 reveal-left">
            <h2 className="font-serif-display text-[clamp(2rem,5vw,3.5rem)] leading-tight text-[hsl(var(--foreground))] mb-6">
              Vamos criar algo
              <br />
              <span style={{ color: "hsl(var(--accent))" }}>
                incrível juntos?
              </span>
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] text-[15px] leading-relaxed mb-10 max-w-md">
              Transformo ideias em histórias que emocionam, informam e vendem.
              Entre em contato e vamos conversar sobre o seu projeto.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 mb-10">
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex items-center gap-2.5 h-11 pl-4 pr-5 rounded-full
                    border border-[hsl(var(--border))]
                    text-[hsl(var(--muted-foreground))]
                    hover:border-[hsl(var(--accent)/0.4)]
                    hover:text-[hsl(var(--accent))]
                    hover:bg-[hsl(var(--accent-light))]
                    transition-all duration-300"
                >
                  {icon}
                  <span className="text-sm font-medium">{label}</span>
                </a>
              ))}
            </div>

            {/* Info card */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "hsl(var(--accent-light))",
                border: "1px solid hsl(var(--accent) / 0.15)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl grid place-items-center shrink-0"
                  style={{ background: "hsl(var(--accent))", color: "white" }}
                >
                  <span className="material-symbols-rounded text-[18px]">
                    schedule
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[hsl(var(--foreground))] mb-1">
                    Resposta em até 24h
                  </p>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    Segunda a sexta, 9h às 18h (Horário de Brasília)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="reveal-right">
            <form
              onSubmit={onSubmit}
              className="card-base rounded-2xl p-7 lg:p-8"
            >
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-[hsl(var(--foreground))] mb-2 uppercase tracking-wide"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    required
                    placeholder="Seu nome"
                    className="text-field"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-[hsl(var(--foreground))] mb-2 uppercase tracking-wide"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    placeholder="seu@email.com"
                    className="text-field"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-[hsl(var(--foreground))] mb-2 uppercase tracking-wide"
                >
                  Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Olá! Conte-me sobre seu projeto..."
                  required
                  rows="5"
                  className="text-field resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 rounded-xl inline-flex items-center justify-center gap-2
                  bg-[hsl(var(--foreground))] text-[hsl(var(--background))]
                  text-sm font-medium
                  hover:opacity-80 active:scale-[0.99]
                  transition-all duration-300
                  disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z"
                      />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensagem
                    <span className="material-symbols-rounded text-[16px]">
                      send
                    </span>
                  </>
                )}
              </button>

              {result === "success" && (
                <div
                  className="mt-4 flex items-center gap-2 rounded-xl px-4 py-3"
                  style={{
                    background: "hsl(142 70% 45% / 0.1)",
                    border: "1px solid hsl(142 70% 45% / 0.2)",
                  }}
                >
                  <span className="material-symbols-rounded text-green-600 text-[16px]">
                    check_circle
                  </span>
                  <p className="text-sm text-green-700 font-medium">
                    Mensagem enviada com sucesso!
                  </p>
                </div>
              )}
              {result === "error" && (
                <div
                  className="mt-4 flex items-center gap-2 rounded-xl px-4 py-3"
                  style={{
                    background: "hsl(0 70% 45% / 0.1)",
                    border: "1px solid hsl(0 70% 45% / 0.2)",
                  }}
                >
                  <span className="material-symbols-rounded text-red-600 text-[16px]">
                    error
                  </span>
                  <p className="text-sm text-red-700 font-medium">
                    Erro ao enviar. Tente novamente.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
