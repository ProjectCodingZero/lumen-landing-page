import React from "react";
import {
  BisturiIcon,
  Button,
  JeringaIcon,
  ServicioConsultasIcon,
  TijerasIcon,
  useTitle,
} from "@/shared/index.ts";
import { ServiceCard } from "@features/services/index.ts";

export default function ServicesLayout(): React.JSX.Element {
  const setTitle = useTitle();
  setTitle("Lumen - Servicios");
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header / Hero Section Intro */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-indigo-600 font-semibold tracking-wider uppercase text-xs bg-indigo-50 px-3 py-1 rounded-full">
            Excelencia Profesional
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Nuestros Servicios Especializados
          </h1>
          <p className="text-lg text-slate-600">
            Descubre nuestra gama completa de prestaciones médicas, quirúrgicas
            y de estética diseñadas para el bienestar integral.
          </p>
        </section>

        {/* Cards Grid Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1: Consultas Médicas (Estetoscopio) */}
          <ServiceCard
            title="Consultas Médicas"
            description="Evaluaciones clínicas exhaustivas con profesionales altamente capacitados para un diagnóstico preciso y oportuno."
            badge="Popular"
            borderColor="border-emerald-100"
            badgeColor="bg-emerald-100 text-emerald-800"
          >
            <ServicioConsultasIcon />
          </ServiceCard>

          {/* Card 2: Cirugía y Laboratorio (Bisturí Corregido) */}
          <ServiceCard
            title="Cirugía y Laboratorio"
            description="Procedimientos quirúrgicos seguros y análisis clínicos de alta precisión con tecnología de punta."
            badge="Avanzado"
            borderColor="border-slate-200"
            badgeColor="bg-slate-100 text-slate-800"
          >
            <BisturiIcon />
          </ServiceCard>

          {/* Card 3: Vacunación y Prevención (Jeringa) */}
          <ServiceCard
            title="Vacunación y Prevención"
            description="Planes de inmunización completos y medidas profilácticas para la protección continua de la salud."
            badge="Esencial"
            borderColor="border-sky-100"
            badgeColor="bg-sky-100 text-sky-800"
          >
            <JeringaIcon />
          </ServiceCard>

          {/* Card 4: Estética y Cuidado (Tijeras Corregidas) */}
          <ServiceCard
            title="Estética Especializada"
            description="Cuidado de imagen y tratamientos estéticos minuciosos adaptados a cada requerimiento específico."
            badge="Nuevo"
            borderColor="border-purple-100"
            badgeColor="bg-purple-100 text-purple-800"
          >
            <TijerasIcon />
          </ServiceCard>
        </section>

        {/* Call to Action Section (Rest of the layout) */}
        <section className="bg-indigo-900 text-white rounded-3xl p-12 text-center space-y-6 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]">
          </div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold sm:text-4xl">
              ¿Listo para comenzar tu atención?
            </h2>
            <p className="text-indigo-200 text-lg">
              Agenda tu cita hoy mismo o comunícate con nosotros para recibir
              asesoramiento personalizado.
            </p>
            <div className="pt-4 flex justify-center gap-4">
              <Button className="bg-white text-indigo-900 font-semibold px-8 py-3 rounded-xl hover:bg-indigo-50 transition-colors hover:bg-indigo-200">
                Reservar Cita
              </Button>
              <Button className="border border-indigo-400 text-white font-semibold px-8 py-3 rounded-xl hover:bg-indigo-800 transition-colors">
                Contactar Soporte
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
