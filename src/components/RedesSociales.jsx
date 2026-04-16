import { useState } from "react";
const RedesSociales = ({
  ClasesIcono,
  enlace,
  titulo,
  enlaceEmail,
  enlaceWhatsApp,
}) => {
  let enlaceConvertido = "";

  enlaceEmail
    ? (enlaceConvertido = `mailto:${enlace}`)
    : (enlaceConvertido = enlace);
  enlaceWhatsApp
    ? (enlaceConvertido = `https://wa.me/${enlace}`)
    : (enlaceConvertido = enlace);
  return (
    <div className="mb-8 flex w-full max-w-82.5 gap-3 text-gray-600">
      <div className="mr-6 flex h-10 w-full max-w-10 items-center justify-center overflow-hidden rounded-sm bg-indigo-500/10  text-primary sm:h-17.5 sm:max-w-17.5">
        <i class={`${ClasesIcono} text-xl`}></i>
      </div>
      <div className="w-full">
        <h4 className="mb-1 text-base sm:text-xl font-bold">{titulo}</h4>
        <a
          href={enlaceConvertido}
          className="text-xs sm:text-base text-primary border-b hover:text-blue-800 transition-colors"
          target="_blank"
        >
          {enlace}
        </a>
      </div>
    </div>
  );
};

export default RedesSociales;
