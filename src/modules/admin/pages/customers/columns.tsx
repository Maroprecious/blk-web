import { ColumnDef } from "@tanstack/react-table";

export type Customer = {
  name: string;
  id: number;
  email: string;
  amt: string;
  phoneNum: string;
};

export const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: "name",
    header: () => <p className="font-arapey  font-light">Customer name</p>,
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-1">
          <div className="bg-[#FAF6F3] font-maison  text-[#CF956F] rounded-full font-bold py-[10px] px-[12px] flex justify-center items-center">
            {" "}
            HH
          </div>
          <div>{row.original.name}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: () => (
      <p className="font-arapey text-[#667085] font-light">Email address</p>
    ),
  },
  {
    accessorKey: "email",
    header: () => (
      <p className="font-arapey text-[#667085] font-light">Email address</p>
    ),
  },
  {
    accessorKey: "phoneNum",
    header: () => (
      <p className="font-arapey text-[#667085] font-light">Phone number</p>
    ),
  },
];
