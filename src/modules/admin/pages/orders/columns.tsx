import { ColumnDef } from "@tanstack/react-table";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
// import { IoIosCancelCircleOutline } from "react-icons/io";
import { XCircle } from "lucide-react";
import { Truck } from "lucide-react";
import { Package } from "lucide-react";
export type Orders = {
  orderName: string;
  id: number;
  customerName: string;
  email: string;
  date: string;
  prdName: string;
  Price: string;
  status: string;
  color: string;
  bg: string;
  img: string;
};
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
export const columns: ColumnDef<Orders>[] = [
  {
    accessorKey: "orderName",
    header: () => (
      <p className="font-arapey text-[#667085] font-light">Product name</p>
    ),
  },
  {
    accessorKey: "customerName",
    header: () => (
      <p className="font-arapey text-[#667085] font-light">Product category</p>
    ),
  },
  {
    accessorKey: "email",
    header: () => (
      <p className="font-arapey text-[#667085] font-light">Email address</p>
    ),
  },
  {
    accessorKey: "date",
    header: () => (
      <p className="font-arapey text-[#667085] font-light">In stock</p>
    ),
  },
  {
    accessorKey: "prdName",
    header: () => (
      <p className="font-arapey text-[#667085] font-light">No of sales</p>
    ),
  },
  {
    accessorKey: "Price",
    header: () => (
      <p className="font-arapey text-[#667085] font-light">Price</p>
    ),
  },
  {
    accessorKey: "status",
    header: () => (
      <p className="font-arapey text-[#667085] font-light">Status</p>
    ),
    cell: ({ row }) => {
      return (
        <ul className="custom-list">
          <div style={{ background: row.original.bg }}>
            <li
              className={`py-2 text-center font-normal`}
              style={{ color: row.original.color, background: row.original.bg }}
            >
              {row.original.status}
            </li>
          </div>
        </ul>
      );
    },
  },
  {
    accessorKey: "action",
    header: () => (
      <p className="font-arapey text-[#667085] font-light">Action</p>
    ),
    cell({ row }) {
      return (
        <Popover>
          <PopoverTrigger>
            <img src={row.original.img} alt="option button" />
          </PopoverTrigger>
          <PopoverContent className="w-[178px] ">
            {row.original.status === "Received" && (
              <div>
                <div className="flex gap-2 mb-2">
                  <IoIosCheckmarkCircleOutline className="text-2xl" />
                  <p>Accept Order</p>
                </div>
                <div className="flex gap-2">
                  <XCircle />
                  {/* <IoIosCancelCircleOutline className="text-2xl" /> */}
                  <p>Decline Order</p>
                </div>
              </div>
            )}
            {row.original.status === "Processing" && (
              <div>
                <div className="flex gap-2 ">
                  <Truck />
                  <p className="text-md">Delivering order</p>
                </div>
              </div>
            )}
            {row.original.status === "Delivering" && (
              <div>
                <div className="flex gap-2 ">
                  <Package />
                  <p className="text-md">Delivered order</p>
                </div>
              </div>
            )}
          </PopoverContent>
        </Popover>
      );
    },
  },
];
