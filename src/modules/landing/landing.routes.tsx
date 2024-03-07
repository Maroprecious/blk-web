/* eslint-disable react-refresh/only-export-components */
import { RouteType } from "@/router/router.types";
import { BRProgress } from "@/shared/components/page-progress/page-progress";
import { Suspense, lazy } from "react";
import ScrollToTop from "@/lib/utils";

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
const Gallery = lazy(() => import("./pages/gallery/gallery.page"));
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
const RequestPassword = lazy(
  () => import("./pages/requestPassword/requestPassword.page")
);
const Dashbaord = lazy(() => import("../admin/pages/dashboard/dashboard.page"));
const Analytics = lazy(() => import("../admin/pages/analytics/analytics.page"));
const AdminStore = lazy(() => import("../admin/pages/store/Store.page"));
const AdminOrder = lazy(() => import("../admin/pages/orders/orders.page"));
const AllOrders = lazy(() => import("../admin/pages/orders/AllOrders.page"));

export const landingPaths = [
  "",
  "/",
  "about",
  "single-retreat",
  "retreat-calendar",
  "herbalpeadia",
  "herbal-product",
  "gallery",
  "store",
  "store/:productId",
  "herbs/:productId",
  "login",
  "signup",
  "forgot-password",
  "request-password",
  "admin/dashboard",
  "admin/analytics",
  "admin/store",
  "admin/orders",
  "admin/orders/all",
] as const;

const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<BRProgress />}>
    <ScrollToTop />
    {children}
  </Suspense>
);

export const landingRoutes: RouteType[] = [
  {
    path: "/",
    element: (
      <SuspenseWrapper>
        <HomePage />
      </SuspenseWrapper>
    ),
  },
  {
    path: "about",
    element: (
      <SuspenseWrapper>
        <AboutPage />
      </SuspenseWrapper>
    ),
  },
  {
    path: "single-retreat",
    element: (
      <SuspenseWrapper>
        <SingleRetreatPage />
      </SuspenseWrapper>
    ),
  },
  {
    path: "retreat-calendar",
    element: (
      <SuspenseWrapper>
        <RetreatCalendar />
      </SuspenseWrapper>
    ),
  },
  {
    path: "herbalpeadia",
    element: (
      <SuspenseWrapper>
        <Herbalpeadia />
      </SuspenseWrapper>
    ),
  },
  {
    path: "herbal-product",
    element: (
      <SuspenseWrapper>
        <HerbalProduct />
      </SuspenseWrapper>
    ),
  },
  {
    path: "gallery",
    element: (
      <SuspenseWrapper>
        <Gallery />
      </SuspenseWrapper>
    ),
  },
  {
    path: "store",
    element: (
      <SuspenseWrapper>
        <Store />
      </SuspenseWrapper>
    ),
  },
  {
    path: "store/:productId",
    element: (
      <SuspenseWrapper>
        <StoreDetails />
      </SuspenseWrapper>
    ),
  },
  {
    path: "herbs/:productId",
    element: (
      <SuspenseWrapper>
        <ProductDetails />
      </SuspenseWrapper>
    ),
  },
  {
    path: "login",
    element: (
      <SuspenseWrapper>
        <Login />
      </SuspenseWrapper>
    ),
  },
  {
    path: "signup",
    element: (
      <SuspenseWrapper>
        <Signup />
      </SuspenseWrapper>
    ),
  },
  {
    path: "forgot-password",
    element: (
      <SuspenseWrapper>
        <ForgotPassword />
      </SuspenseWrapper>
    ),
  },
  {
    path: "request-password",
    element: (
      <SuspenseWrapper>
        <RequestPassword />
      </SuspenseWrapper>
    ),
  },
  {
    path: "admin/dashboard",
    element: (
      <SuspenseWrapper>
        <Dashbaord />
      </SuspenseWrapper>
    ),
  },
  {
    path: "admin/analytics",
    element: (
      <SuspenseWrapper>
        <Analytics />
      </SuspenseWrapper>
    ),
  },
  {
    path: "admin/store",
    element: (
      <SuspenseWrapper>
        <AdminStore />
      </SuspenseWrapper>
    ),
  },
  {
    path: "admin/orders",
    element: (
      <SuspenseWrapper>
        <AdminOrder />
      </SuspenseWrapper>
    ),
  },
  {
    path: "admin/orders/all",
    element: (
      <SuspenseWrapper>
        <AllOrders />
      </SuspenseWrapper>
    ),
  },
];
