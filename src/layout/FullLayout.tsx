import {Outlet } from "react-router-dom";
import { useIsActive, Link, Icon } from "@/shared";
const linkStyle = (isActive: boolean) => `transition-colors ${isActive ? 'text-[#f1883d]' : 'text-gray-600 hover:text-[#009ba4]'}`;
function FullLayout() {

  const isActive = useIsActive();
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans text-gray-800 antialiased">
      
      {/* NAVBAR PRINCIPAL */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          
          {/* Logo y Nombre */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="text-3xl text-[#f1883d] transition-transform group-hover:scale-105">
              <Icon className="w-20 h-20" />
            </div>
            <div>
              <h1 className="font-extrabold text-lg text-[#009ba4] leading-tight tracking-tight">
                LUMEN
              </h1>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                TUCUMÁN
              </p>
            </div>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center space-x-8 font-semibold text-sm">
            <Link
              to="/"
              className={linkStyle(isActive('/home'))}
            >
              Inicio
            </Link>
            <Link
              to="/services"
              variant={`${isActive('/services') ? 'navbar_active' : 'navbar_inactive'}`}
            >
              Servicios
            </Link>
            <Link
              to="/appointments"
              variant={`${isActive('/appointments') ? 'navbar_active' : 'navbar_inactive'}`}
            >
              Turnos
            </Link>
            <Link
              to="/about"
              variant={`${isActive('/about') ? 'navbar_active' : 'navbar_inactive'}`}
            >
              Nosotros
            </Link>
            <Link
              to="/contact"
              variant={`${isActive('/contact') ? 'navbar_active' : 'navbar_inactive'}`}
            >
              Contacto
            </Link>
          </nav>

          {/* Botón Mi Mascota */}
          <div>
            <Link
              to="/my-pet"
              className="bg-[#009ba4] hover:bg-[#00838b] text-white font-bold text-sm px-5 py-2.5 rounded-full flex items-center space-x-2 shadow-sm transition-all active:scale-95"
            >
              <span>Mi Mascota</span>
              <span>🐾</span>
            </Link>
          </div>

        </div>
      </header>

      {/* CONTENIDO DINÁMICO (Vistas de la aplicación) */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* FOOTER GLOBAL */}
      <footer className="bg-white border-t border-gray-200 py-6 text-center text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© Veterinaria San Felipe & Santa Fe - San Miguel de Tucumán</p>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-[#009ba4] transition">Términos</a>
            <a href="#" className="hover:text-[#009ba4] transition">Privacidad</a>
            <a href="#" className="hover:text-[#009ba4] transition">Soporte</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default FullLayout;