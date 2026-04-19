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
}) => {
  return (
    <div className="bg-base-200 m-3 sm:m-2 rounded-2xl border border-base-300 overflow-hidden shadow-sm">
      {/* Imagen con overlay */}
      <div className="relative h-44 bg-[#0f2240] overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-contain opacity-40"
        />
        {/* Badge top-right */}
        <span className="absolute top-3 right-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
          Proyecto
        </span>
        {/* Título sobre imagen */}
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-linear-to-t from-black/70 to-transparent">
          <h2 className="text-white font-semibold text-lg leading-tight">
            {title || "FinTrack"}
          </h2>
          <p className="text-white/70 text-xs mt-0.5">
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

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#1e3a5f] text-blue-300">
            {backend}
          </span>

          <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#1e3a5f] text-blue-300">
            {frontend}
          </span>

          <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#1e3a5f] text-blue-300">
            {baseDatos}
          </span>
        </div>

        {/* Botones */}
        <div className="flex gap-2">
          <a
            target="_blank"
            className="btn btn-primary btn-sm flex-1"
            href={enlaceProyecto}
          >
            Ver proyecto
          </a>

          <a
            target="_blank"
            className="btn btn-secondary btn-sm flex-1"
            href={enlaceGitHub}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
