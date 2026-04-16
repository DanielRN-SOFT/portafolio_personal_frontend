import { useState, useEffect } from "react";

const TechStack = () => {
  const [stack, setStack] = useState([]);

  useEffect(() => {
    const obtenerStack = async () => {
      try {
        const request = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/stack`,
        );
        const response = await request.json();
        setStack(response.resultados);
        console.log(response.resultados);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerStack();
  }, []);
  return (
    <>
      <div class="w-full text-center p-6">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {stack.map((tech) => {
            return (
              <a href={tech.url_documentacion} target="_blank">
                <div class="flex flex-col items-center p-4 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:bg-gray-600 cursor-pointer">
                  <img src={tech.icono} alt="HTML" class="w-12 h-12 mb-2" />
                  <span class="text-gray-300">{tech.nombre}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TechStack;
