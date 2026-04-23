import ItemLineaTiempo from "./ItemLineaTiempo";

const Tag = ({ nombre }) => (
  <span className="badge badge-soft badge-primary rounded-3xl">{nombre}</span>
);

const SobreMi = () => {
  return (
    <div className="max-w-5xl mx-auto px-6   text-gray-100 font-sans">
      {/* Bio */}
      <div className="max-w-xl mx-auto text-center mb-12">
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

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2">
          <Tag nombre={"React"}></Tag>
          <Tag nombre={"Node.js"}></Tag>
          <Tag nombre={"Express"}></Tag>
          <Tag nombre={"Prisma"}></Tag>
          <Tag nombre={"REST APIs"}></Tag>
          <Tag nombre={"MySQL"}></Tag>
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
