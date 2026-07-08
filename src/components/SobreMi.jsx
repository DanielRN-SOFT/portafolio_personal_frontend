import ItemLineaTiempo from "./ItemLineaTiempo";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiMysql,
  SiLaravel,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";

const Tag = ({ nombre, icono }) => (
  <span className="badge badge-outline border-primary/25 bg-primary/5 text-primary/90 font-mono text-xs sm:text-sm font-medium rounded-md px-3 py-3 gap-1.5 normal-case hover:bg-primary/10 hover:border-primary/40 transition-colors">
    <span className="text-primary/40">--</span>
    {icono} {nombre}
  </span>
);

const SobreMi = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 text-gray-100 font-sans">
      {/* Bio */}
      <div className="max-w-xl mx-auto text-center mb-12">
        {/* Prompt eyebrow, coherente con el hero */}
        <p className="font-mono text-xs sm:text-sm text-primary/70 tracking-tight mb-4">
          <span className="text-secondary">daniel@dev</span>
          <span className="text-base-content/30">:</span>
          <span className="text-primary/50">~</span>
          <span className="text-base-content/30">$</span> cat sobre-mi.md
          <span className="inline-block w-[0.5ch] h-[1em] bg-primary/60 animate-pulse ml-1 align-middle" />
        </p>

        <p className="text-sm md:text-base leading-relaxed text-gray-400 mb-3">
          Soy{" "}
          <span className="text-gray-100 font-medium">
            desarrollador web full-stack
          </span>
          , especializado en construir interfaces rápidas y experiencias de
          usuario que realmente importan.
        </p>
        <p className="text-sm md:text-base leading-relaxed text-gray-400 mb-7">
          Me interesa el detalle: desde la arquitectura del backend hasta la
          última animación en pantalla, busco que cada proyecto sea{" "}
          <span className="text-gray-100 font-medium">
            funcional, limpio y agradable de usar.
          </span>
        </p>

        {/* Tags como flags de CLI */}
        <div className="flex flex-wrap justify-center gap-2">
          <Tag nombre="react" icono={<SiReact />} />
          <Tag nombre="node" icono={<SiNodedotjs />} />
          <Tag nombre="express" icono={<SiExpress />} />
          <Tag nombre="laravel" icono={<SiLaravel />} />
          <Tag nombre="prisma" icono={<SiPrisma />} />
          <Tag nombre="rest-api" icono={<TbApi />} />
          <Tag nombre="mysql" icono={<SiMysql />} />
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/10 mb-12" />

      {/* Línea de tiempo */}
      <ul className="w-full max-w-sm mx-auto lg:max-w-none lg:flex lg:flex-row lg:items-start lg:gap-0">
        <ItemLineaTiempo
          year="2023"
          primerTitulo="Bachiller Académico"
          primeraInstitucion="I.E. Juan XXIII"
          primeraFecha="1 de diciembre"
          segundoTitulo="Tec. Diseño e Integración Multimedia"
          segundaInstitucion="SENA"
          segundaFecha="1 de diciembre"
        />
        <ItemLineaTiempo
          year="2025"
          primerTitulo="Téc. Sistemas y Comercio Digital"
          primeraInstitucion="C.E.I. El Mariscal"
          primeraFecha="17 de julio"
          segundoTitulo="Nivel C1 — Marco Europeo de Referencia"
          segundaInstitucion="Macarthur English Academy"
          segundaFecha="17 de septiembre"
        />
        <ItemLineaTiempo
          year="2027"
          primerTitulo="Tecn. Análisis y Desarrollo de Software"
          primeraInstitucion="SENA"
          primeraFecha="17 de enero de 2027"
          segundoTitulo="Desarrollador Junior FullStack"
          segundaInstitucion="World Travel Assist"
          segundaFecha="Julio 2026 – Actualidad"
        />
      </ul>
    </div>
  );
};

export default SobreMi;
