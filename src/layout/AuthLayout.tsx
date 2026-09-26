import { Outlet } from "react-router-dom";
import { PawIcon, StethoscopePattern } from "@features/auth/index.ts";
import { Icon } from "@shared/index.ts";
import { Link } from "@shared/components/Link.tsx";
export default function AuthLayout() {
  return (
    <div className="min-h-screen w-full bg-[#E5F3F4] relative overflow-hidden flex flex-col justify-between font-sans selection:bg-[#008C99] selection:text-white">
      {/* Dynamic Background Watermark Icons Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-12 p-8 text-[#0E707B] overflow-hidden select-none">
        {Array.from({ length: 48 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-center transform rotate-12 transition-transform hover:scale-110"
          >
            {i % 2 === 0
              ? <PawIcon className="w-10 h-10 text-[#008C99]" />
              : <StethoscopePattern className="w-10 h-10 text-[#72C6CB]" />}
          </div>
        ))}
      </div>

      {/* Decorative Gradient Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#83CFD3]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#F48C3C]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Bar tailored for the Auth Portal */}
      <header className="relative z-10 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center space-x-3 cursor-pointer group">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md border border-[#83CFD3]/40 group-hover:scale-105 transition-transform">
            <Icon className="w-7 h-7 text-[#0E707B]" />
          </div>
          <div>
            <h1 className="font-extrabold text-xl tracking-wider text-[#0E707B] leading-tight flex items-center gap-1">
              LUMEN{" "}
              <span className="text-xs bg-[#0E707B] text-white px-2 py-0.5 rounded-full font-bold">
                VET
              </span>
            </h1>
            <p className="text-[10px] font-bold text-[#0E707B]/80 tracking-widest uppercase">
              San Miguel de Tucumán
            </p>
          </div>
        </div>

        <Link
          to="/"
          className="bg-white/80 hover:bg-white text-[#0E707B] font-bold text-xs px-4 py-2 rounded-full border border-[#83CFD3]/50 shadow-sm backdrop-blur-sm transition-all"
        >
          ← Volver a la Landing
        </Link>
      </header>

      {/* Main Content Area Container */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-6">
        <Outlet />
      </main>

      {/* Footer info */}
      <footer className="relative z-10 py-4 text-center text-xs font-semibold text-[#0E707B]/70">
        Clínica Veterinaria LUMEN Tucumán © {new Date().getFullYear()}{" "}
        • Atención y Amor para tu Mascota
      </footer>
    </div>
  );
}
