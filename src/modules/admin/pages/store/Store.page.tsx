import Layout from "@/shared/admin/layout/Layout";
import { IoMdAdd } from "react-icons/io";
import { columns } from "./columns";
import { DataTable } from "./Table";
import { storeItems } from "@/modules/landing/resouces";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Store = () => {
  return (
    <Layout>
      <section className="flex justify-end">
        <Sheet>
          <SheetTrigger className="bg-[#CF956F] uppercase gap-1 w-[208px] text-white  py-2 flex justify-center items-center">
            <IoMdAdd />
            Add new product
          </SheetTrigger>
          <SheetContent className="w-[956px] bg-white">
            <SheetHeader>
              <SheetTitle className="font-recoleta text-[#946C3C] text-2xl font-medium">
                Add new product
              </SheetTitle>
              <SheetTitle className="font-maison text-[#667085] font-light">
                Enter the product details to start selling.
              </SheetTitle>
              <SheetDescription>
                <form className="w-full grid items-center mb-[116px] font-maison">
                  <div className="lg:grid gap-x-6 gap-y-4">
                    <div className="mt-6">
                      <label className="font-light text-[#101828]">
                        Name of product
                      </label>
                      <input
                        type="text"
                        placeholder="Enter name of Product"
                        className="border w-full mt-2 bg-transparent block  p-3 placeholder:text-base outline-none placeholder:text-[#667085] border-[#EAECF0] font-maison font-light"
                      />
                    </div>
                    <div className="mt-4">
                      <label className="font-light text-[#101828]">
                        Price of product
                      </label>
                      <div className="relative">
                        <p className="absolute font-maison px-2 font-light flex items-center  text-[#667085] top-[12px]">
                          USD ($)
                          <div className="bg-[#EAECF0] h-4 w-[1px] ml-2"></div>
                        </p>
                        <input
                          type="text"
                          placeholder="0.00"
                          className="border w-full mt-2 bg-transparent block pl-[80px]  p-3 placeholder:text-base outline-none placeholder:text-[#667085] border-[#EAECF0] font-maison font-light"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="font-light text-[#101828]">
                        Quantity of product
                      </label>
                      <input
                        type="text"
                        placeholder="Enter quantity"
                        className="border w-full mt-2 bg-transparent block  p-3 placeholder:text-base outline-none placeholder:text-[#667085] border-[#EAECF0] font-maison font-light"
                      />
                    </div>
                  </div>
                  <div className="p-6 flex gap-4 border-t border-[#EAECF0] absolute bottom-0 w-full left-0">
                    <button className="border border-[#946C3C] h-12 text-[#946C3C] uppercase flex-1">
                      cancel
                    </button>
                    <button className="border border-[#946C3C] h-12 uppercase bg-[#946C3C] text-white flex-1">
                      add product
                    </button>
                  </div>
                </form>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </section>
      <section className="mt-6">
        <DataTable columns={columns} data={storeItems} />
      </section>
    </Layout>
  );
};

export default Store;
