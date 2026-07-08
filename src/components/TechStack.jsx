import { useState, useEffect } from "react";

/**
 * Barra de título estilo Windows Terminal / Windows 11.
 * Mismo lenguaje visual que el resto del sitio (card de proyectos,
 * historial y Titulo), en su variante para fondos oscuros.
 */
const WinTitleBar = ({ label }) => (
  <div className="flex items-center gap-0 pl-3 pr-0 py-0 bg-white/10 rounded-t-md">
    <span className="mr-1.5 h-2 w-2 rounded-xs bg-primary" />
    <span className="flex-1 truncate py-1.5 text-[10px] sm:text-xs font-mono text-white/50 text-left">
      {label}
    </span>

    <span className="flex items-stretch">
      <span className="flex items-center justify-center w-7 h-6 text-white/50 hover:bg-white/15 hover:text-white/90 transition-colors">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <line
            x1="1"
            y1="5"
            x2="9"
            y2="5"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </span>
      <span className="flex items-center justify-center w-7 h-6 text-white/50 hover:bg-white/15 hover:text-white/90 transition-colors">
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
          <rect
            x="0.5"
            y="0.5"
            width="8"
            height="8"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </span>
      <span className="flex items-center justify-center w-7 h-6 text-white/50 hover:bg-[#c42b1c] hover:text-white transition-colors rounded-tr-md">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <line
            x1="0.8"
            y1="0.8"
            x2="9.2"
            y2="9.2"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="9.2"
            y1="0.8"
            x2="0.8"
            y2="9.2"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </span>
    </span>
  </div>
);

const TechStack = () => {
  const [stack, setStack] = useState([]);

  useEffect(() => {
    const obtenerStack = async () => {
      try {
        const request = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/stack`,
        );
        const response = await request.json();
        setStack(response.resultados);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerStack();
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-6">
      {/* Ventana estilo Windows Terminal que envuelve todo el stack */}
      <div className="rounded-md border border-white/15 bg-white/5 overflow-hidden shadow-lg">
        <WinTitleBar label="~/stack-tecnologico" />

        {/* Cuerpo tipo consola */}
        <div className="px-4 sm:px-6 py-6">
          <p className="font-mono text-xs sm:text-sm text-white/40 mb-5 text-left">
            <span className="text-primary">$</span> ls ./tecnologias
            --con-iconos
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {stack.map((tech) => (
              <a
                key={tech.id}
                href={tech.url_documentacion}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="flex flex-col items-center gap-2 p-4 rounded-md border border-white/10 bg-white/3 transition-all duration-200 hover:border-primary/40 hover:bg-white/10 hover:-translate-y-0.5 cursor-pointer">
                  <img
                    src={tech.icono}
                    alt={tech.nombre}
                    className="w-10 h-10 opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <span className="font-mono text-[11px] sm:text-xs text-white/60 group-hover:text-white/90 transition-colors truncate max-w-full">
                    <span className="text-primary/50">--</span> {tech.nombre}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
