import { Button } from "@/components/ui/button";
import success from "@assets/icons/success.svg";

export const Successful = () => {
  const handleGoBackHome = () => {
    window.location.href = "/home-tab";
  };
  return (
    <div className="w-full h-[100vh] absolute bg-[#FFF] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <img src={success} />
        <h3 className="font-amsterdam py-6 font-medium text-gray-900 text-[24px]">
          Payment successful
        </h3>
        <p className="w-[60%] text-[15px] font-arapey text-center text-gray-500">
          We have processed your payment and your order would be delivered to
          you soon.
        </p>
        <Button
          variant="default"
          className="w-[53%] mt-4"
          onClick={() => handleGoBackHome()}
        >
          GO BACK HOME
        </Button>
      </div>
    </div>
  );
};
