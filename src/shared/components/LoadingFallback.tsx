import React from "react";
import { useTitle } from "@/shared/index.ts";
export function LoadingFallback(): React.JSX.Element {
  const setTitle = useTitle();
  setTitle("Lumen");
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-4xl font-bold text-brand-500">Cargando Pagina...</h1>
      <p className="mt-2 text-gray-600">
        Por favor, espere mientras se carga la página.
      </p>
    </div>
  );
}
