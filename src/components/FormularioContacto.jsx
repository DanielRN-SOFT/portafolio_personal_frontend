import FondoFormulario from "./FondoFormulario";
import RedesSociales from "./RedesSociales";

/**
 * Barra de título estilo Windows Terminal, igual a las demás secciones.
 */
const WinTitleBar = ({ label }) => (
  <div className="flex items-center gap-0 bg-black/30 backdrop-blur-sm">
    <span className="mr-1.5 ml-3 h-2 w-2 rounded-xs bg-primary/70" />
    <span className="flex-1 truncate py-1.5 text-[10px] font-mono text-neutral-content/40">
      {label}
    </span>
    <span className="flex items-stretch">
      <span className="flex items-center justify-center w-7 h-6 text-neutral-content/40 hover:bg-neutral-content/10 hover:text-neutral-content/80 transition-colors">
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
      <span className="flex items-center justify-center w-7 h-6 text-neutral-content/40 hover:bg-neutral-content/10 hover:text-neutral-content/80 transition-colors">
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
      <span className="flex items-center justify-center w-7 h-6 text-neutral-content/40 hover:bg-[#c42b1c] hover:text-white transition-colors">
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

/** Campo de formulario estilo prompt: "> etiqueta" arriba, input tipo terminal abajo */
const CampoTerminal = ({ prompt, icon, children }) => (
  <div className="mb-5">
    <p className="font-mono text-[11px] text-neutral-content/40 mb-1.5">
      <span className="text-primary/50">&gt;</span> {prompt}
    </p>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <i className={`${icon} text-neutral-content/30`}></i>
      </div>
      {children}
    </div>
  </div>
);

const inputClasses =
  "w-full pl-10 pr-3 py-3 rounded-md border border-neutral-content/15 bg-black/20 text-neutral-content placeholder-neutral-content/30 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-colors";

const FormularioContacto = () => {
  return (
    <div className="relative z-10 overflow-hidden pt-4 pb-8 sm:pb-16 lg:pb-20 text-neutral-content mb-3">
      <div className="container mx-auto">
        <div className="mx-4 grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Formulario */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-lg border border-neutral-content/10 bg-neutral shadow-2xl shadow-black/40 overflow-hidden">
              <WinTitleBar label="~/contacto/nuevo-mensaje.sh" />

              <form className="px-5 py-6 sm:px-8 sm:py-8" id="contactForm">
                <CampoTerminal prompt="nombre" icon="fas fa-user">
                  <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    className={inputClasses}
                    required
                  />
                </CampoTerminal>

                <CampoTerminal prompt="email" icon="fas fa-envelope">
                  <input
                    type="email"
                    name="email"
                    placeholder="tucorreo@ejemplo.com"
                    className={inputClasses}
                    required
                  />
                </CampoTerminal>

                <div className="mb-6">
                  <p className="font-mono text-[11px] text-neutral-content/40 mb-1.5">
                    <span className="text-primary/50">&gt;</span> mensaje
                  </p>
                  <div className="relative">
                    <div className="absolute top-3.5 left-3 pointer-events-none">
                      <i className="fas fa-comment text-neutral-content/30"></i>
                    </div>
                    <textarea
                      rows="6"
                      name="message"
                      placeholder="Contame sobre tu proyecto..."
                      className={inputClasses}
                      required
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full rounded-sm font-mono font-normal normal-case"
                >
                  ./enviar-mensaje.sh
                </button>
              </form>

              {/* Elementos decorativos originales */}
              <FondoFormulario />
            </div>
          </div>

          {/* Información de contacto */}
          <div className="order-1 lg:order-2 px-5">
            <h2 className="text-neutral-content text-[28px] sm:text-[36px] lg:text-[32px] xl:text-[36px] font-mono font-bold tracking-tight uppercase mb-4">
              Conversemos
            </h2>
            <p className="text-neutral-content/50 mb-8 text-base sm:text-lg leading-relaxed max-w-md">
              ¿Tienes un proyecto en mente? Estoy disponible para colaboraciones
              y nuevos desafíos.
            </p>

            {/* Panel con el mismo lenguaje visual del hero: // contacto */}
            <div className="rounded-lg border border-neutral-content/10 bg-neutral/60 backdrop-blur-sm px-5 py-5 font-mono">
              <p className="text-xs text-neutral-content/40 mb-3">// canales</p>
              <div className="flex flex-col gap-3">
                <RedesSociales
                  titulo={"GitHub"}
                  ClasesIcono={"fa-brands fa-square-github"}
                  enlace={"https://github.com/DanielRN-SOFT"}
                />
                <RedesSociales
                  titulo={"Correo electronico"}
                  enlace={"daniel20ramirez06@gmail.com"}
                  enlaceEmail={true}
                  ClasesIcono={"fas fa-envelope"}
                />
                <RedesSociales
                  titulo={"LinkedIn"}
                  enlace={
                    "https://www.linkedin.com/in/daniel-ram%C3%ADrez-navarro-658397376/"
                  }
                  ClasesIcono={"fa-brands fa-linkedin"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioContacto;
