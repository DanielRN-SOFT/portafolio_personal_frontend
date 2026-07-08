import { useState, useEffect } from "react";

const ROLES = [
  "Desarrollador de Software",
  "Full Stack Developer",
  "Diseño de Soluciones Digitales",
];

const TYPE_SPEED = 55;
const DELETE_SPEED = 30;
const HOLD_TIME = 1600;

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | holding | deleting

  useEffect(() => {
    const current = ROLES[roleIndex];

    if (phase === "typing") {
      if (text.length < current.length) {
        const t = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          TYPE_SPEED,
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("holding"), HOLD_TIME);
      return () => clearTimeout(t);
    }

    if (phase === "holding") {
      const t = setTimeout(() => setPhase("deleting"), HOLD_TIME);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (text.length > 0) {
        const t = setTimeout(
          () => setText(current.slice(0, text.length - 1)),
          DELETE_SPEED,
        );
        return () => clearTimeout(t);
      }
      setRoleIndex((i) => (i + 1) % ROLES.length);
      setPhase("typing");
    }
  }, [text, phase, roleIndex]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-linear-to-b from-base-200 via-base-100 to-base-300 flex items-center justify-center px-4 py-20">
      {/* Textura de fondo: grid de puntos, muy sutil, tono primary */}
      <div
        className="absolute inset-0 opacity-[0.15] text-primary"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      {/* Resplandores azules suaves, coherentes con un fondo claro */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-95 w-95 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 h-85 w-85 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 w-full max-w-2xl">
        {/* Ventana de terminal, en clave clara */}
        <div className="rounded-lg border border-base-300 bg-base-100 shadow-xl shadow-primary/5">
          {/* Barra de título */}
          <div className="flex items-center gap-2 border-b border-base-300 bg-base-200/60 px-4 py-3 rounded-t-lg">
            <span className="h-3 w-3 rounded-full bg-base-300" />
            <span className="h-3 w-3 rounded-full bg-base-300" />
            <span className="h-3 w-3 rounded-full bg-primary/70" />
            <span className="ml-3 text-xs text-base-content/40 tracking-wide font-mono">
              ~/portafolio — zsh
            </span>
          </div>

          {/* Cuerpo */}
          <div className="px-6 py-10 sm:px-10 sm:py-14 text-center font-mono">
            <p className="text-xs sm:text-sm text-primary/70 mb-3 tracking-widest">
              $ whoami
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-base-content mb-6 tracking-tight">
              Daniel Felipe Ramírez Navarro
            </h1>

            <div className="min-h-7 mb-8 text-base sm:text-lg text-primary font-medium">
              <span className="text-base-content/30">&gt;&nbsp;</span>
              {text}
              <span className="inline-block w-[0.55ch] bg-primary animate-pulse ml-0.5 align-middle h-[1em]" />
            </div>

            <p className="mb-10 text-sm sm:text-base text-base-content/60 max-w-md mx-auto leading-relaxed">
              Transformo ideas en experiencias digitales excepcionales usando
              tecnologías modernas y código limpio.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <a
                href="#proyectos"
                className="btn btn-primary rounded-full px-6 font-mono font-normal normal-case"
              >
                ./ver-proyectos.sh
              </a>
              <a
                href="#habilidades"
                className="btn btn-outline btn-primary rounded-full px-6 font-mono font-normal normal-case"
              >
                ./ver-habilidades.sh
              </a>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-[11px] text-base-content/30 tracking-wide font-mono">
          scroll para continuar ↓
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
