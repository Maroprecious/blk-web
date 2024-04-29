import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { PageLayout } from "@/shared/components/layout/page-layout";
import user from "@assets/images/user.jpg";
import { useEffect, useState } from "react";
import { PiCamera } from "react-icons/pi";
import { TbPhoto } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEye } from "react-icons/fi";
import { AddressCard } from "@/shared/components/cards/address/address-card";
import { useGetUser } from "@/api/queries";
import { continents } from "@/utils/continents";
import { EditProfile } from "@/shared/components/profile/profile";
import { ChangePassword } from "@/shared/components/profile/change-password";
import { ShippingAddress } from "@/shared/components/profile/add-shipping-address";
import { OngoingRetreats } from "@/shared/components/profile/ongoing-retreats";
import { PastRetreats } from "@/shared/components/profile/past-retreats";

export default function MyProfile() {
  const [active, setActive] = useState<number | null>(0);
  const [changePopup, setChangePopup] = useState<boolean>(false);
  const { data, refetch } = useGetUser();
  useEffect(() => {
    refetch();
  }, []);
  console.log(data, "user");
  const handleActive = (id: number) => {
    setActive(id);
  };
  const userOptions = [
    {
      image: <PiCamera size={20} color="#946C3C" />,
      text: "Take a photo",
    },
    {
      image: <TbPhoto size={20} color="#946C3C" />,
      text: "Browse a photo",
    },
    {
      image: <RiDeleteBin6Line size={20} color="red" />,
      text: "Delete photo",
    },
  ];
  return (
    <PageLayout>
      <div className="bg-[#fff] pt-20 h-screen">
        <h4 className="font-recoleta font-medium px-6 text-[24px] text-gray-900">
          Profile
        </h4>
        <div className="flex items-center gap-[1rem] px-6">
          <div className="w-[114px] h-[114px] rounded-[50%]">
            <img
              src={user}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
              className="rounded-[50%]"
            />
          </div>
          <div className="gap-[8px] px-6">
            <h4 className="font-recoleta text-gray-900 font-medium text-[22px]">
              {data?.data?.profile.firstName} {data?.data?.profile.lastName}
            </h4>
            <Button
              variant="border"
              className="text-[#946C3C] text-[15px]"
              onClick={() => setChangePopup(!changePopup)}
            >
              CHANGE PROFILE PICTURE
            </Button>
            {changePopup && (
              <div className="absolute shadow-lg pb-4 top-[255px] left-[155px] z-[100] bg-[#FFF] w-[180px] border border-[1px] border-[gray-200]">
                {userOptions.map((ele, id) => (
                  <div
                    key={id}
                    className="flex gap-[6px] items-center mt-[1rem] pl-4"
                  >
                    <div className="">{ele.image}</div>
                    <p
                      className={
                        id === 2
                          ? "text-destructive text-[14px] font-normal"
                          : "text-gray-900 text-[14px] font-normal"
                      }
                    >
                      {ele.text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex px-6 justify-between items-center w-[85%] mt-6">
          {[
            "Profile details",
            "Password mgt",
            "Link payment methods",
            "Shipping address",
            "Ongoing retreats",
            "Past retreats",
            "Purchase records",
          ].map((ele, id) => (
            <div key={id} onClick={() => handleActive(id)}>
              <p
                className={
                  active === id
                    ? "text-[#946C3C] font-light text-[16px] h-[40px] border-b-[2px] border-b-[#946C3C] mt-4"
                    : "text-gray-500 font-light text-[16px]"
                }
              >
                {ele}
              </p>
            </div>
          ))}
        </div>
        <div className="border-b border-b-gray-200" />

        {active === 0 && (
        <EditProfile />
        )}
        {active === 1 && (
         <ChangePassword />
        )}
        {active === 3 && (
          <>
           <ShippingAddress />
          
          </>
        )}
         {active === 4 && (
          <>
           <OngoingRetreats />
          
          </>
        )}
         {active === 5 && (
          <>
           <PastRetreats />
          
          </>
        )}
      </div>
    </PageLayout>
  );
}
