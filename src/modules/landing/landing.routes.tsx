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
const ForgotPasswordPage = lazy(
  () => import("./pages/auth/forgot-password.page")
);
const ResetPasswordPage = lazy(
  () => import("./pages/auth/reset-password.page.tsx")
);
const HomeTab = lazy(() => import("./pages/home/home.tab.tsx"));
const HerbalpaediaPage = lazy(
  () => import("./pages/herbalpaedia/herbalpaedia.page.tsx")
);
const HerbalpaediaPageId = lazy(
  () => import("./pages/herbalpaedia/herbalpaedia-id.page.tsx")
);
const StorPage = lazy(() => import("./pages/stores/store.page.tsx"));
const StoreIdPage = lazy(() => import("./pages/stores/store.id.page.tsx"));
const Checkout = lazy(() => import("./pages/stores/checkout.tsx"));
const Profile = lazy(() => import("./pages/auth/my-profile.tsx"));
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
  () => import("./pages/herbalpedia/ProductDetails.tsx")
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
const AdminRetreats = lazy(() => import("../admin/pages/retreat/retreat.page"));
const AdminRetreat = lazy(
  () => import("../admin/pages/retreat/retreatDetail.page.tsx")
);
const CreateRetreat = lazy(
  () => import("../admin/pages/retreat/createRetreat/createaRetreat.tsx")
);
const CreateRetreat2 = lazy(
  () => import("../admin/pages/retreat/createRetreat/createRetreat2.tsx")
);
const CreateRetreat3 = lazy(
  () => import("../admin/pages/retreat/createRetreat/createRetreat3.tsx")
);
const Adminherbalpedia = lazy(
  () => import("../admin/pages/herbalpedia/herbalpedia.page.tsx")
);
const AdminherbalpediaItems = lazy(
  () => import("../admin/pages/herbalpedia/herbalpeadiaItem.tsx")
);
const AdminCustomers = lazy(
  () => import("../admin/pages/customers/customer.page.tsx")
);
const AdminCustomersDetails = lazy(
  () => import("../admin/pages/customers/CustomersDetails.tsx")
);
const CustomerHomePage = lazy(() => import("../customers/home/home.tsx"));
const CustomerHerbalpedia = lazy(
  () => import("../customers/herbalpedia/Herbalpedia.tsx")
);
const CustomerGallery = lazy(() => import("../customers/gallery/Gallery.tsx"));
const Customertore = lazy(() => import("../customers/store/Store.tsx"));
const CustomerOrders = lazy(() => import("../customers/orders/Orders.tsx"));

export const landingPaths = [
  "",
  "/",
  "about",
  "/create-account",
  "/customize-profile",
  "/login",
  "/forgot-password",
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
  "herbalpedia/:herbId",
  "login",
  "signup",
  "forgot-password",
  "reset-password",
  "admin/dashboard",
  "admin/analytics",
  "admin/store",
  "admin/orders",
  "admin/orders/all",
  "admin/retreat",
  "admin/retreat/:retreatId",
  "admin/createRetreat",
  "admin/createRetreat2",
  "admin/createRetreat3",
  "admin/herbalpaedia",
  "admin/herbalpaedia/:herbId",
  "admin/customers",
  "admin/customers/:customersId",
  "customers/home",
  "customers/herbalpedia",
  "customers/store",
  "customers/gallery",
  "customers/orders",
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
    path: "herbalpedia/:herbId",
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
    path: "admin/retreat",
    element: (
      <SuspenseWrapper>
        <AdminRetreats />
      </SuspenseWrapper>
    ),
  },
  {
    path: "admin/createRetreat",
    element: (
      <SuspenseWrapper>
        <CreateRetreat />
      </SuspenseWrapper>
    ),
  },
  {
    path: "admin/createRetreat2",
    element: (
      <SuspenseWrapper>
        <CreateRetreat2 />
      </SuspenseWrapper>
    ),
  },
  {
    path: "admin/createRetreat3",
    element: (
      <SuspenseWrapper>
        <CreateRetreat3 />
      </SuspenseWrapper>
    ),
  },
  {
    path: "admin/retreat/:retreatId",
    element: (
      <SuspenseWrapper>
        <AdminRetreat />
      </SuspenseWrapper>
    ),
  },
  {
    path: "admin/herbalpaedia",
    element: (
      <SuspenseWrapper>
        <Adminherbalpedia />
      </SuspenseWrapper>
    ),
  },
  {
    path: "admin/herbalpaedia/:herbId",
    element: (
      <SuspenseWrapper>
        <AdminherbalpediaItems />
      </SuspenseWrapper>
    ),
  },
  {
    path: "admin/customers",
    element: (
      <SuspenseWrapper>
        <AdminCustomers />
      </SuspenseWrapper>
    ),
  },
  {
    path: "admin/customers/:customersId",
    element: (
      <SuspenseWrapper>
        <AdminCustomersDetails />
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
    path: "/reset-password",
    element: (
      <Suspense fallback={<BRProgress />}>
        <ResetPasswordPage />
      </Suspense>
    ),
  },
  {
    path: "/home-tab",
    element: (
      <Suspense fallback={<BRProgress />}>
        <HomeTab />
      </Suspense>
    ),
  },
  {
    path: "/herbalpaedia",
    element: (
      <Suspense fallback={<BRProgress />}>
        <HerbalpaediaPage />
      </Suspense>
    ),
  },
  {
    path: "/herbalpaedia/:id",
    element: (
      <Suspense fallback={<BRProgress />}>
        <HerbalpaediaPageId />
      </Suspense>
    ),
  },
  {
    path: "/store",
    element: (
      <Suspense fallback={<BRProgress />}>
        <StorPage />
      </Suspense>
    ),
  },
  {
    path: "/store/:id",
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
    path: "customers/home",
    element: (
      <Suspense fallback={<BRProgress />}>
        <CustomerHomePage />
      </Suspense>
    ),
  },
  {
    path: "customers/herbalpedia",
    element: (
      <Suspense fallback={<BRProgress />}>
        <CustomerHerbalpedia />
      </Suspense>
    ),
  },
  {
    path: "customers/store",
    element: (
      <Suspense fallback={<BRProgress />}>
        <Customertore />
      </Suspense>
    ),
  },
  {
    path: "customers/gallery",
    element: (
      <Suspense fallback={<BRProgress />}>
        <CustomerGallery />
      </Suspense>
    ),
  },
  {
    path: "customers/orders",
    element: (
      <Suspense fallback={<BRProgress />}>
        <CustomerOrders />
      </Suspense>
    ),
  },
];
