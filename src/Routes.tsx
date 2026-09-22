import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { LoadingFallback } from "@/shared/index.ts";
// Import layouts
import FullLayout from "@/layout/FullLayout.tsx";
import ErrorLayout from "@/layout/ErrorLayout.tsx";
//Lazy load component for code splitting
const HomeView = lazy(() =>
  import("@layout/HomeLayout.tsx").then((module) => ({
    default: module.default,
  }))
);
const ServicesView = lazy(() =>
  import("@layout/ServicesLayout.tsx").then((module) => ({
    default: module.default,
  }))
);
const AboutView = lazy(() =>
  import("@layout/AboutLayout.tsx").then((module) => ({
    default: module.default,
  }))
);

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <FullLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <HomeView />
          </Suspense>
        ),
      },
      {
        path: "/services",
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ServicesView />
          </Suspense>
        ),
      },
      {
        path: "/about",
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <AboutView />
          </Suspense>
        ),
      },
    ],
  },
]);
