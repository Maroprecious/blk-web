import { RouteType } from "@/router/router.types";
import { BRProgress } from "@/shared/components/page-progress/page-progress";
import { Suspense, lazy } from "react";
import RetreatPage from "./pages/retreats/retreats.page.tsx";
import Order from "./pages/orders/order.page.tsx";

const HomePage = lazy(() => import("./pages/home/home.page"));
const CreateAccountPage = lazy(
  () => import("./pages/auth/create-account.page")
);
const CustomizeProfilePage = lazy(
  () => import("./pages/auth/customize-profile.page")
);
const LoginPage = lazy(() => import("./pages/auth/login.page"));
const ForgotPasswordPage = lazy(() => import("./pages/auth/forgot-password.page"));
const ResetPasswordPage = lazy(() => import("./pages/auth/reset-password.page.tsx"));
const HomeTab = lazy(() => import("./pages/home/home.tab.tsx"));
const HerbalpaediaPage = lazy(() => import("./pages/herbalpaedia/herbalpaedia.page.tsx"));
const HerbalpaediaPageId = lazy(() => import("./pages/herbalpaedia/herbalpaedia-id.page.tsx"));
const StorPage = lazy(() => import("./pages/stores/store.page.tsx"));
const StoreIdPage = lazy(() => import("./pages/stores/store.id.page.tsx"));
const Checkout = lazy(() => import("./pages/stores/checkout.tsx"))
const Profile = lazy(() => import("./pages/auth/my-profile.tsx"))
const Retreats = lazy(() =>import("./pages/retreats/retreats.page.tsx"))
const RetreatPageId = lazy(() => import("./pages/retreats/retreats-id.page.tsx"))
const OrderPage = lazy(() => import('./pages/orders/order.page.tsx'))

export const landingPaths = [
  "",
  "/",
  "about",
  "/create-account",
  "/customize-profile",
  "/login",
  '/forgot-password',
  "/reset-password",
  "/home-tab",
  "/herbalpaedia",
  "/herbalpaedia/:id",
  "/store",
  "/store/:id",
  "/checkout",
  "/my-profile",
  "/retreats",
  "/retreats/:id",
  "/orders"
] as const;

export const landingRoutes: RouteType[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<BRProgress />}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: "/create-account",
    element: (
      <Suspense fallback={<BRProgress />}>
        <CreateAccountPage />
      </Suspense>
    ),
  },
  {
    path: "/customize-profile",
    element: (
      <Suspense fallback={<BRProgress />}>
        <CustomizeProfilePage />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<BRProgress />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <Suspense fallback={<BRProgress />}>
        <ForgotPasswordPage />
      </Suspense>
    ),
  },
  {
    path: '/reset-password',
    element: (
      <Suspense fallback={<BRProgress />}>
        <ResetPasswordPage />
      </Suspense>
    ),
  },
  {
    path: '/home-tab',
    element: (
      <Suspense fallback={<BRProgress />}>
        <HomeTab />
      </Suspense>
    ),
  },
  {
    path: '/herbalpaedia',
    element: (
      <Suspense fallback={<BRProgress />}>
        <HerbalpaediaPage />
      </Suspense>
    ),
  },
  {
    path: '/herbalpaedia/:id',
    element: (
      <Suspense fallback={<BRProgress />}>
        <HerbalpaediaPageId />
      </Suspense>
    ),
  },
  {
    path: '/store',
    element: (
      <Suspense fallback={<BRProgress />}>
        <StorPage />
      </Suspense>
    ),
  },
  {
    path: '/store/:id',
    element: (
      <Suspense fallback={<BRProgress />}>
        <StoreIdPage />
      </Suspense>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Suspense fallback={<BRProgress />}>
        <Checkout />
      </Suspense>
    ),
  },
  {
    path: "/my-profile",
    element: (
      <Suspense fallback={<BRProgress />}>
        <Profile />
      </Suspense>
    ),
  },
  {
    path: "/retreats",
    element: (
      <Suspense fallback={<BRProgress />}>
        <RetreatPage />
      </Suspense>
    ),
  },
  {
    path: '/retreats/:id',
    element: (
      <Suspense fallback={<BRProgress />}>
        <RetreatPageId />
      </Suspense>
    ),
  },
  {
    path: '/orders',
    element: (
      <Suspense fallback={<BRProgress />}>
        <Order />
      </Suspense>
    ),
  },
];
