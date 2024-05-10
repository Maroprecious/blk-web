import logout from "@assets/icons/logout.svg";
import { Button } from "../buttons/button";
import { Dispatch, SetStateAction } from "react";
import { useLogout } from "@/api/mutations";
import { useAtom } from "jotai";
import { userAtom } from "@/store/store";
import { useNavigate } from "react-router-dom";

type props = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
};
export const LogoutModal = ({ setShowModal }: props) => {
  const { mutate } = useLogout();
  const navigate = useNavigate()
  const user = useAtom(userAtom);
  const refreshToken = localStorage.getItem("refreshToken");
  const handleLogout = () => {
    mutate({
      refreshToken: refreshToken as string,
    }, {
      onSuccess: () => {
        navigate('/login')
      }
    });
  };
  return (
    <div className="fixed z-[100] w-full h-[100vh] bg-[rgba(0,0,0,0.4)] my-auto flex justify-center items-center">
      <div className="w-[30%] mx-auto bg-[#FFF] py-4">
        <div className="px-4 pb-4">
          <div className="w-[50px] h-[50px] bg-cream-300 flex justify-center items-center rounded-[50%]">
            <img src={logout} style={{ width: "22px", height: "22px" }} />
          </div>
          <h4 className="font-amsterdam py-6 text-[#946C3C] font-medium text-[22px]">
            Log out?
          </h4>
          <p className="text-gray-500 font-arapey font-extralight text-[15px]">
            Are you sure you want to log out of your account?
          </p>
        </div>
        <div className="border-b border-b-gray-200" />
        <div className="flex w-full gap-[5%] pt-4 justify-center items-center">
          <div className="w-[44%]">
            <Button
              onClick={() => setShowModal(false)}
              variant="outline"
              title="CANCEL"
            />
          </div>
          <div className="w-[44%]">
            <Button onClick={() => handleLogout()} variant="solid" title="LOG OUT" />
          </div>
        </div>
      </div>
    </div>
  );
};
