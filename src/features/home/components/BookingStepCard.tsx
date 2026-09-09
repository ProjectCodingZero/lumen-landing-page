import React from 'react';

function BookingStepCard() {
    return (
    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col justify-between">
      <h3 className="text-center font-extrabold text-lg text-gray-800 uppercase mb-4">
        NUESTROS SERVICIOS ESPECIALIZADOS
      </h3>

      <div className="bg-[#e4f2f3] rounded-xl p-5 border border-teal-100">
        <h4 className="text-center font-bold text-gray-800 uppercase text-sm mb-4">
          RESERVA TU TURNO EN 3 PASOS SIMPLES
        </h4>
        <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold text-gray-700">
          <div className="flex flex-col items-center space-y-2">
            <span className="bg-[#f1883d] text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">1</span>
            <p>Elige tu Mascota</p>
            <div className="text-xl">🐶 🐱</div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <span className="bg-[#f1883d] text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">2</span>
            <p>Selecciona Fecha</p>
            <div className="bg-white p-2 rounded shadow-sm text-xs mt-1 w-full max-w-[100px]">📅</div>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <span className="bg-[#f1883d] text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">3</span>
            <p>Confirma Datos</p>
            <div className="bg-white p-2 rounded shadow-sm w-full max-w-[100px] space-y-1">
              <div className="h-2 bg-gray-200 rounded"></div>
              <div className="h-2 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export {BookingStepCard};