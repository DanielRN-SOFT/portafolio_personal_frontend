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
        <div className="flex justify-end items-start pt-1.5 pr-2 text-xs text-gray-500 font-medium">
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
        <span className="text-sm font-medium text-gray-500">{year}</span>
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
    <div className="mb-3 pt-1">
      <h4 className="font-bold text-primary">{primerTitulo}</h4>
      <h5 className="text-xs text-gray-500">{primeraInstitucion}</h5>
      <h6 className="font-bold text-sm">{primeraFecha}</h6>
    </div>
    <hr className="my-2 border-base-200" />
    <div>
      <h4 className="font-bold text-primary">{segundoTitulo}</h4>
      <h5 className="text-xs text-gray-500">{segundaInstitucion}</h5>
      <h6 className="font-bold text-sm">{segundaFecha}</h6>
    </div>
  </>
);

export default ItemLineaTiempo;
