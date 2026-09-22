import {
  DocumentIcon,
  HeartIcon,
  ScissorsIcon,
  StethoscopeIcon,
} from "@features/about/index.ts";
import React from "react";

export function VisionCard(): React.JSX.Element {
  return (
    <div className="bg-[#81C7D4] text-[#1A3636] p-8 rounded-2xl shadow-sm border border-[#70B5C3]">
      <h2 className="text-3xl font-bold mb-4">Nuestra Visión Empresarial</h2>
      <p className="text-base leading-relaxed mb-8">
        Nuestra visión empresarial es consolidarnos como la red veterinaria
        líder en la región, reconocida por la excelencia médica, innovación en
        el cuidado de mascotas y un sólido compromiso con la comunidad.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col items-center bg-white/60 p-4 rounded-xl text-center">
          <div className="bg-white p-3 rounded-full shadow-sm mb-2 text-[#00897B]">
            <HeartIcon size={24} />
          </div>
          <span className="font-semibold text-sm">Cuidado Compasivo</span>
        </div>

        <div className="flex flex-col items-center bg-white/60 p-4 rounded-xl text-center">
          <div className="bg-white p-3 rounded-full shadow-sm mb-2 text-[#00897B]">
            <StethoscopeIcon size={24} />
          </div>
          <span className="font-semibold text-sm">Excelencia Médica</span>
        </div>

        <div className="flex flex-col items-center bg-white/60 p-4 rounded-xl text-center">
          <div className="bg-white p-3 rounded-full shadow-sm mb-2 text-[#00897B]">
            <DocumentIcon size={24} />
          </div>
          <span className="font-semibold text-sm">Documento Argumento</span>
        </div>

        <div className="flex flex-col items-center bg-white/60 p-4 rounded-xl text-center">
          <div className="bg-white p-3 rounded-full shadow-sm mb-2 text-[#00897B]">
            <ScissorsIcon size={24} />
          </div>
          <span className="font-semibold text-sm">Estética de Mascotas</span>
        </div>
      </div>
    </div>
  );
}
