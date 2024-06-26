import Layout from "@/shared/admin/layout/Layout";
import { Link } from "react-router-dom";
import deletebtn from "@assets/icons/delete.svg";
import { IoMdAdd } from "react-icons/io";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ImageUpload from "@components/ui/UploadThumbnail";
import useFetch from "@/hooks/useFetch";
import { URL } from "@/api/axios";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
const Herbalpedia = () => {
  const { data, loading } = useFetch(`${URL}/herbalpedia`, "GET");
  const HerbsProducts = data?.data.data;
  const [formData, setFormData] = useState({
    images: ["image1.jpg"],
    name: "",
    sciName: "",
    about: "",
    medUse: "",
    spiritUse: "",
    sideEffects: "",
    relatedProductsIds: [0],
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  useFetch(`${URL}/herbalpedia`, "POST", formData);
  const validateForm = () => {
    return (
      formData.name.trim() !== "" &&
      formData.sciName.trim() !== "" &&
      formData.about.trim() !== "" &&
      formData.medUse.trim() !== "" &&
      formData.spiritUse.trim() !== "" &&
      formData.sideEffects.trim() !== ""
    );
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit the form data
      setSubmitted(true);
      setFormData({
        images: [""],
        name: "",
        sciName: "",
        about: "",
        medUse: "",
        spiritUse: "",
        sideEffects: "",
        relatedProductsIds: [0],
      });
      console.log(formData);
      error;
      submitted;
      data;
      setError("");
    } else {
      setError("Please fill out all fields.");
    }
  };
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  return (
    <Layout>
      <section className="flex justify-end mb-7">
        <section className="flex justify-end">
          <Sheet>
            <SheetTrigger className="bg-[#CF956F] uppercase gap-1 w-[208px] text-white  py-2 flex justify-center items-center">
              <IoMdAdd />
              Add new product
            </SheetTrigger>
            <SheetContent className="w-[956px]  bg-white   overflow-y-auto">
              <SheetTitle className="font-amsterdam text-[#946C3C] mb-5 text-2xl font-medium">
                Add new herb
              </SheetTitle>
              <SheetTitle className="font-arapey text-[#667085] font-light">
                Enter the product details to start selling.
              </SheetTitle>
              <SheetDescription>
                <form
                  onSubmit={handleSubmit}
                  className="w-full grid items-center mb-[116px]  font-arapey"
                >
                  <div className="lg:grid gap-x-6 gap-y-2">
                    <div className="mt-4">
                      <label className="font-light text-[#101828]">
                        Name of herb
                      </label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter name of herb"
                        className="border w-full mt-2 bg-transparent block  p-3 placeholder:text-base outline-none placeholder:text-[#667085] border-[#EAECF0] font-arapey font-light"
                      />
                    </div>
                    <div className="">
                      <label className="font-light text-[#101828]">
                        Scientific name
                      </label>
                      <input
                        type="text"
                        name="sciName"
                        value={formData.sciName}
                        onChange={handleChange}
                        placeholder="Enter scientific name"
                        className="border w-full mt-2 bg-transparent block  p-3 placeholder:text-base outline-none placeholder:text-[#667085] border-[#EAECF0] font-arapey font-light"
                      />
                    </div>
                    <div className="">
                      <label className="font-light text-[#101828]">
                        About herb
                      </label>
                      <input
                        name="about"
                        value={formData.about}
                        onChange={handleChange}
                        placeholder="Enter herb description"
                        className="border w-full mt-2 bg-transparent block h-16  p-3 placeholder:text-base outline-none placeholder:text-[#667085] border-[#EAECF0] font-arapey font-light"
                      />
                    </div>
                    <div className="">
                      <label className="font-light text-[#101828]">
                        Medicinal use
                      </label>
                      <input
                        name="medUse"
                        value={formData.medUse}
                        onChange={handleChange}
                        placeholder="Enter medicinal use"
                        className="border w-full mt-2 bg-transparent block h-16  p-3 placeholder:text-base outline-none placeholder:text-[#667085] border-[#EAECF0] font-arapey font-light"
                      />
                    </div>
                    <div className="">
                      <label className="font-light text-[#101828]">
                        Spititual use
                      </label>
                      <input
                        type="text"
                        name="spiritUse"
                        value={formData.spiritUse}
                        onChange={handleChange}
                        placeholder="Enter Spititual use"
                        className="border w-full mt-2 bg-transparent block h-16  p-3 placeholder:text-base outline-none placeholder:text-[#667085] border-[#EAECF0] font-arapey font-light"
                      />
                    </div>
                    <div className="">
                      <label className="font-light text-[#101828]">
                        Sides effects
                      </label>
                      <input
                        type="text"
                        name="sideEffects"
                        value={formData.sideEffects}
                        onChange={handleChange}
                        placeholder="Enter side effects"
                        className="border w-full mt-2 bg-transparent block h-16  p-3 placeholder:text-base outline-none placeholder:text-[#667085] border-[#EAECF0] font-arapey font-light"
                      />
                    </div>
                    <div className="">
                      <label className="font-light text-[#101828]">
                        Select related products
                      </label>
                      <select
                        name="rel"
                        className="border w-full mt-2 bg-transparent block h-12  p-3 placeholder:text-base outline-none placeholder:text-[#667085] border-[#EAECF0] font-arapey font-light"
                      >
                        {" "}
                        <option value="">–Select–</option>
                      </select>
                    </div>
                    <ImageUpload />
                    <div className="mt-5 flex gap-2">
                      <div className="w-[82px] h-[79px] bg-[#EAECF0] rounded-sm"></div>
                      <div className="w-[82px] h-[79px] bg-[#EAECF0] rounded-sm"></div>
                      <div className="w-[82px] h-[79px] bg-[#EAECF0] rounded-sm"></div>
                    </div>
                  </div>
                  <div className="p-6 pb-0 flex gap-4 border-t border-[#EAECF0] bg-white  bottom-0 left-0  w-full">
                    <DialogClose className="border border-[#946C3C] h-12 text-[#946C3C] uppercase flex-1">
                      {/* <button className="border border-[#946C3C] h-12 text-[#946C3C] uppercase flex-1"> */}
                      cancel
                      {/* </button> */}
                    </DialogClose>
                    <button
                      type="submit"
                      className="border border-[#946C3C] h-12 uppercase bg-[#946C3C] text-white flex-1"
                    >
                      add product
                    </button>
                  </div>
                </form>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </section>
      </section>
      <section className=" flex flex-wrap items-center mt-12  gap-5">
        {loading ? (
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-8 h-8   animate-spin text-[#E6E5DE]  fill-[#946C3C]"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          HerbsProducts?.map((product: any, key: any) => {
            return (
              <div
                key={key}
                className="border-[0.5px] max-w-[354px]  border-[#DBDAD1] p-2"
              >
                {loading ? (
                  // <Skeleton className=" w-[282px] h-[297px] rounded-xl" />

                  <Skeleton className="w-[338px] h-[264px]   object-cover rounded-xl" />
                ) : (
                  <img
                    src={product.images[1]}
                    alt={product.name}
                    className="w-[338px] h-[264px] object-cover max-h-[505px] "
                  />
                )}

                <p className="text-2xl  font-arapey mt-4">
                  {product.name} ({product.sciName})
                </p>
                <div className="flex flex-wrap gap-2 mb-4 mt-2">
                  <div className="bg-[#FAF6F3] p-2 flex items-center gap-1">
                    <div className="bg-[#CF956F] h-[6px] w-[6px] rounded-full "></div>
                    <p className="text-[#CF956F] text-base inline-block">
                      {product.spiritUse}
                    </p>
                  </div>
                  <div className="bg-[#FAF6F3] p-2 flex items-center gap-1">
                    <div className="bg-[#CF956F] h-[6px] w-[6px] rounded-full "></div>
                    <p className="text-[#CF956F] inline-block">
                      {product.medUse}
                    </p>
                  </div>
                  <div className="bg-[#FAF6F3] p-2 flex items-center gap-1">
                    <div className="bg-[#CF956F] h-[6px] w-[6px] rounded-full "></div>
                    <p className="text-[#CF956F] inline-block">
                      {product.sideEffects}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="w-full bg-transparent text-[#475467] uppercase h-10 border border-[#D0D5DD]">
                        remove herb
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-white">
                      <DialogHeader>
                        <DialogTitle className="">
                          <div className="bg-[#FEF3F2] mb-8 w-8 h-8 rounded-full flex justify-center items-center">
                            <img src={deletebtn} alt="Delete button" />
                          </div>
                          <h3 className="font-amsterdam text-[#F04438] text-2xl">
                            Remove participant
                          </h3>
                        </DialogTitle>
                        <DialogDescription>
                          <p className="text-[#667085] mt-6">
                            Are you sure you want to remove this herb? You can’t
                            go back on this action.
                          </p>
                        </DialogDescription>
                      </DialogHeader>

                      <DialogFooter className="w-full">
                        <div className="flex gap-2 w-full">
                          <DialogClose asChild>
                            <button className="w-full bg-transparent text-[#475467] uppercase h-14 border border-[#D0D5DD]">
                              Cancel
                            </button>
                          </DialogClose>

                          <button className="w-full bg-[#F04438] uppercase h-14 text-white">
                            remove herb
                          </button>
                        </div>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <Link
                    to={`/admin/herbalpaedia/${product.id}`}
                    className="w-full flex justify-center items-center bg-[#946C3C] uppercase h-10 text-white"
                  >
                    View details
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </section>
      <section className=" mt-10"></section>
      <section>
        <div className="flex justify-between my-3"></div>
      </section>
    </Layout>
  );
};

export default Herbalpedia;
