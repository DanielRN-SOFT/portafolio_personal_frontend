import { useState } from "react";

const slugify = (text = "") =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");

const TechFlag = ({ children }) => (
  <span className="inline-flex items-center gap-1 text-xs font-mono font-medium px-2.5 py-1 rounded-md border border-primary/25 bg-primary/5 text-primary/90 transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
    <span className="text-primary/40">--</span>
    {children}
  </span>
);

/**
 * Barra de título estilo Windows Terminal / Windows 11.
 * variant="dark"  -> para usar sobre la imagen (fondo oscuro)
 * variant="light" -> para usar sobre el panel de credenciales (fondo claro)
 */
const WinTitleBar = ({ label, variant = "dark" }) => {
  const isDark = variant === "dark";

  const barBg = isDark ? "bg-black/30 backdrop-blur-sm" : "";
  const borderCol = isDark ? "" : "border-b border-primary/10";
  const labelCol = isDark
    ? "text-white/40 group-hover:text-white/70"
    : "text-base-content/40";
  const iconIdle = isDark ? "text-white/50" : "text-base-content/40";
  const iconHover = isDark
    ? "hover:bg-white/10 hover:text-white/90"
    : "hover:bg-base-content/10 hover:text-base-content/80";

  return (
    <div
      className={`flex items-center gap-0 pl-3 pr-0 py-0 ${barBg} ${borderCol}`}
    >
      {/* Icono + título, como la barra de una ventana de Windows Terminal */}
      <span
        className={`mr-1.5 h-2 w-2 rounded-xs ${
          isDark ? "bg-primary/70" : "bg-primary/50"
        }`}
      />
      <span
        className={`flex-1 truncate py-1.5 text-[10px] font-mono transition-colors ${labelCol}`}
      >
        {label}
      </span>

      {/* Controles: minimizar / maximizar / cerrar, cuadrados como Windows 11 */}
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
        <span className="flex items-center justify-center w-7 h-6 transition-colors text-inherit hover:bg-[#c42b1c] hover:text-white group/close">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <line
              x1="0.8"
              y1="0.8"
              x2="9.2"
              y2="9.2"
              stroke="currentColor"
              strokeWidth="1"
              className={iconIdle}
            />
            <line
              x1="9.2"
              y1="0.8"
              x2="0.8"
              y2="9.2"
              stroke="currentColor"
              strokeWidth="1"
              className={iconIdle}
            />
          </svg>
        </span>
      </span>
    </div>
  );
};

const DemoCredentials = ({ usuario, contrasena }) => {
  const [copiado, setCopiado] = useState(null);

  if (!usuario && !contrasena) return null;

  const copiar = async (valor, campo) => {
    try {
      await navigator.clipboard.writeText(valor);
      setCopiado(campo);
      setTimeout(() => setCopiado(null), 1500);
    } catch {
      // clipboard no disponible; se ignora silenciosamente
    }
  };

  return (
    <div className="mb-4 rounded-md border border-primary/15 bg-base-300/40 overflow-hidden">
      <WinTitleBar label="credenciales.env" variant="light" />

      <div className="px-3 py-2 space-y-1">
        {usuario && (
          <button
            type="button"
            onClick={() => copiar(usuario, "usuario")}
            className="flex w-full items-center justify-between gap-2 text-left font-mono text-xs group/copy"
          >
            <span className="truncate">
              <span className="text-primary/60">USER</span>
              <span className="text-base-content/30">=</span>
              <span className="text-base-content/80">{usuario}</span>
            </span>
            <span className="shrink-0 text-[10px] text-base-content/30 group-hover/copy:text-primary transition-colors">
              {copiado === "usuario" ? "copiado ✓" : "copiar"}
            </span>
          </button>
        )}

        {contrasena && (
          <button
            type="button"
            onClick={() => copiar(contrasena, "password")}
            className="flex w-full items-center justify-between gap-2 text-left font-mono text-xs group/copy"
          >
            <span className="truncate">
              <span className="text-primary/60">PASS</span>
              <span className="text-base-content/30">=</span>
              <span className="text-base-content/80">{contrasena}</span>
            </span>
            <span className="shrink-0 text-[10px] text-base-content/30 group-hover/copy:text-primary transition-colors">
              {copiado === "password" ? "copiado ✓" : "copiar"}
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

const Card = ({
  title,
  subtitle,
  description,
  backend,
  frontend,
  baseDatos,
  imgSrc,
  enlaceGitHub,
  enlaceProyecto,
  demoUsuario,
  demoContrasena,
}) => {
  const slug = slugify(title || "fintrack");

  return (
    <div className="group bg-base-200 m-3 sm:m-2 rounded-2xl border border-base-300 overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
      {/* Imagen con overlay */}
      <div className="relative h-44 bg-[#0f2240] overflow-hidden">
        {/* Barra de título estilo Windows Terminal, coherente con el hero */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <WinTitleBar label={`~/proyectos/${slug}`} variant="dark" />
        </div>

        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-contain opacity-40 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:opacity-50"
        />

        {/* Badge top-right, estilo bracket de log */}
        <span className="absolute top-8 right-3 text-white/80 text-[11px] font-mono px-2 py-1 rounded-md bg-black/30 backdrop-blur-sm">
          <span className="text-primary/70">[</span>
          proyecto
          <span className="text-primary/70">]</span>
        </span>

        {/* Título sobre imagen */}
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-linear-to-t from-black/70 to-transparent">
          <h2 className="text-white font-semibold text-lg leading-tight">
            {title || "FinTrack"}
          </h2>
          <p className="text-white/70 text-xs mt-0.5 font-mono">
            {subtitle || "Finanzas personales"}
          </p>
        </div>
      </div>

      {/* Cuerpo */}
      <div className="px-4 pt-4 pb-5">
        <p className="text-sm text-base-content/70 leading-relaxed mb-4">
          {description ||
            "Aplicación de seguimiento de finanzas personales con dashboard interactivo y control de gastos en tiempo real."}
        </p>

        {/* Credenciales demo, solo si existen */}
        <DemoCredentials usuario={demoUsuario} contrasena={demoContrasena} />

        {/* Tags como flags de CLI */}
        <div className="flex flex-wrap gap-2 mb-4">
          {backend && <TechFlag>{backend}</TechFlag>}
          {frontend && <TechFlag>{frontend}</TechFlag>}
          {baseDatos && <TechFlag>{baseDatos}</TechFlag>}
        </div>

        {/* Botones estilo comando, como en el hero */}
        <div className="flex gap-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm flex-1 rounded-sm font-mono font-normal normal-case"
            href={enlaceProyecto}
          >
            ./ver-proyecto.sh
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-secondary btn-sm flex-1 rounded-sm font-mono font-normal normal-case"
            href={enlaceGitHub}
          >
            git clone
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
