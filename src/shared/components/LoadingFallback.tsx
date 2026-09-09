import React from 'react';
export function LoadingFallback(): React.JSX.Element {
  return (
    <div className="flex h-screen w-full items-center justify-center p-6">
      <div className="text-gray-500 font-medium">Cargando pagina...</div>
    </div>
  );
}