import { landingRoutes } from "@/modules/landing/landing.routes";
import { RouteObject, createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter(landingRoutes as RouteObject[]);
