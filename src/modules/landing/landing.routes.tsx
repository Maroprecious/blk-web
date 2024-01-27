import { RouteType } from "@/router/router.types";
import { BRProgress } from "@/shared/components/page-progress/page-progress";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/home/home.page"));
const AboutPage = lazy(() => import("./pages/about/about.page"));
const SingleRetreatPage = lazy(
  () => import("./pages/singleRetreat/singleRetreat.page")
);
const RetreatCalendar = lazy(
  () => import("./pages/retreatCalendar/retreatCalendar.page")
);
const Herbalpeadia = lazy(
  () => import("./pages/herbalpeadia/herbalpeadia.page")
);
const HerbalProduct = lazy(
  () => import("./pages/herbalpeadia/herbalProduct.page")
);
const Store = lazy(() => import("./pages/store/store.page"));
const ProductDetails = lazy(
  () => import("../../components/landing/products/ProductDetails")
);
const StoreDetails = lazy(() => import("./pages/store/StoreItemDetail.page"));
const Login = lazy(() => import("./pages/login/login.page"));
const Signup = lazy(() => import("./pages/signup/signup.page"));
const ForgotPassword = lazy(
  () => import("./pages/forgotPassword/forgotPassword.page")
);
const Dashbaord = lazy(() => import("../admin/pages/dashboard/dashboard.page"));
const Analytics = lazy(() => import("../admin/pages/analytics/analytics.page"));
export const landingPaths = [
  "",
  "/",
  "about",
  "singleRetreat",
  "retreatCalendar",
  "herbalpeadia",
  "herbalProduct",
  "store",
  "store/:productId",
  "herbs/:productId",
  "login",
  "signup",
  "forgotpassword",
  "admin/dashboard",
  "admin/analytics",
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
    path: "about",
    element: (
      <Suspense fallback={<BRProgress />}>
        <AboutPage />
      </Suspense>
    ),
  },
  {
    path: "singleRetreat",
    element: (
      <Suspense fallback={<BRProgress />}>
        <SingleRetreatPage />
      </Suspense>
    ),
  },
  {
    path: "retreatCalendar",
    element: (
      <Suspense fallback={<BRProgress />}>
        <RetreatCalendar />
      </Suspense>
    ),
  },
  {
    path: "herbalpeadia",
    element: (
      <Suspense fallback={<BRProgress />}>
        <Herbalpeadia />
      </Suspense>
    ),
  },
  {
    path: "herbalProduct",
    element: (
      <Suspense fallback={<BRProgress />}>
        <HerbalProduct />
      </Suspense>
    ),
  },
  {
    path: "store",
    element: (
      <Suspense fallback={<BRProgress />}>
        <Store />
      </Suspense>
    ),
  },
  {
    path: "store/:productId",
    element: (
      <Suspense fallback={<BRProgress />}>
        <StoreDetails />
      </Suspense>
    ),
  },
  {
    path: "herbs/:productId",
    element: (
      <Suspense fallback={<BRProgress />}>
        <ProductDetails />
      </Suspense>
    ),
  },
  {
    path: "login",
    element: (
      <Suspense fallback={<BRProgress />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "signup",
    element: (
      <Suspense fallback={<BRProgress />}>
        <Signup />
      </Suspense>
    ),
  },
  {
    path: "forgotpassword",
    element: (
      <Suspense fallback={<BRProgress />}>
        <ForgotPassword />
      </Suspense>
    ),
  },
  {
    path: "admin/dashboard",
    element: (
      <Suspense fallback={<BRProgress />}>
        <Dashbaord />
      </Suspense>
    ),
  },
  {
    path: "admin/analytics",
    element: (
      <Suspense fallback={<BRProgress />}>
        <Analytics />
      </Suspense>
    ),
  },
];
