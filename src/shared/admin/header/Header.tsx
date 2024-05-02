import { useLocation } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Header = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const currentPage = pathSegments[pathSegments.length - 1];

  // Function to capitalize the first letter of a string
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const formattedPageName = capitalizeFirstLetter(currentPage);
  return (
    <div className="bg-white custom-shadow  p-4 pl-[24px] font-Inter pr-[70px] flex justify-between items-center drop-shadow-sm">
      <h1 className="text-[24px] ">{formattedPageName}</h1>
      <div className="">
        <Popover>
          <PopoverTrigger className="bg-[#959C7E]  text-white rounded-full font-bold py-[10px] px-[12px] flex justify-center items-center">
            {" "}
            LC
          </PopoverTrigger>
          <PopoverContent className="max-w-[155px] ">
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
                  stroke="#CF956F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Profile</p>
            </div>
            <div className="flex gap-1 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16 17.0003L21 12.0003M21 12.0003L16 7.00031M21 12.0003H9M12 17.0003C12 17.2959 12 17.4437 11.989 17.5717C11.8748 18.9023 10.8949 19.9972 9.58503 20.2576C9.45903 20.2826 9.31202 20.299 9.01835 20.3316L7.99694 20.4451C6.46248 20.6156 5.69521 20.7008 5.08566 20.5058C4.27293 20.2457 3.60942 19.6518 3.26118 18.8728C3 18.2885 3 17.5165 3 15.9726V8.028C3 6.48407 3 5.71211 3.26118 5.12783C3.60942 4.34879 4.27293 3.75491 5.08566 3.49483C5.69521 3.29978 6.46246 3.38502 7.99694 3.55552L9.01835 3.66901C9.31212 3.70165 9.45901 3.71797 9.58503 3.74303C10.8949 4.00346 11.8748 5.09835 11.989 6.42891C12 6.55694 12 6.70473 12 7.00031"
                  stroke="#CF956F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Log out</p>
            </div>
          </PopoverContent>
        </Popover>
        {/* <p className="bg-[#959C7E] text-white rounded-full font-bold py-[10px] px-[12px] flex justify-center items-center">
          LC
        </p> */}
      </div>
    </div>
  );
};

export default Header;
