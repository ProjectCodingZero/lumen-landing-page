import React from "react";
import {
  ClinicIllustrationSvg,
  ContactFormCard,
  MisionCard,
  VisionCard,
} from "@features/about/index.ts";
import { useTitle } from "@/shared/hooks/useTitle.ts";

export default function AboutLayout(): React.JSX.Element {
  const setTitle = useTitle();
  setTitle("Lumen - Nosotros");
  return (
    <main className="min-h-screen bg-[#F7F5EE] py-10 px-4 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Sección Superior Header / Visión */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 bg-[#B2EBF2] p-8 rounded-2xl flex flex-col justify-center">
            <ClinicIllustrationSvg className="w-full h-48 mb-6" />
            <h1 className="text-3xl font-extrabold text-[#004D40] mb-2">
              Conoce a Fondo Nuestro Compromiso
            </h1>
            <p className="text-[#00695C] font-medium">
              Más que una clínica, somos una familia dedicada a tus mascotas.
            </p>
          </div>

          <div className="lg:col-span-7">
            <VisionCard />
          </div>
        </div>

        {/* Sección Inferior Misión (Ancho Completo) + Formulario */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <MisionCard />
          </div>

          <div className="lg:col-span-4">
            <ContactFormCard />
          </div>
        </div>
      </div>
    </main>
  );
}
