const slugify = (text = "") =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/**
 * Barra de título estilo Windows Terminal / Windows 11.
 * Mismo lenguaje visual que las demás secciones (card de proyectos,
 * historial de línea de tiempo), con variante para fondos oscuros.
 */
const WinTitleBar = ({ label, oscuro }) => {
  const barBg = oscuro ? "bg-white/10" : "bg-black/20 backdrop-blur-sm";
  const labelCol = oscuro ? "text-white/50" : "text-base-content/40";
  const iconIdle = oscuro ? "text-white/50" : "text-base-content/40";
  const iconHover = oscuro
    ? "hover:bg-white/15 hover:text-white/90"
    : "hover:bg-base-content/10 hover:text-base-content/80";

  return (
    <div
      className={`flex items-center gap-0 pl-3 pr-0 py-0 rounded-t-md ${barBg}`}
    >
      <span className="mr-1.5 h-2 w-2 rounded-[2px] bg-primary" />
      <span
        className={`flex-1 truncate py-1.5 text-[10px] font-mono ${labelCol}`}
      >
        {label}
      </span>

      <span className="flex items-stretch">
        <span
          className={`flex items-center justify-center w-7 h-6 transition-colors ${iconIdle} ${iconHover}`}
        >
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
        <span
          className={`flex items-center justify-center w-7 h-6 transition-colors ${iconIdle} ${iconHover}`}
        >
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
        <span
          className={`flex items-center justify-center w-7 h-6 transition-colors rounded-tr-md ${iconIdle} hover:bg-[#c42b1c] hover:text-white`}
        >
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
};

const Titulo = ({ subtitulo, titulo, span, colorTxt, oscuro = false }) => {
  const slug = slugify(subtitulo || titulo || "seccion");

  const panelBg = oscuro ? "bg-white/5" : "bg-base-300/40";
  const panelBorder = oscuro ? "border-white/15" : "border-primary/15";
  const promptCol = oscuro ? "text-primary" : "text-primary/40";
  const subtituloCol = oscuro
    ? "text-white font-bold"
    : "text-primary font-semibold";
  const cursorCol = oscuro ? "bg-primary" : "bg-primary/60";

  return (
    <div className="text-center">
      {/* Ventana estilo Windows Terminal, reemplaza el eyebrow de líneas */}
      <div
        className={`inline-block mb-4 rounded-md border overflow-hidden shadow-sm ${panelBg} ${panelBorder}`}
      >
        <WinTitleBar label={`~/${slug}.sh`} oscuro={oscuro} />
        <div className="px-4 py-2 text-left">
          <p className="font-mono text-xs sm:text-sm tracking-tight">
            <span className={promptCol}>$</span>{" "}
            <span
              className={`text-xs tracking-widest uppercase ${subtituloCol}`}
            >
              {subtitulo}
            </span>
            <span
              className={`inline-block w-[0.5ch] h-[1em] animate-pulse ml-1 align-middle ${cursorCol}`}
            />
          </p>
        </div>
      </div>

      <h2 className={`text-5xl font-bold font-mono ${colorTxt}`}>
        {titulo} <span className="text-primary">{span}</span>
      </h2>
    </div>
  );
};

export default Titulo;
