import React from 'react';
import { useTitle } from "@shared/hooks/useTitle.ts";
import {ServiceCard} from "@/features/services/index.ts";

export default function ServicesLayout(): React.JSX.Element {
    const setTitle = useTitle();
    setTitle('Servicios - Lumen');
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
            Descubre nuestra gama completa de prestaciones médicas, quirúrgicas y de estética diseñadas para el bienestar integral.
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
              <circle cx="20" cy="20" r="20" fill="#dcfce7"/>
              <path d="M14 12 C14 8, 26 8, 26 12 L26 18 C26 21, 23 24, 20 24 C17 24, 14 21, 14 18 Z" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </ServiceCard>

          {/* Card 2: Cirugía y Laboratorio (Bisturí Corregido) */}
          <ServiceCard 
            title="Cirugía y Laboratorio" 
            description="Procedimientos quirúrgicos seguros y análisis clínicos de alta precisión con tecnología de punta."
            badge="Avanzado"
            borderColor="border-slate-200"
            badgeColor="bg-slate-100 text-slate-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
              <circle cx="20" cy="20" r="20" fill="#e2e8f0"/>
              <g transform="translate(20, 20) rotate(-45) translate(-20, -20)">
                <rect x="18" y="14" width="16" height="4" rx="1.5" fill="#64748b"/>
                <line x1="21" y1="14" x2="21" y2="18" stroke="#cbd5e1" strokeWidth="1"/>
                <line x1="25" y1="14" x2="25" y2="18" stroke="#cbd5e1" strokeWidth="1"/>
                <line x1="29" y1="14" x2="29" y2="18" stroke="#cbd5e1" strokeWidth="1"/>
                <path d="M 6 16 L 18 14 L 18 18 Z" fill="#94a3b8" stroke="#475569" strokeWidth="0.5"/>
                <path d="M 6 16 L 12 15 Z" stroke="#ffffff" strokeWidth="0.8" strokeLinecap="round"/>
              </g>
            </svg>
          </ServiceCard>

          {/* Card 3: Vacunación y Prevención (Jeringa) */}
          <ServiceCard 
            title="Vacunación y Prevención" 
            description="Planes de inmunización completos y medidas profilácticas para la protección continua de la salud."
            badge="Esencial"
            borderColor="border-sky-100"
            badgeColor="bg-sky-100 text-sky-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
              <circle cx="20" cy="20" r="20" fill="#bae6fd"/>
              <path d="M15 25 L25 15 M22 12 L28 18" stroke="#0284c7" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </ServiceCard>

          {/* Card 4: Estética y Cuidado (Tijeras Corregidas) */}
          <ServiceCard 
            title="Estética Especializada" 
            description="Cuidado de imagen y tratamientos estéticos minuciosos adaptados a cada requerimiento específico."
            badge="Nuevo"
            borderColor="border-purple-100"
            badgeColor="bg-purple-100 text-purple-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
              <circle cx="20" cy="20" r="20" fill="#fae8ff"/>
              <g transform="translate(10, 8)" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
                <circle cx="6" cy="6" r="3"/>
                <circle cx="6" cy="18" r="3"/>
                <line x1="8.5" y1="8" x2="20" y2="20"/>
                <line x1="8.5" y1="16" x2="20" y2="4"/>
                <circle cx="14" cy="12" r="1" fill="#c084fc"/>
              </g>
            </svg>
          </ServiceCard>

        </section>

        {/* Call to Action Section (Rest of the layout) */}
        <section className="bg-indigo-900 text-white rounded-3xl p-12 text-center space-y-6 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold sm:text-4xl">¿Listo para comenzar tu atención?</h2>
            <p className="text-indigo-200 text-lg">
              Agenda tu cita hoy mismo o comunícate con nosotros para recibir asesoramiento personalizado.
            </p>
            <div className="pt-4 flex justify-center gap-4">
              <button className="bg-white text-indigo-900 font-semibold px-8 py-3 rounded-xl hover:bg-indigo-50 transition-colors">
                Reservar Cita
              </button>
              <button className="border border-indigo-400 text-white font-semibold px-8 py-3 rounded-xl hover:bg-indigo-800 transition-colors">
                Contactar Soporte
              </button>
            </div>
          </div>
        </section>

      </div>
    </main>
    )
}
