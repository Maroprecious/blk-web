/* eslint-disable react-refresh/only-export-components */
import { RouteType } from "@/router/router.types";
import { BRProgress } from "@/shared/components/page-progress/page-progress";
import { Suspense, lazy } from "react";
import ScrollToTop from "@/lib/utils";

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
const AboutPage = lazy(() => import("./pages/about/about.page"));
const SingleRetreatPage = lazy(
  () => import("./pages/singleRetreat/singleRetreat.page")
);
const RetreatCalendar = lazy(
  () => import("./pages/retreatCalendar/retreatCalendar.page")
);
const Herbalpedia = lazy(() => import("./pages/herbalpedia/herbalpedia.page"));
const HerbalProduct = lazy(
  () => import("./pages/herbalpedia/herbalProduct.page")
);
const Gallery = lazy(() => import("./pages/gallery/gallery.page"));
const GalleryDetail = lazy(
  () => import("./pages/gallery/galleryItemDetail.page")
);
const Store = lazy(() => import("./pages/store/store.page"));
const ProductDetails = lazy(
  () => import("../../components/landing/products/ProductDetails")
);
const StoreItem = lazy(() => import("./pages/store/storeItem.page"));
const Login = lazy(() => import("./pages/login/login.page"));
const Signup = lazy(() => import("./pages/signup/signup.page"));
const ForgotPassword = lazy(
  () => import("./pages/forgotPassword/forgotPassword.page")
);
const ResetPassword = lazy(
  () => import("./pages/resetPassword/resetPassword.page")
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
  "single-retreat",
  "retreat-calendar",
  "herbalpedia",
  "herbal-product",
  "gallery",
  "gallery/:galleryId",
  "store",
  "store/:productId",
  "herbs/:productId",
  "login",
  "signup",
  "forgot-password",
  "reset-password",
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
    path: "herbalpedia",
    element: (
      <SuspenseWrapper>
        <Herbalpedia />
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
    path: "gallery/:galleryId",
    element: (
      <SuspenseWrapper>
        <GalleryDetail />
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
        <StoreItem />
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
    path: "reset-password",
    element: (
      <SuspenseWrapper>
        <ResetPassword />
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
];
