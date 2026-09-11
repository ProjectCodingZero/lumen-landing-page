import React from 'react';
import { Button } from "@/shared";

export function HeroSection(): React.JSX.Element {
    return (
    <section className="relative bg-white overflow-hidden py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800"
            alt="Perro y Gato"
            className="w-full max-w-md object-cover rounded-2xl shadow-sm"
          />
        </div>

        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 uppercase tracking-tight leading-snug">
            EL CUIDADO QUE TUS MASCOTAS SE MERECEN. ATENCIÓN VETERINARIA DE CONFIANZA EN TUCUMÁN.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <Button variant="primary" size="md" className="w-full sm:w-auto bg-[#f1883d] text-white font-bold px-6 py-3.5 rounded-full shadow-md hover:opacity-90 transition flex items-center justify-center space-x-3">
              <span>RESERVAR CITA PERRO</span>
              <span>🐾</span>
            </Button>
            <Button variant="secondary" size="md" className="w-full sm:w-auto bg-[#933577] text-white font-bold px-6 py-3.5 rounded-full shadow-md hover:opacity-90 transition flex items-center justify-center space-x-3">
              <span>RESERVAR CITA GATO</span>
              <span>🐾</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
    );
}