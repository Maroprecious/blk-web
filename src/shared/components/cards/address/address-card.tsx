import { FiPhone } from "react-icons/fi";
import location from "@assets/icons/location.svg";
import { Button } from "@/components/ui/button";

type props = {
  firstName: string,
  lastName: string,
  address: string,
  phone: string
}
export const AddressCard = ({firstName, lastName, address, phone}: props) => {
  return (
    <>
      <div className="border border-gray-200 px-4 py-4 mt-6">
        <h3 className="font-recoleta text-[20px] text-gray-900 font-medium">
         {firstName} {lastName}
        </h3>
        <div className="flex items-center gap-2 mt-2">
          <FiPhone color="#946C3C" size={18.5} />
          <p className="font-maison text-[15px] font-light">
            +1 {phone}
          </p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <img src={location} />
          <p className="font-maison text-[15px] font-light">
            # {address}
          </p>
        </div>
        <div className="flex justify-center gap-[.8rem] mt-4 items-center w-full">
          <Button variant="border" className="text-destructive w-[48%]">
            DELETE
          </Button>
          <Button variant="default" className="text-[#FFF] w-[48%]">
            EDIT
          </Button>
        </div>
      </div>
    </>
  );
};
