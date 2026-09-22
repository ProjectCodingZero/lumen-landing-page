import React from "react";

export function Footer(): React.JSX.Element {
  return (
    <footer className="bg-teal-200 border-t border-gray-400/50 py-6 text-center text-xs text-gray-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© Veterinaria San Felipe & Santa Fe - San Miguel de Tucumán</p>
        <div className="flex space-x-4 text-gray-600">
          <a href="#" className="hover:text-brand-500 transition">Términos</a>
          <a href="#" className="hover:text-brand-500 transition">Privacidad</a>
          <a href="#" className="hover:text-brand-500 transition">Soporte</a>
        </div>
      </div>
    </footer>
  );
}
