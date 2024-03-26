import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { PageLayout } from "@/shared/components/layout/page-layout";
import user from "@assets/images/user.jpg";
import { useState } from "react";
import { PiCamera } from "react-icons/pi";
import { TbPhoto } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEye } from "react-icons/fi";
import { AddressCard } from "@/shared/components/cards/address/address-card";

export default function MyProfile() {
  const [active, setActive] = useState<number | null>(0);
  const [changePopup, setChangePopup] = useState<boolean>(false);

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
      <div className="bg-[#fff] pt-20 px-6 h-screen">
        <h4 className="font-recoleta font-medium text-[24px] text-gray-900">
          Profile
        </h4>
        <div className="flex items-center gap-[1rem]">
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
          <div className="gap-[8px]">
            <h4 className="font-recoleta text-gray-900 font-medium text-[22px]">
              Hailey Hemsworth
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
        <div className="flex justify-between items-center w-[85%] mt-6">
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
          <div className="w-[71%] mt-6">
            <div className="flex gap-[1.5rem] items-center">
              <Input
                className="bg-transparent"
                label="First name"
                value="Hailey"
              />
              <Input
                className="bg-transparent"
                label="Last name"
                value="Hemsworth"
              />
            </div>
            <div className="flex gap-[1.5rem] items-center">
              <Input
                className="bg-transparent"
                label="Email address"
                value="hhems58@gmail.com"
              />
              <Select
                className="bg-transparent"
                label="Location preferences"
                options={[
                  {
                    label: "-Select-",
                    value: "select",
                  },
                  {
                    label: "Lagos",
                    value: "Lagos",
                  },
                  {
                    label: "Abuja",
                    value: "Abuja",
                  },
                ]}
              />
            </div>
            <Button variant="border" className="text-[#946C3C]">
              EDIT PROFILE DETAILS
            </Button>
          </div>
        )}
        {active === 1 && (
          <>
            <div className={"w-[72%] flex gap-[1.5rem] mt-6"}>
              <Input
                className="bg-transparent"
                label="Password"
                placeholder="Your password"
                inputRightElement={<FiEye color="black" />}
              />
              <Input
                className="bg-transparent"
                label="Confirm Password"
                placeholder="Confirm password"
                inputRightElement={<FiEye color="black" />}
              />
            </div>
            <Button>SAVE CHANGES</Button>
          </>
        )}
        {active === 3 && (
          <>
            <div className="flex w-[73%] flex-wrap justify-start items-center gap-4">
              {Array(3)
                .fill("_")
                .map((element, idx) => (
                  <div className="w-[32%]" key={element + idx}>
                    <AddressCard />
                  </div>
                ))}
            </div>
            <Button  className="text-[#fff] mt-2">
              ADD SHIPPING ADDRESS
            </Button>
          </>
        )}
      </div>
    </PageLayout>
  );
}
