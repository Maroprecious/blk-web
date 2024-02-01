import { ColumnDef } from "@tanstack/react-table";
import editBtn from "@assets/icons/edit.svg";
import deleteBtn from "@assets/icons/delete.svg";
import { storeItems } from "@/modules/landing/resouces";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: number;
  category: string;
  sales: number;
  Price: string;
  prdName: object;
  stock: number;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "prdName",
    header: () => (
      <p className="font-maison text-[#667085] font-light">Product name</p>
    ),
    cell: () => (
      <div className="flex gap-3 items-center ">
        {storeItems.map((item) => (
          <>
            <img
              src={item.prdName.image}
              alt="Product Image"
              className="w-[82px] h-[67px] rounded-[8px] object-cover"
            />{" "}
            <p className="font-maison font-light text-[#101828] ">
              {item.prdName.name}
            </p>
          </>
        ))}
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: () => (
      <p className="font-maison text-[#667085] font-light">Product category</p>
    ),
  },
  {
    accessorKey: "Price",
    header: () => (
      <p className="font-maison text-[#667085] font-light">Price</p>
    ),
  },
  {
    accessorKey: "stock",
    header: () => (
      <p className="font-maison text-[#667085] font-light">In stock</p>
    ),
  },
  {
    accessorKey: "sales",
    header: () => (
      <p className="font-maison text-[#667085] font-light">No of sales</p>
    ),
  },
  {
    accessorKey: "visibility",
    header: () => (
      <p className="font-maison text-[#667085] font-light">Visibility</p>
    ),
  },
  {
    accessorKey: "action",
    header: () => (
      <p className="font-maison text-[#667085] font-light">Action</p>
    ),
    cell: () => (
      <div className="flex gap-4">
        <img src={editBtn} alt="The edit button" />
        <img src={deleteBtn} alt="The delete button" />
      </div>
    ),
  },
];
