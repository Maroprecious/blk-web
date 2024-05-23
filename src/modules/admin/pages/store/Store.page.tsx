import Layout from "@/shared/admin/layout/Layout";
import { IoMdAdd } from "react-icons/io";
import { columns } from "./columns";
import { DataTable } from "./Table";
import DrawerModal from "@/components/dashboard/drawerModal";

import useFetch from "@/hooks/useFetch";
import { URL } from "@/api/axios";
import { useState } from "react";
const Store = () => {
  const { data, loading } = useFetch(`${URL}/products`, "GET");
  // console.log(loading, data?.data);
  const storeItems = data?.data?.data;
  // console.log(loading, storeItems);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Layout>
      <section className="flex justify-end">
        <button
          onClick={toggleDrawer}
          className="bg-[#CF956F] uppercase gap-1 w-[208px] text-white  py-2 flex justify-center items-center"
        >
          {" "}
          <IoMdAdd /> Add new product
        </button>
      </section>
      <section className="mt-6">
        {!loading && <DataTable columns={columns} data={storeItems} />}
      </section>
      <DrawerModal isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </Layout>
  );
};

export default Store;
