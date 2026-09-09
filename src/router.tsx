import React, {lazy, Suspense} from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

// Import layouts
import FullLayout from "@/layout/FullLayout.tsx";

//Lazy load component for code splitting
const HomeView = lazy(() =>
  import('@layout/HomeLayout.tsx').then((module) => ({ default: module.default }))
);
const DefaultLayout = lazy(() =>
  import('@layout/DefaultLayout.tsx').then((module) => ({ default: module.default }))
);

// 2. Componente de carga mientras se descarga la feature (Fallback)
const LoadingFallback: React.FC = () => (
  <div className="flex h-screen w-full items-center justify-center p-6">
    <div className="text-gray-500 font-medium">Cargando módulo...</div>
  </div>
);

export const router = createBrowserRouter([
    {
        path : "/",
        element: <FullLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/home" replace />
            },
            {
                path: "/home",
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <HomeView />
                    </Suspense>
                )
            },
        ]    
    },
    {
        path: "/default",
        element: <DefaultLayout />
    }
]);