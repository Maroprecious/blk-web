import Layout from "@/shared/admin/layout/Layout";
import { IoMdAdd } from "react-icons/io";
import { columns } from "./columns";
import { DataTable } from "./Table";
import { storeItems } from "@/modules/landing/resouces";
import ImageUpload from "@/components/ui/UploadThumbnail";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
const PRODUCT_URL = "/products";
import axios from "@/api/axios";

const Store = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    desc: "",
    quantity: "",
    images: [],
    categoryId: "",
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleAddProducts = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw new Error("Access token not found");
      }

      const response = await axios.post(
        PRODUCT_URL,
        { formData },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Product created:", response.data);

      localStorage.setItem("accessToken", accessToken);
      setFormData({
        name: "",
        price: "",
        desc: "",
        quantity: "",
        images: [],
        categoryId: "",
      });
    } catch (error: any) {
      console.error(
        "Error creating product:",
        error.response ? error.response.data : error.message
      );
    }
  };

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
              <SheetTitle className="font-amsterdam text-[#946C3C] text-2xl font-medium">
                Add new product
              </SheetTitle>
              <SheetTitle className="font-arapey text-[#667085] font-light">
                Enter the product details to start selling.
              </SheetTitle>
              <SheetDescription>
                <form
                  onSubmit={handleAddProducts}
                  className="w-full grid items-center mb-[116px] font-arapey"
                >
                  <div className="lg:grid gap-x-6 gap-y-4">
                    <div className="mt-6">
                      <label className="font-light text-[#101828]">
                        Name of product
                      </label>
                      <input
                        type="text"
                        placeholder="Enter name of Product"
                        className="border w-full mt-2 bg-transparent block  p-3 placeholder:text-base outline-none placeholder:text-[#667085] border-[#EAECF0] font-arapey font-light"
                        onChange={(e) => handleChange(e)}
                        value={formData.name}
                        name="name"
                        required
                      />
                    </div>
                    <div className="mt-4">
                      <label className="font-light text-[#101828]">
                        Price of product
                      </label>
                      <div className="relative">
                        <p className="absolute font-arapey px-2 font-light flex items-center  text-[#667085] top-[12px]">
                          USD ($)
                          <div className="bg-[#EAECF0] h-4 w-[1px] ml-2"></div>
                        </p>
                        <input
                          type="text"
                          placeholder="0.00"
                          className="border w-full mt-2 bg-transparent block pl-[80px]  p-3 placeholder:text-base outline-none placeholder:text-[#667085] border-[#EAECF0] font-arapey font-light"
                          value={formData.price}
                          name="price"
                          onChange={handleChange}
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
                        className="border w-full mt-2 bg-transparent block  p-3 placeholder:text-base outline-none placeholder:text-[#667085] border-[#EAECF0] font-arapey font-light"
                        onChange={handleChange}
                        value={formData.quantity}
                        name="quantity"
                      />
                    </div>
                    <div>
                      <label htmlFor="">Country</label>
                      <select
                        value="–Select country–"
                        className="border w-full mt-2 outline-none pr-10 border-[#EAECF0] bg-transparent block placeholder:text-[#667085] p-3"
                      >
                        <option value="" className="">
                          -Select Country-
                        </option>
                      </select>
                    </div>
                    <ImageUpload />
                  </div>
                  <div className="p-6 flex gap-4 border-t border-[#EAECF0] absolute bottom-0 w-full left-0">
                    <button className="border border-[#946C3C] h-12 text-[#946C3C] uppercase flex-1">
                      cancel
                    </button>
                    <button
                      type="submit"
                      className="border border-[#946C3C] h-12 uppercase bg-[#946C3C] text-white flex-1"
                    >
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
