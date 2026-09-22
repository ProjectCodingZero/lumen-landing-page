import React from "react";
import {
  DocumentIcon,
  HeartIcon,
  PawIcon,
  ScissorsIcon,
  StethoscopeIcon,
} from "./Icons.tsx";

export function MisionCard(): React.JSX.Element {
  return (
    <div className="bg-[#FFFDF6] text-[#1A3636] p-8 rounded-2xl shadow-sm border border-[#EFECE6] w-full">
      <h2 className="text-3xl font-bold mb-4">Nuestra Misión Empresarial</h2>

      <div className="mb-6">
        <h3 className="font-bold text-lg mb-2">MISIÓN:</h3>
        <p className="text-gray-700 leading-relaxed">
          Más que una clínica, somos una familia dedicada a tus mascotas con los
          más altos estándares médicos, excelencia en la atención integral y
          tecnología avanzada para garantizar la salud y bienestar.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8">
        <div className="flex flex-col items-center bg-[#F3F0E6] p-4 rounded-xl text-center">
          <div className="bg-[#B2EBF2] p-3 rounded-full text-[#00796B] mb-2">
            <HeartIcon size={22} />
          </div>
          <span className="font-medium text-xs">Cuidado Compasivo</span>
        </div>

        <div className="flex flex-col items-center bg-[#F3F0E6] p-4 rounded-xl text-center">
          <div className="bg-[#B2EBF2] p-3 rounded-full text-[#00796B] mb-2">
            <StethoscopeIcon size={22} />
          </div>
          <span className="font-medium text-xs">Excelencia Médica</span>
        </div>

        <div className="flex flex-col items-center bg-[#F3F0E6] p-4 rounded-xl text-center">
          <div className="bg-[#B2EBF2] p-3 rounded-full text-[#00796B] mb-2">
            <DocumentIcon size={22} />
          </div>
          <span className="font-medium text-xs">Documento Argumento</span>
        </div>

        <div className="flex flex-col items-center bg-[#F3F0E6] p-4 rounded-xl text-center">
          <div className="bg-[#B2EBF2] p-3 rounded-full text-[#00796B] mb-2">
            <ScissorsIcon size={22} />
          </div>
          <span className="font-medium text-xs">Estética Canina</span>
        </div>

        <div className="flex flex-col items-center bg-[#F3F0E6] p-4 rounded-xl text-center">
          <div className="bg-[#B2EBF2] p-3 rounded-full text-[#00796B] mb-2">
            <PawIcon size={22} />
          </div>
          <span className="font-medium text-xs">Mi Mascota</span>
        </div>
      </div>
    </div>
  );
}
