import React, {lazy, Suspense} from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { LoadingFallback } from '@shared/components/LoadingFallback.tsx';
// Import layouts
import FullLayout from "@/layout/FullLayout.tsx";

//Lazy load component for code splitting
const HomeView = lazy(() =>
  import('@layout/HomeLayout.tsx').then((module) => ({ default: module.default }))
);
const DefaultLayout = lazy(() =>
  import('@layout/DefaultLayout.tsx').then((module) => ({ default: module.default }))
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