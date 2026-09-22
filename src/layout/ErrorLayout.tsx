import { Link, useTitle } from "@/shared/index.ts";
export default function ErrorLayout() {
  const setTitle = useTitle();
  setTitle("Lumen - Error");
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-4xl font-bold text-red-600">¡Ups! Algo salió mal.</h1>
      <p className="mt-2 text-gray-600">
        Ha ocurrido un error inesperado en la aplicación.
      </p>
      <Link
        to="/"
        variant="button"
        className="mt-6 inline-flex rounded-lg px-6 text-lg py-2 border-2 border-transparent transition-colors hover:border-current text-red-500/80 hover:text-red-700 bg-brand-300/60 hover:bg-brand-300/80"
        about="Volver al inicio"
      >
        Inicio
      </Link>
    </main>
  );
}
