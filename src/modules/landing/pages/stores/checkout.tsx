import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import CartCard from "@/shared/components/cards/retreats/cart-card";
import { PageLayout } from "@/shared/components/layout/page-layout";
import { Successful } from "@/shared/components/modals/successful";
import { useState } from "react";
import { LiaAngleRightSolid } from "react-icons/lia";

export default function CheckoutPage() {
  const [tab, setTab] = useState<number | null>(0);
  const handleActiveTab = (id: number) => {
    setTab(id);
  };
  const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false);
  return (
    <PageLayout>
      <div className="w-full items-stretch flex pb-12 justify-between items-center">
        <div className="w-[50%] bg-[#FFF] pt-16 pb-12 px-24">
          <h4 className="font-recoleta text-[#000000] font-normal text-[24px]">
            Checkout
          </h4>
          <div className="flex">
            {["Information", "Payment"].map((ele, id) =>
              id === 0 ? (
                <div className="flex items-center gap-[.5rem]" key={id}>
                  <p
                    className="text-[15px] font-light text-[#000000] cursor-pointer"
                    onClick={() => handleActiveTab(id)}
                  >
                    {ele}
                  </p>
                  <div className="font-bold text-[19px]">
                    <LiaAngleRightSolid />
                  </div>
                </div>
              ) : (
                <p
                  className="text-[15px] ml-2 font-light text-[#000000] cursor-pointer"
                  onClick={() => handleActiveTab(id)}
                >
                  {ele}
                </p>
              )
            )}
          </div>

          {tab === 0 ? (
            <>
              <p className="pt-6 font-light text-[14px] font-maison">
                SHIPPING INFORMATION
              </p>
              <div className="pt-6">
                <Input
                  className="bg-transparent"
                  label="Email address"
                  placeholder="Your email address"
                />
                <div className="flex gap-[1rem]">
                  <Input
                    className="bg-transparent"
                    label="First name"
                    placeholder="Your first name"
                  />
                  <Input
                    className="bg-transparent"
                    label="Last name"
                    placeholder="Your last name"
                  />
                </div>
                <Input
                  className="bg-transparent"
                  label="Address"
                  placeholder="Your address"
                />
                <Input
                  className="bg-transparent"
                  label="Apartment, suite, etc. (optional)"
                  placeholder="Your apartment"
                />
                <div className="flex gap-[1rem]">
                  <Input
                    className="bg-transparent"
                    label="City"
                    placeholder="Your city"
                  />
                  <Input
                    className="bg-transparent"
                    label="State"
                    placeholder="Your last name"
                  />
                  <Input
                    className="bg-transparent"
                    label="Zip code"
                    placeholder="Your zip code"
                  />
                </div>
                <Input
                  className="bg-transparent"
                  label="Phone"
                  placeholder="+1 000 – 0000 – 000"
                />
                <Button className="w-full mt-2 h-[56px] p-6">
                  CONTINUE TO PAYMENT
                </Button>
              </div>
            </>
          ) : (
            <>
              <p className="pt-6 font-light text-[14px] font-maison">PAYMENT</p>
              <div className="pt-8">
                <Input
                  className="bg-transparent"
                  label="Card number"
                  placeholder="Your card number"
                />
                <div className="flex gap-[1rem]">
                  <Input
                    className="bg-transparent"
                    label="Expiry date"
                    placeholder="MM / YYYY"
                  />
                  <Input
                    className="bg-transparent"
                    label="Security code"
                    placeholder="Security code"
                  />
                </div>
                <Input
                  className="bg-transparent"
                  label="Name on card"
                  placeholder="Name on card"
                />
                <Button
                  className="w-full mt-2 h-[56px] p-6"
                  onClick={() => setShowPaymentModal(true)}
                >
                  PAY NOW
                </Button>
                {/* this is to make the page get to the bottom else it would jump */}
                <p className="w-full mt-2 h-[56px] p-6 opacity-0">PAY</p>
                <p className="w-full mt-2 h-[56px] p-6 opacity-0">NOW</p>
              </div>
            </>
          )}
        </div>
        <div className="w-[50%] bg-gray-100 pb-12 pt-12 px-24">
          <div className="pt-20">
            {Array(2)
              .fill("_")
              .map((ele) => (
                <div key={ele} className="w-[90%]">
                  <CartCard />
                </div>
              ))}
          </div>
          <div className=" border-t border-t-gray-400 w-[85%]">
            <div className="flex justify-between items-center pt-4">
              <p className="font-maison font-light text-[15px]">Subtotal</p>
              <p className="font-maison font-medium text-[15px]">$ 350.00</p>
            </div>
            <div className="flex justify-between items-center pt-4">
              <p className="font-maison font-light text-[15px]">Shipping fee</p>
              <p className="font-maison font-medium text-[15px]">$ 9.00</p>
            </div>
            <div className=" border-b border-b-gray-400 pb-4" />
            <div className="flex justify-between items-center pt-4">
              <p className="text-[24px] font-normal text-primary">Total</p>
              <p className="text-primary font-medium text-[24px]">$ 9.00</p>
            </div>
          </div>
        </div>
        {showPaymentModal && <Successful />}
      </div>
    </PageLayout>
  );
}
