import { FiPhone } from "react-icons/fi";
import location from "@assets/icons/location.svg";
import { Button } from "@/components/ui/button";

export const AddressCard = () => {
  return (
    <>
      <div className="border border-gray-200 px-4 py-4 mt-6">
        <h3 className="font-recoleta text-[20px] text-gray-900 font-medium">
          Hailey Hemsworth
        </h3>
        <div className="flex items-center gap-2 mt-2">
          <FiPhone color="#946C3C" size={18.5} />
          <p className="font-maison text-[15px] font-light">
            +1 (206) 781-1374
          </p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <img src={location} />
          <p className="font-maison text-[15px] font-light">
            # 12 Eight Street Montegue Ave, P.O.Box 1868. Washington WA.
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
