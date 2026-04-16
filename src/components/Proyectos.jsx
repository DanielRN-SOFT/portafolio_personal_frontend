import { useState, useEffect } from "react";
import Card from "./Card";

const Proyectos = () => {
  const [infoProyectos, setInfoProyectos] = useState([]);

  useEffect(() => {
    const obtenerProyectos = async () => {
      try {
        const request = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/proyectos`,
        );
        const response = await request.json();
        setInfoProyectos(response.resultados);
      } catch (error) {}
    };

    obtenerProyectos();
  }, []);
  return (
    <>
      {infoProyectos.map((proyecto) => {
        return (
          <Card
            key={proyecto.id}
            title={proyecto.titulo}
            subtitle={proyecto.subtitulo}
            backend={proyecto.backend}
            frontend={proyecto.frontend}
            baseDatos={proyecto.base_datos}
            description={proyecto.description}
            enlaceGitHub={proyecto.enlace_github}
            enlaceProyecto={proyecto.enlace_proyecto}
            imgSrc={proyecto.url_imagen}
          />
        );
      })}
    </>
  );
};

export default Proyectos;
