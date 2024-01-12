import { RouteType } from "@/router/router.types";
import { BRProgress } from "@/shared/components/page-progress/page-progress";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/home/home.page"));

export const landingPaths = ["", "/", "about"] as const;

export const landingRoutes: RouteType[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<BRProgress />}>
        <HomePage />
      </Suspense>
    ),
  },
];
