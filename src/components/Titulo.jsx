const Titulo = ({ subtitulo, titulo, span, colorTxt }) => {
  return (
    <div className="text-center mt-15 mb-5">
      <div className="flex items-center justify-center gap-4 mb-1">
        <span className="h-px w-12 bg-primary opacity-50 inline-block" />
        <span className="text-xs font-semibold tracking-widest text-primary uppercase">
          {subtitulo}
        </span>
        <span className="h-px w-12 bg-primary opacity-50 inline-block" />
      </div>
      <h2 className={`text-5xl font-bold ${colorTxt}`}>
        {titulo} <span className="text-primary">{span}</span>
      </h2>
    </div>
  );
};

export default Titulo;
