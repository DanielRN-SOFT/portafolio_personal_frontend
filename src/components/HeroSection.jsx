import { useState, useEffect } from "react";

const ROLES = [
  "Desarrollador de Software",
  "Full Stack Developer",
  "Diseño de Soluciones Digitales",
];

const STACK = [
  "React",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "Tailwind",
  "Docker",
];

const SOCIALS = [
  { label: "github.com/danielramirez", cmd: "open github", href: "#" },
  { label: "linkedin.com/in/danielramirez", cmd: "open linkedin", href: "#" },
  { label: "contacto@danielramirez.dev", cmd: "send mail", href: "#" },
];

// Ajusta esta fecha a cuando empezaste a programar
const CODING_SINCE = new Date("2020-01-01T00:00:00");

const TYPE_SPEED = 55;
const DELETE_SPEED = 30;
const HOLD_TIME = 1600;

const getUptime = () => {
  const diffMs = Date.now() - CODING_SINCE.getTime();
  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
};

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | holding | deleting
  const [clock, setClock] = useState("");
  const [uptime, setUptime] = useState(getUptime());

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

  // Reloj en vivo para el status bar de la terminal
  useEffect(() => {
    const update = () =>
      setClock(
        new Date().toLocaleTimeString("es-CO", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    update();
    const i = setInterval(update, 1000 * 30);
    return () => clearInterval(i);
  }, []);

  // Contador de uptime en vivo, estilo neofetch
  useEffect(() => {
    const i = setInterval(() => setUptime(getUptime()), 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-linear-to-b from-slate-900 via-slate-950 to-slate-950/95 flex items-center justify-center px-4 sm:px-8 lg:px-16">
      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(var(--rot, 0deg)); }
          50% { transform: translateY(-14px) rotate(var(--rot, 0deg)); }
        }
        .scanline-layer::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.05) 50%, transparent);
          animation: scanline 6s linear infinite;
        }
        .float-slow { animation: floatSlow 7s ease-in-out infinite; }
      `}</style>

      {/* Textura de fondo: grid de puntos, muy sutil, tono primary */}
      <div
        className="absolute inset-0 opacity-[0.15] text-primary"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow ambiental detrás de la terminal */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-240 h-240 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      {/* Fragmentos de código flotando de fondo, decorativos */}
      <div
        className="hidden lg:block absolute top-24 left-16 font-mono text-xs text-primary/20 float-slow select-none pointer-events-none"
        style={{ "--rot": "-4deg" }}
      >
        {"const build = () => ship();"}
      </div>
      <div
        className="hidden lg:block absolute bottom-32 left-24 font-mono text-xs text-neutral-content/10 float-slow select-none pointer-events-none"
        style={{ "--rot": "3deg", animationDelay: "1.5s" }}
      >
        {'git commit -m "feat: portfolio"'}
      </div>
      <div
        className="hidden lg:block absolute top-40 right-16 font-mono text-xs text-primary/20 float-slow select-none pointer-events-none"
        style={{ "--rot": "5deg", animationDelay: "0.8s" }}
      >
        {"status: 200 OK"}
      </div>
      <div
        className="hidden lg:block absolute bottom-20 right-28 font-mono text-xs text-neutral-content/10 float-slow select-none pointer-events-none"
        style={{ "--rot": "-3deg", animationDelay: "2.2s" }}
      >
        {"exit(0)"}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-[1.35fr_1fr] gap-8 lg:gap-12 items-stretch">
        {/* Columna principal: ventana de terminal */}
        <div className="flex flex-col justify-center">
          <div className="relative rounded-lg overflow-hidden border border-neutral-content/10 bg-neutral text-neutral-content shadow-2xl shadow-black/40 scanline-layer">
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
            <div className="px-6 py-10 sm:px-10 sm:py-14 text-left font-mono">
              <p className="text-xs sm:text-sm text-neutral-content/40 mb-1 tracking-tight">
                Windows PowerShell
              </p>
              <p className="text-xs sm:text-sm text-neutral-content/40 mb-5 tracking-tight">
                Copyright (C) Microsoft Corporation. Todos los derechos
                reservados.
              </p>

              <p className="text-xs sm:text-sm text-primary mb-3 tracking-tight">
                PS C:\Users\Daniel&gt; whoami
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-content mb-6 tracking-tight">
                Daniel Felipe Ramírez Navarro
              </h1>

              <div className="min-h-7 mb-4 text-base sm:text-lg text-primary font-medium">
                <span className="text-neutral-content/40">&gt;&nbsp;</span>
                {text}
                <span className="inline-block w-[0.55ch] bg-primary animate-pulse ml-0.5 align-middle h-[1em]" />
              </div>

              <p className="mb-8 text-sm sm:text-base text-neutral-content/60 max-w-md leading-relaxed">
                Transformo ideas en experiencias digitales excepcionales usando
                tecnologías modernas y código limpio.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-2">
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

            {/* Barra de estado estilo VS Code */}
            <div className="flex items-center justify-between bg-primary text-primary-content text-[11px] font-mono px-4 py-1.5">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 0a1 1 0 0 1 1 1v4.09A4.001 4.001 0 0 1 8 13a4 4 0 0 1-1-7.91V1a1 1 0 0 1 1-1z"
                      opacity="0.6"
                    />
                    <circle cx="8" cy="8" r="3" />
                  </svg>
                  main
                </span>
                <span>0 ⚠ 0 ⨯</span>
              </div>
              <div className="flex items-center gap-3">
                <span>UTF-8</span>
                <span>PowerShell</span>
                <span>{clock || "--:--"}</span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center lg:text-left text-[11px] text-base-content/30 tracking-wide font-mono">
            scroll para continuar ↓
          </p>
        </div>

        {/* Columna secundaria: disponibilidad, stack, neofetch y contacto */}
        <div className="flex flex-col justify-center gap-4">
          {/* Disponibilidad */}
          <div className="rounded-lg border border-neutral-content/10 bg-neutral/60 backdrop-blur-sm px-5 py-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
              </span>
              <span className="text-sm font-mono text-neutral-content">
                Disponible para proyectos
              </span>
            </div>
            <p className="text-xs font-mono text-neutral-content/50 pl-4.5">
              Respuesta en menos de 24h
            </p>
          </div>

          {/* Stack como package.json */}
          <div className="rounded-lg border border-neutral-content/10 bg-neutral/60 backdrop-blur-sm px-5 py-4 font-mono">
            <p className="text-xs text-neutral-content/40 mb-2">
              // stack.json
            </p>
            <div className="flex flex-wrap gap-2">
              {STACK.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-sm bg-primary/10 text-primary border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Neofetch: uptime de código en vivo, en lugar de cifras estáticas */}
          <div className="rounded-lg border border-neutral-content/10 bg-neutral/60 backdrop-blur-sm px-5 py-4 font-mono">
            <p className="text-xs text-primary mb-3">$ neofetch</p>
            <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 text-xs">
              <span className="text-neutral-content/40">user@daniel</span>
              <span className="text-neutral-content/70">
                portfolio-terminal
              </span>

              <span className="text-neutral-content/40">os</span>
              <span className="text-neutral-content/70">
                Full-Stack Developer
              </span>

              <span className="text-neutral-content/40">shell</span>
              <span className="text-neutral-content/70">React + Node.js</span>

              <span className="text-neutral-content/40">uptime</span>
              <span className="text-primary tabular-nums">
                {uptime.days}d {String(uptime.hours).padStart(2, "0")}h{" "}
                {String(uptime.minutes).padStart(2, "0")}m{" "}
                {String(uptime.seconds).padStart(2, "0")}s
              </span>
            </div>
          </div>

          {/* Contacto como alias de terminal */}
          <div className="rounded-lg border border-neutral-content/10 bg-neutral/60 backdrop-blur-sm px-5 py-4 font-mono">
            <p className="text-xs text-neutral-content/40 mb-2">// contacto</p>
            <div className="flex flex-col gap-1.5">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group flex items-center gap-2 text-xs text-neutral-content/70 hover:text-primary transition-colors"
                >
                  <span className="text-primary/60 group-hover:text-primary">
                    $
                  </span>
                  <span className="text-neutral-content/40 group-hover:text-primary/70">
                    {social.cmd}
                  </span>
                  <span className="truncate">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
