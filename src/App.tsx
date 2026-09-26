import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "@shared/index.ts"; // o la ruta donde esté tu provider
import { Routes } from "@/Routes.tsx";

export function App() {
  return (
    <AuthProvider>
      {/* Aquí puedes agregar otros providers si los tienes (ej: QueryClientProvider, ThemeProvider) */}
      <RouterProvider router={Routes} />
    </AuthProvider>
  );
}
