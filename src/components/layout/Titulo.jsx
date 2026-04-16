const Titulo = ({ subtitulo, titulo, span }) => {
  return (
    <div className="text-center mb-4">
      <div className="flex items-center justify-center gap-4 mb-1">
        <span className="h-px w-12 bg-primary opacity-50 inline-block" />
        <span className="text-xs font-semibold tracking-widest text-primary uppercase">
          {subtitulo}
        </span>
        <span className="h-px w-12 bg-primary opacity-50 inline-block" />
      </div>
      <h2 className="text-5xl font-bold dark:text-gray-100 text-gray-700">
        {titulo} <span className="text-primary">{span}</span>
      </h2>
    </div>
  );
};

export default Titulo;
