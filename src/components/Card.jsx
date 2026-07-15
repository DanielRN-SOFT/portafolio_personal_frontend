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
 * variant="dark"   -> sobre la imagen
 * variant="panel"  -> sobre el panel de credenciales, dentro de la card oscura
 */
const WinTitleBar = ({ label, variant = "dark" }) => {
  const isImage = variant === "dark";

  const barBg = isImage ? "bg-black/30 backdrop-blur-sm" : "";
  const borderCol = isImage ? "" : "border-b border-neutral-content/10";
  const labelCol = isImage
    ? "text-white/40 group-hover:text-white/70"
    : "text-neutral-content/40";
  const iconIdle = isImage ? "text-white/50" : "text-neutral-content/40";
  const iconHover = isImage
    ? "hover:bg-white/10 hover:text-white/90"
    : "hover:bg-neutral-content/10 hover:text-neutral-content/80";

  return (
    <div
      className={`flex items-center gap-0 pl-3 pr-0 py-0 ${barBg} ${borderCol}`}
    >
      <span
        className={`mr-1.5 h-2 w-2 rounded-xs ${
          isImage ? "bg-primary/70" : "bg-primary/50"
        }`}
      />
      <span
        className={`flex-1 truncate py-1.5 text-[10px] font-mono transition-colors ${labelCol}`}
      >
        {label}
      </span>

      <span className="flex items-stretch">
        <span
          className={`flex items-center justify-center w-7 h-6 transition-colors ${iconIdle} ${iconHover}`}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <line x1="1" y1="5" x2="9" y2="5" stroke="currentColor" strokeWidth="1" />
          </svg>
        </span>
        <span
          className={`flex items-center justify-center w-7 h-6 transition-colors ${iconIdle} ${iconHover}`}
        >
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
            <rect x="0.5" y="0.5" width="8" height="8" stroke="currentColor" strokeWidth="1" />
          </svg>
        </span>
        <span className="flex items-center justify-center w-7 h-6 transition-colors text-inherit hover:bg-[#c42b1c] hover:text-white group/close">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <line x1="0.8" y1="0.8" x2="9.2" y2="9.2" stroke="currentColor" strokeWidth="1" className={iconIdle} />
            <line x1="9.2" y1="0.8" x2="0.8" y2="9.2" stroke="currentColor" strokeWidth="1" className={iconIdle} />
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
    <div className="mb-4 rounded-md border border-neutral-content/10 bg-black/20 overflow-hidden">
      <WinTitleBar label="credenciales.env" variant="panel" />

      <div className="px-3 py-2 space-y-1">
        {usuario && (
          <button
            type="button"
            onClick={() => copiar(usuario, "usuario")}
            className="flex w-full items-center justify-between gap-2 text-left font-mono text-xs group/copy"
          >
            <span className="truncate">
              <span className="text-primary/70">USER</span>
              <span className="text-neutral-content/30">=</span>
              <span className="text-neutral-content/80">{usuario}</span>
            </span>
            <span className="shrink-0 text-[10px] text-neutral-content/30 group-hover/copy:text-primary transition-colors">
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
              <span className="text-primary/70">PASS</span>
              <span className="text-neutral-content/30">=</span>
              <span className="text-neutral-content/80">{contrasena}</span>
            </span>
            <span className="shrink-0 text-[10px] text-neutral-content/30 group-hover/copy:text-primary transition-colors">
              {copiado === "password" ? "copiado ✓" : "copiar"}
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

const CornerBracket = ({ position }) => {
  const pos = {
    "top-left": "top-2 left-2 border-t border-l",
    "top-right": "top-2 right-2 border-t border-r",
    "bottom-left": "bottom-2 left-2 border-b border-l",
    "bottom-right": "bottom-2 right-2 border-b border-r",
  }[position];

  return (
    <span
      className={`pointer-events-none absolute w-3.5 h-3.5 border-primary/0 group-hover:border-primary/70 transition-all duration-300 ${pos}`}
    />
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
  enProduccion = true,
}) => {
  const slug = slugify(title || "fintrack");

  return (
    <div className="group relative bg-neutral/80 m-3 sm:m-2 rounded-xl border border-neutral-content/10 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
      {/* Imagen con overlay */}
      <div className="relative h-48 bg-[#0f2240] overflow-hidden">
        {/* Textura de puntos, coherente con el hero */}
        <div
          className="absolute inset-0 opacity-[0.12] text-primary"
          style={{
            backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Barra de título estilo Windows Terminal */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <WinTitleBar label={`~/proyectos/${slug}`} variant="dark" />
        </div>

        {/* Esquinas tipo HUD, aparecen al hover */}
        <CornerBracket position="top-left" />
        <CornerBracket position="top-right" />
        <CornerBracket position="bottom-left" />
        <CornerBracket position="bottom-right" />

        <img
          src={imgSrc}
          alt={title}
          className="relative w-full h-full object-contain opacity-45 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:opacity-55"
        />

        {/* Badge top-right, estilo bracket de log */}
        <span className="absolute top-8 right-3 text-white/80 text-[11px] font-mono px-2 py-1 rounded-md bg-black/30 backdrop-blur-sm">
          <span className="text-primary/70">[</span>
          proyecto
          <span className="text-primary/70">]</span>
        </span>

        {/* Título sobre imagen */}
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-linear-to-t from-black/80 via-black/40 to-transparent">
          <div className="flex items-center gap-2">
            <h2 className="text-white font-semibold text-lg leading-tight">
              {title || "FinTrack"}
            </h2>
            {enProduccion && (
              <span className="relative inline-flex w-1.5 h-1.5 mt-0.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-success" />
              </span>
            )}
          </div>
          <p className="text-white/70 text-xs mt-0.5 font-mono">
            {subtitle || "Finanzas personales"}
          </p>
        </div>
      </div>

      {/* Cuerpo */}
      <div className="px-4 pt-4 pb-5">
        <p className="text-sm text-neutral-content/60 leading-relaxed mb-4">
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
            className="btn btn-sm flex-1 rounded-sm font-mono font-normal normal-case border-neutral-content/20 bg-transparent text-neutral-content/70 hover:border-primary hover:text-primary hover:bg-primary/5"
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