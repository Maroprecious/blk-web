import { FiClock, FiUsers } from "react-icons/fi";
import Layout from "@/shared/admin/layout/Layout";
import { FaChevronDown } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";
import { galleryMock } from "@/modules/landing/resouces";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
const Orders = () => {
  return (
    <Layout>
      <section className="flex justify-between mb-7">
        <Popover>
          <PopoverTrigger className="text-[#475467] gap-2 w-[108px]  border border-[#D0D5DD]  py-2 flex justify-center items-center">
            {" "}
            <p className="uppercase">filter</p>
            <FaChevronDown width={24} height={24} />
          </PopoverTrigger>
          <PopoverContent className="max-w-[128px] mt-2">
            <div className="flex gap-1">
              <p>Scheduled</p>
            </div>
            <div className="flex gap-1 mt-4">
              <p>Ongoing</p>
            </div>
            <div className="flex gap-1 mt-4">
              <p>Completed</p>
            </div>
            <div className="flex gap-1 mt-4">
              <p>Cancelled</p>
            </div>
          </PopoverContent>
        </Popover>
        <Link
          to="/admin/createRetreat"
          className="uppercase bg-[#946C3C] text-white px-3 flex justify-center items-center gap-1"
        >
          <IoIosAdd className="text-xl " />
          create new retreat
        </Link>
      </section>
      <section className="flex flex-wrap gap-5  bg-transparent">
        {galleryMock?.map((item: any, key: any) => {
          return (
            <div
              key={key}
              className="border-[0.5px] w-full sm:w-1/2 lg:w-[355px] border-[#DBDAD1] p-4"
            >
              <img
                src={item.img}
                alt={item.name}
                className="object-cover max-h-[505px] w-full"
              />
              <p className="text-2xl font-arapey mt-4">{item.title}</p>
              <p className="font-arapey text-[#946C3C] text-4xl">$ 350 USD</p>
              <div className="flex flex-wrap gap-2 mb-4 mt-2">
                <div className="bg-[#FAF6F3] p-2 flex items-center gap-1">
                  <FiClock fontSize={24} className="text-[#CF956F] mr-2" />
                  <p className="text-[#CF956F] inline-block">{item.date}</p>
                </div>
                <div className="bg-[#FAF6F3] p-2 flex items-center gap-1">
                  <FiUsers fontSize={24} className="text-[#CF956F] mr-2" />
                  <p className="text-[#CF956F] inline-block">
                    {item.totalNumber} people
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="w-full bg-transparent text-[#475467] uppercase h-10 border border-[#D0D5DD]">
                  Cancel
                </button>
                <Link
                  to={`/admin/retreat/${item.id}`}
                  className="w-full flex items-center justify-center bg-[#946C3C] uppercase h-10 text-white"
                >
                  View details
                </Link>
              </div>
            </div>
          );
        })}
      </section>
      <section className=" mt-10"></section>
      <section>
        <div className="flex justify-between my-3"></div>
      </section>
    </Layout>
  );
};

export default Orders;
