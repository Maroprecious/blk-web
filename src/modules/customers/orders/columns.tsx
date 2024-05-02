import { ColumnDef } from "@tanstack/react-table";
import img from "@assets/images/herbImg1.svg";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { XCircle } from "lucide-react";
import { Truck } from "lucide-react";
import { Package } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
export type Payment = {
  id: number;
  image: string;
  dop: string;
  prdName: string;
  status: string;
  Price: string;
  category: string;
  orderNum: string;
  color: string;
  bg: string;
  img: string;
};
// const  columnHelper = createColumnHelper()
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "prdName",
    header: "Product name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-4 items-center">
          <img
            src={img}
            className="w-[82px] h-[67px] object-cover rounded-[8px]"
          />
          <p>{row.original.prdName}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "orderNum",
    header: "Order number",
  },
  {
    accessorKey: "dop",
    header: "Date of purchase",
  },
  {
    accessorKey: "Price",
    header: () => (
      <p className="font-arapey text-[#667085] font-light">Price</p>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
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
