import { PageLayout } from "@/shared/components/layout/page-layout";
import { PurchaseRecords } from "@/shared/components/profile/purchase-records";

export default function Order() {
  return (
    <PageLayout>
      <div className="w-full bg-white pt-32 min-h-[100vh] relative">
        <PurchaseRecords width='100%' />
      </div>
    </PageLayout>
  );
}
