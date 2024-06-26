import Header from "@/shared/components/customersPanel/header/header";
import Filters from "@/components/customers/Filters";
import "./order.css";
import { DataTable } from "./Table";
import { columns } from "./columns";
import { OrderItem } from "@/modules/landing/resouces";
const Orders = () => {
  return (
    <div>
      <Header />
      <section className="px-8 mt-36 flex justify-end gap-12">
        <Filters />
      </section>

      <section className="px-8 mt-10  mb-[62px] lg:mb-[121px]">
        <DataTable columns={columns} data={OrderItem} />
      </section>
    </div>
  );
};

export default Orders;
