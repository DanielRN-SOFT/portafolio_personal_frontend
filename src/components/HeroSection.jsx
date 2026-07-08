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
    <div className="relative min-h-screen w-full overflow-hidden bg-linear-to-b from-base-200 via-base-100 to-base-200 flex items-center justify-center px-4 py-20">
      {/* Textura de fondo: grid de puntos, muy sutil, tono primary */}
      <div
        className="absolute inset-0 opacity-[0.15] text-primary"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10 w-full max-w-2xl">
        {/* Ventana estilo Windows Terminal, con tokens de daisyUI */}
        <div className="rounded-lg overflow-hidden border border-neutral-content/10 bg-neutral text-neutral-content shadow-2xl shadow-black/40">
          {/* Fila de pestañas, estilo Fluent */}
          <div className="flex items-stretch bg-neutral-content/5 pt-1.5 px-1.5 gap-1">
            <div className="flex items-center gap-2 rounded-t-md bg-neutral px-3 py-1.5 border-t border-x border-neutral-content/10">
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                className="shrink-0 text-primary"
                aria-hidden="true"
              >
                <rect
                  x="1"
                  y="1"
                  width="14"
                  height="14"
                  rx="1.5"
                  className="fill-current"
                />
                <path
                  d="M4 5L6.5 8L4 11"
                  stroke="currentColor"
                  className="text-neutral"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 11H12"
                  stroke="currentColor"
                  className="text-neutral"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-xs font-sans tracking-tight text-neutral-content/90">
                Windows PowerShell
              </span>
              <span className="btn btn-ghost btn-xs btn-circle text-neutral-content/50 hover:text-neutral-content">
                ×
              </span>
            </div>
            <button
              type="button"
              tabIndex={-1}
              aria-hidden="true"
              className="btn btn-ghost btn-sm text-neutral-content/50"
            >
              +
            </button>

            {/* Controles de ventana */}
            <div className="ml-auto flex items-stretch">
              <button
                type="button"
                tabIndex={-1}
                aria-hidden="true"
                className="btn btn-ghost btn-sm rounded-none text-neutral-content/70"
              >
                &#8211;
              </button>
              <button
                type="button"
                tabIndex={-1}
                aria-hidden="true"
                className="btn btn-ghost btn-sm rounded-none text-neutral-content/70 text-xs"
              >
                &#9633;
              </button>
              <button
                type="button"
                tabIndex={-1}
                aria-hidden="true"
                className="btn btn-ghost btn-sm rounded-none text-neutral-content/70 hover:btn-error"
              >
                &#10005;
              </button>
            </div>
          </div>

          {/* Cuerpo de la terminal */}
          <div className="px-6 py-10 sm:px-10 sm:py-14 text-center font-mono">
            <p className="text-xs sm:text-sm text-primary mb-3 tracking-tight text-left sm:text-center">
              PS C:\Users\Daniel&gt; whoami
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-content mb-6 tracking-tight">
              Daniel Felipe Ramírez Navarro
            </h1>

            <div className="min-h-7 mb-8 text-base sm:text-lg text-primary font-medium">
              <span className="text-neutral-content/40">&gt;&nbsp;</span>
              {text}
              <span className="inline-block w-[0.55ch] bg-primary animate-pulse ml-0.5 align-middle h-[1em]" />
            </div>

            <p className="mb-10 text-sm sm:text-base text-neutral-content/60 max-w-md mx-auto leading-relaxed">
              Transformo ideas en experiencias digitales excepcionales usando
              tecnologías modernas y código limpio.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <a
                href="#proyectos"
                className="btn btn-primary rounded-sm px-6 font-mono font-normal normal-case"
              >
                ./ver-proyectos.sh
              </a>
              <a
                href="#habilidades"
                className="btn btn-outline btn-primary rounded-sm px-6 font-mono font-normal normal-case"
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
