import Layout from "@/shared/admin/layout/Layout";

// const analytics = () => {
//   return <Layout>Analytics</Layout>;
// };

// export default analytics;

import RetreatAnalytics from "./RetreatAnalytics";
import RetreatRevenue from "./RetreatRevenue";
import OrdersAnalytics from "./OrdersAnalytics";

function Analytics() {
  return (
    <Layout>
      <main className="p-4 mb-40">
        <section>
          <div className="flex gap-6  w-full">
            <OrdersAnalytics />
            <RetreatAnalytics />
          </div>
          <RetreatRevenue />
        </section>
      </main>
    </Layout>
  );
}

export default Analytics;
