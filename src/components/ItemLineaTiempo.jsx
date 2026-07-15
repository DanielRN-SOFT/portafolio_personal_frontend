/**
 * Barra de título estilo Windows Terminal / Windows 11.
 * Reutiliza el mismo lenguaje visual que el hero y el navbar.
 */
const WinTitleBar = ({ label }) => (
  <div className="flex items-center gap-0 pb-2 mb-3 border-b border-neutral-content/10">
    <span className="mr-1.5 h-2 w-2 rounded-[2px] bg-primary/60" />
    <span className="flex-1 truncate text-[10px] font-mono text-neutral-content/40 tracking-wide">
      {label}
    </span>

    <span className="flex items-stretch -mr-1">
      <span className="flex items-center justify-center w-6 h-5 text-neutral-content/40 hover:bg-neutral-content/10 hover:text-neutral-content transition-colors">
        <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
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
      <span className="flex items-center justify-center w-6 h-5 text-neutral-content/40 hover:bg-neutral-content/10 hover:text-neutral-content transition-colors">
        <svg width="8" height="8" viewBox="0 0 9 9" fill="none">
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
      <span className="flex items-center justify-center w-6 h-5 text-neutral-content/40 hover:bg-[#c42b1c] hover:text-white transition-colors">
        <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
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

const LogEntry = ({ titulo, institucion, fecha }) => {
  const enCurso = fecha.toLowerCase().includes("actualidad");

  return (
    <div>
      <h4 className="font-bold text-primary flex items-baseline gap-1.5">
        <span className="font-mono text-primary/40 text-xs">{">"}</span>
        {titulo}
      </h4>
      <h5 className="text-xs text-neutral-content/50 font-mono mt-0.5">
        {institucion}
      </h5>
      <h6 className="font-mono text-[11px] text-neutral-content/50 mt-1 inline-flex items-center gap-1.5">
        <span className="text-primary/40">[</span>
        {fecha}
        <span className="text-primary/40">]</span>
        {enCurso && (
          <span className="relative inline-flex w-1.5 h-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-success" />
          </span>
        )}
      </h6>
    </div>
  );
};

const ItemLineaTiempo = ({
  primeraFecha,
  primerTitulo,
  primeraInstitucion,
  segundaFecha,
  segundoTitulo,
  segundaInstitucion,
  year,
  isLast,
}) => {
  return (
    <>
      {/* ── MÓVIL: fila con 3 columnas fijas ── */}
      <li className="grid grid-cols-[52px_24px_1fr] lg:hidden">
        <div className="flex justify-end items-start pt-1.5 pr-2 text-xs text-neutral-content/50 font-mono font-medium">
          {year}
        </div>
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 text-primary shrink-0"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
          {!isLast && (
            <div className="w-0.5 flex-1 bg-neutral-content/15 mt-1" />
          )}
        </div>
        <div className="timeline-box bg-neutral border border-neutral-content/10 text-sm text-neutral-content ml-2 mb-4">
          <CardContent
            {...{
              primerTitulo,
              primeraInstitucion,
              primeraFecha,
              segundoTitulo,
              segundaInstitucion,
              segundaFecha,
            }}
          />
        </div>
      </li>

      {/* ── DESKTOP: columna individual dentro del grid del padre ── */}
      <li className="hidden lg:flex flex-col items-center gap-2 flex-1 min-w-0">
        {/* Línea + ícono */}
        <div className="flex items-center w-full">
          <div
            className={`h-0.5 flex-1 bg-neutral-content/15 ${isLast ? "invisible" : ""}`}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-6 w-6 text-primary shrink-0 mx-1"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
          <div
            className={`h-0.5 flex-1 bg-neutral-content/15 ${isLast ? "invisible" : ""}`}
          />
        </div>
        {/* Año */}
        <span className="text-sm font-mono font-medium text-neutral-content/50">
          {year}
        </span>
        {/* Card */}
        <div className="timeline-box bg-slate-950 border border-neutral-content/10 text-sm text-neutral-content w-full">
          <CardContent
            {...{
              primerTitulo,
              primeraInstitucion,
              primeraFecha,
              segundoTitulo,
              segundaInstitucion,
              segundaFecha,
            }}
          />
        </div>
      </li>
    </>
  );
};

// Subcomponente para no repetir el contenido
const CardContent = ({
  primerTitulo,
  primeraInstitucion,
  primeraFecha,
  segundoTitulo,
  segundaInstitucion,
  segundaFecha,
}) => (
  <>
    <WinTitleBar label="historial.log" />
    <div className="mb-3">
      <LogEntry
        titulo={primerTitulo}
        institucion={primeraInstitucion}
        fecha={primeraFecha}
      />
    </div>
    <hr className="my-2 border-neutral-content/10" />
    <LogEntry
      titulo={segundoTitulo}
      institucion={segundaInstitucion}
      fecha={segundaFecha}
    />
  </>
);

export default ItemLineaTiempo;
