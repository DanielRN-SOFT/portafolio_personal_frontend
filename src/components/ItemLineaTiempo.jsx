const TerminalCardHeader = () => (
  <div className="flex items-center gap-1.5 pb-2 mb-3 border-b border-base-200">
    <span className="w-1.5 h-1.5 rounded-full bg-base-300" />
    <span className="w-1.5 h-1.5 rounded-full bg-base-300" />
    <span className="w-1.5 h-1.5 rounded-full bg-base-300" />
    <span className="ml-auto text-[10px] font-mono text-gray-400 tracking-wide">
      historial.log
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
      <h5 className="text-xs text-gray-500 font-mono mt-0.5">{institucion}</h5>
      <h6 className="font-mono text-[11px] text-gray-500 mt-1 inline-flex items-center gap-1.5">
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
        <div className="flex justify-end items-start pt-1.5 pr-2 text-xs text-gray-500 font-mono font-medium">
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
          {!isLast && <div className="w-0.5 flex-1 bg-base-300 mt-1" />}
        </div>
        <div className="timeline-box text-sm text-gray-900 ml-2 mb-4">
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
            className={`h-0.5 flex-1 bg-base-300 ${isLast ? "invisible" : ""}`}
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
            className={`h-0.5 flex-1 bg-base-300 ${isLast ? "invisible" : ""}`}
          />
        </div>
        {/* Año */}
        <span className="text-sm font-mono font-medium text-gray-500">
          {year}
        </span>
        {/* Card */}
        <div className="timeline-box text-sm text-gray-900 w-full">
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
    <TerminalCardHeader />
    <div className="mb-3">
      <LogEntry
        titulo={primerTitulo}
        institucion={primeraInstitucion}
        fecha={primeraFecha}
      />
    </div>
    <hr className="my-2 border-base-200" />
    <LogEntry
      titulo={segundoTitulo}
      institucion={segundaInstitucion}
      fecha={segundaFecha}
    />
  </>
);

export default ItemLineaTiempo;
