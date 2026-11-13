import { RouterProvider } from "react-router-dom";
import { Routes } from "@/Routes.tsx";

export function App() {
  return (
    /* Aquí puedes agregar providers si los tienes (ej: QueryClientProvider, ThemeProvider) */
    <RouterProvider router={Routes} />
  );
}
