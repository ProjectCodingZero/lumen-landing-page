import React from "react";

function LocationAndReviewsCard() {
    return (
    <div className="bg-[#e4f2f3] rounded-2xl p-6 shadow-md border border-teal-100 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Testimonios */}
      <div>
        <h3 className="font-extrabold text-xs text-gray-800 uppercase mb-4 text-center md:text-left">
          LO QUE NUESTROS CLIENTES DICEN
        </h3>
        <div className="space-y-3">
          <div className="bg-white p-3 rounded-xl shadow-sm text-center">
            <img src="https://i.pravatar.cc/100?img=32" alt="Marta" className="w-10 h-10 rounded-full mx-auto mb-1" />
            <p className="font-bold text-xs text-gray-800">Marta C.</p>
            <p className="text-[10px] text-gray-500 italic">"Excelente atención y comodidad."</p>
          </div>
          <div className="bg-white p-3 rounded-xl shadow-sm text-center">
            <img src="https://i.pravatar.cc/100?img=12" alt="Pedro" className="w-10 h-10 rounded-full mx-auto mb-1" />
            <p className="font-bold text-xs text-gray-800">Pedro R.</p>
            <p className="text-[10px] text-gray-500 italic">"Mi veterinaria de confianza."</p>
          </div>
        </div>
      </div>

      {/* Ubicación */}
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="font-extrabold text-xs text-gray-800 uppercase mb-3 text-center md:text-left">
            UBICACIÓN Y CONTACTO
          </h3>
          <div className="bg-gray-200 h-24 rounded-lg flex items-center justify-center text-gray-500 text-xs font-semibold mb-3">
            📍 Mapa San Miguel de Tucumán
          </div>
          <ul className="text-[11px] space-y-1.5 text-gray-700">
            <li>📍 San Miguel de Tucumán, Argentina</li>
            <li>📞 921 233 5259</li>
            <li>✉️ sanfelipe@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export {LocationAndReviewsCard};