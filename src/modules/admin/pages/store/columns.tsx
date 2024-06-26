import { ColumnDef } from "@tanstack/react-table";
import editBtn from "@assets/icons/edit.svg";
import deleteBtn from "@assets/icons/delete.svg";
import { Switch } from "@/components/ui/switch";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// type Category = {
//   id: number;
//   name: string;
// };
export type Payment = {
  name: string;
  id: number;
  images: string[];
  category: string;
  sales: number;
  isVisible: boolean;
  price: number;
  quantity: number;
  purchaseCount: number;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Product name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-4 items-center">
          {row?.original?.images?.length > 0 && (
            <img
              src={row?.original?.images[0]}
              className="w-[82px] h-[67px] object-cover rounded-[8px]"
            />
          )}
          <p>{row?.original?.name}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Product category",
    // cell: ({ row }) => {
    //   return <p>{row?.original?.category.id} </p>;
    // },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      return (
        <p>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(row?.original?.price)}{" "}
        </p>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: "In stock",
    cell: ({ row }) => {
      return <p>{row?.original?.quantity} in stock</p>;
    },
  },
  {
    accessorKey: "purchaseCount",
    header: "No of sales",
  },
  {
    accessorKey: "isVisible",
    header: "Visibility",
    cell: () => (
      <div>
        <Switch />
      </div>
    ),
  },
  {
    // accessorKey: "quantity",
    header: "Action",
    cell: () => (
      <div className="flex gap-4">
        <img src={editBtn} alt="The edit button" />
        <AlertDialog>
          <AlertDialogTrigger>
            {" "}
            <img src={deleteBtn} alt="The delete button" />
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-white w-[456px]  h-[273px]">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-[#F04438] font-amsterdam font-medium text-2xl">
                <div className=" h-10 w-10 bg-[#FEF3F2] rounded-full  flex justify-center items-center mb-1">
                  <img src={deleteBtn} alt="The delete button" />
                </div>
                Delete Product
              </AlertDialogTitle>
              <AlertDialogDescription className="text-[#667085] font-arapey font-light">
                Are you sure you want delete this product, this action is
                irreversible and can not be undone?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="p-6 flex gap-4 border-t border-[#EAECF0]  absolute bottom-0 left-0 w-full ">
              <AlertDialogCancel className="border border-[#946C3C] h-12 text-[#946C3C] bg-transparent uppercase flex-1 hover:bg-transparent hover:text-[#946C3C]">
                cancel
              </AlertDialogCancel>
              <AlertDialogAction className="border border-[#F04438] h-12 uppercase bg-[#F04438] hover:bg-[#F04438] text-white flex-1">
                Delete product
              </AlertDialogAction>
              {/* <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction> */}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    ),
  },
];
