import { Outlet } from "react-router-dom";
import { Footer, Header } from "@/shared/index.ts";

export default function FullLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans text-gray-800 antialiased">
      <Header />

      {/* CONTENIDO DINÁMICO (Vistas de la aplicación) */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
