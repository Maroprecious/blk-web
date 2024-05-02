import { ColumnDef } from "@tanstack/react-table";
import deletebtn from "@assets/icons/blackDelete.svg";
import BrownDelete from "@assets/icons/BrownDelete.svg";

export type Participant = {
  name: string;
  id: number;
  email: string;
  dob: string;
  price: string;
  outstanding: string;
  phoneNum: string;
  status: string;
  color: string;
};
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

export const columns: ColumnDef<Participant>[] = [
  {
    accessorKey: "name",
    header: () => (
      <p className="font-arapey text-[#667085] font-light">Participant name</p>
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-1">
          <div className="bg-[#F2F4F7] font-maison  text-[#101828] rounded-full font-bold py-[10px] px-[12px] flex justify-center items-center">
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
    accessorKey: "dob",
    header: () => (
      <p className="font-arapey text-[#667085] font-light">Date of booking</p>
    ),
  },
  {
    accessorKey: "price",
    header: () => (
      <p className="font-arapey text-[#667085] font-light">Price</p>
    ),
  },
  {
    accessorKey: "outstanding",
    header: () => (
      <p className="font-arapey text-[#667085] font-light">Outstanding</p>
    ),
  },

  {
    accessorKey: "status",
    header: () => (
      <p className="font-arapey text-[#667085] font-light">Status</p>
    ),
    cell: ({ row }) => {
      return (
        <div
          style={{ background: row.original.color }}
          className="flex justify-center items-center gap-2"
        >
          <div
            className={`w-2 h-2 rounded-full ${
              row.original.status === "Paid in full"
                ? "bg-[#12B76A]"
                : "bg-[#F79009]"
            }`}
          ></div>
          <div
            className={`py-2 text-center font-normal`}
            style={{
              color:
                row.original.status === "Paid in full" ? "#12B76A" : "#F79009",
              background: row.original.color,
            }}
          >
            {row.original.status}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "action",
    header: () => (
      <p className="font-arapey text-[#667085] font-light">Action</p>
    ),
    cell() {
      return (
        <div className="">
          <Dialog>
            <DialogTrigger asChild>
              <img
                src={deletebtn}
                alt="delete button"
                className="cursor-pointer"
              />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white">
              <DialogHeader>
                <DialogTitle className="">
                  <div className="bg-[#FAF6F3] mb-8 w-8 h-8 rounded-full flex justify-center items-center">
                    <img src={BrownDelete} alt="Delete button" />
                  </div>
                  <h3 className="font-amsterdam text-[#946C3C] text-2xl">
                    Remove participant
                  </h3>
                </DialogTitle>
                <DialogDescription>
                  <p className="text-[#667085] mt-6">
                    Are you sure you want to remove this participant? You can’t
                    go back on this action.
                  </p>
                </DialogDescription>
              </DialogHeader>
              <div className="grid  items-center gap-4">
                <label htmlFor="name">Reason for removal</label>
                <input
                  id="name"
                  placeholder="Give reason"
                  className="outline-none border border-[#EAECF0] h-16 px-3 pt-0 placeholder:text-[#667085]"
                />
              </div>

              <DialogFooter className="w-full">
                <div className="flex gap-2 w-full">
                  <DialogClose asChild>
                    <button className="w-full bg-transparent text-[#475467] uppercase h-14 border border-[#D0D5DD]">
                      Cancel
                    </button>
                  </DialogClose>

                  <button className="w-full bg-[#946C3C] uppercase h-14 text-white">
                    Remove participant
                  </button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        // <img src={deletebtn} alt="delete button" className="cursor-pointer" />
      );
    },
  },
];
