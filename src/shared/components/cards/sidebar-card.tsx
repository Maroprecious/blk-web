import { ReactNode } from "react";
import { IoMdClose } from "react-icons/io";

export const SidebarCard = ({
  children,
  onClick,
  title,
}: {
  children: ReactNode;
  onClick: () => void;
  title: string
}) => {
  return (
    <div className="w-full z-[1000] overflow-y-scroll bg-shadow h-[100vh] top-0 left-0 fixed">
      <div className="lg:w-[35%] w-full px-6 py-10 shadow-sm bg-[#fff] z-[200] h-auto absolute right-0 top-0">
        <div className="flex justify-between items-center">
          <h2 className="text-[#946C3C] font-arapey font-normal text-[30px]">
           {title}
          </h2>
          <span
            className="bg-gray-100 cursor-pointer flex items-center justify-center w-[32px] h-[32px] rounded-[50%]"
            onClick={onClick}
          >
            <IoMdClose />
          </span>
        </div>
        <p className="text-[16px] font-arapey text-gray-500 font-normal">Fill in the form with your details</p>

        <div>{children}</div>
      </div>
    </div>
  );
};
