import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { LoadingFallback } from "@/shared/index.ts";
// Import layouts
import { FullLayout, ErrorLayout, AuthLayout } from "@/layout/index.ts";
//Lazy load component for code splitting
const HomeView = lazy(() =>
  import("@/view/index.ts").then((module) => ({
    default: module.HomeView,
  }))
);
const ServicesView = lazy(() =>
  import("@/view/index.ts").then((module) => ({
    default: module.ServicesView,
  }))
);
const AboutView = lazy(() =>
  import("@/view/index.ts").then((module) => ({
    default: module.AboutView,
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
        element: (
        <Suspense fallback={<LoadingFallback />}>
          <HomeView />
        </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <HomeView />
          </Suspense>
        ),
      },
      {
        path: "/services",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ServicesView />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <AboutView />
          </Suspense>
        ),
      },
    ],
  },
  {
      path: "/auth",
      element: <AuthLayout/>,
      errorElement: <ErrorLayout />,
      children: [
        {
          index: true,
        }
      ]
  }
]);
