import React, { useState } from "react";

export function ContactFormCard(): React.JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  return (
    <div className="bg-[#2D3748] text-white p-8 rounded-2xl shadow-lg h-full flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold mb-4">
          Solicitar información adicional
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nombre Completo"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
              required
            />
          </div>
          <textarea
            placeholder="Comentario o mensaje"
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-[#4FD1C5] hover:bg-[#38B2AC] text-gray-900 font-bold rounded-lg transition-colors"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-600 text-center">
        <span className="text-lg font-bold tracking-wide">LUMEN TUCUMÁN</span>
      </div>
    </div>
  );
}
