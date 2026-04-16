const HeroSection = () => {
  return (
    <div className="hero min-h-screen bg-[url('/hero_section_2.jpg')] bg-cover bg-fixed">
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-3xl">
          <h1 className="mb-2 text-5xl font-bold fade-in">
            Daniel Felipe Ramirez Navarro
          </h1>
          <span className="mb-5 text-rotate text-2xl tracking-widest leading-8">
            <span className="justify-items-center">
              <span>Desarrollador de Software</span>
              <span>Full Stack Developer</span>
              <span>Diseño de Soluciones Digitales</span>
            </span>
          </span>
          <p className="mb-5">
            Transformo ideas en experiencias digitales excepcionales usando
            tecnologías modernas y código limpio
          </p>

          <div className="flex justify-center items-center gap-5">
            <button className="btn btn-primary">Mis proyectos</button>
            <button className="btn btn-neutral">Mis habilidades</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
