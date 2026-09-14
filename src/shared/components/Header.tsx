import React from 'react';
import { Link, Icon, useIsActive } from '@/shared/index.ts';

const linkStyle = (isActive: boolean) => `transition-colors ${isActive ? 'text-brand-500' : 'hover:text-teal-500'}`;
export function Header(): React.JSX.Element {
    const isActive = useIsActive();
    return (
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          
          {/* Logo y Nombre */}
          <Link
          to="/" 
          className="flex items-center space-x-3 group">
            <div className="text-3xl text-brand-500 transition-transform hover:scale-105 ease-out duration-300">
              <Icon className="w-20 h-20" />
            </div>
            <div>
              <h1 className="group-hover:text-teal-700 ease-in-out duration-300 text-teal-400 font-extrabold text-lg text-brand-500 leading-tight tracking-tight">
                LUMEN
              </h1>
              <p className="text-[10px] group-hover:text-gray-800 ease-in-out duration-300 font-bold text-gray-500 uppercase tracking-widest">
                TUCUMÁN
              </p>
            </div>
          </Link>

          {/* Navegación Desktop */}
          <nav className="ease-out duration-300 hidden md:flex items-center space-x-8 font-semibold text-sm">
            <Link
              
              about="Ir a la página de inicio"
              to="/"
              className={linkStyle(isActive('/home'))}
            >
              Inicio
            </Link>
            <Link
              to="/services"
              className={linkStyle(isActive('/services'))}
            >
              Servicios
            </Link>
            <Link
              to="/appointments"
              className={linkStyle(isActive('/appointments'))}
            >
              Turnos
            </Link>
            <Link
              to="/about"
              className={linkStyle(isActive('/about'))}
            >
              Nosotros
            </Link>
            <Link
              to="/contact"
              className={linkStyle(isActive('/contact'))}
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
    );
}