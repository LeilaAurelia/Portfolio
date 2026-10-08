import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import TodosProjetos from "./components/TodosProjetos";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { ReactLenis, useLenis } from "lenis/react";

// ── Observer separado que roda a cada troca de rota ──────────────
function RouteObserver() {
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    const scrollTarget = sessionStorage.getItem("scrollTo");
    sessionStorage.removeItem("scrollTo");

    if (location.pathname === "/" && scrollTarget) {
      window.scrollTo(0, 0);
    } else {
      lenis?.scrollTo(0, { immediate: true });
    }

    // Aguarda o React terminar de pintar os novos elementos
    const raf = requestAnimationFrame(() => {
      // 1. Re-inicializa animações de reveal para os novos elementos
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.06, rootMargin: "0px 0px -40px 0px" },
      );

      const els = document.querySelectorAll(
        ".reveal-up, .reveal-left, .reveal-right, .reveal-scale",
      );
      els.forEach((el) => {
        el.classList.remove("visible");
        observer.observe(el);
      });

      // 2. Rola até a seção salva pelo Navbar (se houver)
      if (location.pathname === "/" && scrollTarget) {
        // Pequeno delay para garantir que o layout está pronto
        setTimeout(() => {
          const el = document.getElementById(scrollTarget);
          if (el) lenis?.scrollTo(el, { offset: 0 });
          else lenis?.scrollTo(0, { immediate: true });
        }, 100);
      }

      return () => observer.disconnect();
    });

    return () => cancelAnimationFrame(raf);
  }, [location.pathname, lenis]);

  return null;
}

// ── Barra de progresso de scroll ─────────────────────────────────
function ScrollProgress() {
  useEffect(() => {
    const bar = document.createElement("div");
    bar.className = "scroll-progress";
    document.body.appendChild(bar);

    const update = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total ? scrolled / total : 0;
      bar.style.transform = `scaleX(${pct})`;
      bar.style.width = "100%";
    };

    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      bar.remove();
    };
  }, []);

  return null;
}

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.4, smoothWheel: true }}>
      <Router>
        <RouteObserver />
        <ScrollProgress />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <About />
                <Work />
                <Review />
                <Contact />
                <Footer />
              </main>
            }
          />
          <Route path="/projetos" element={<TodosProjetos />} />
        </Routes>
      </Router>
    </ReactLenis>
  );
}

export default App;
