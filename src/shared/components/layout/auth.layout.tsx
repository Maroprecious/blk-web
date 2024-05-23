import { FC, ReactNode } from "react";
import BRHeader from "../header/header";
import { useMediaQuery } from "@/hooks/usemediaquery";
import IMGLogo from "@assets/images/logo.svg";

type Prop = {
  children: ReactNode;
};

export const AuthLayout: FC<Prop> = ({ children }) => {
  const matches = useMediaQuery("(min-width: 820px)");

  return (
    <div className="relative">
      {matches ? (
        <>
          <BRHeader />
          {children}
          <div className="fixed bottom-0 w-full px-20 h-[210px] flex flex-col justify-center items-start bg-primary">
            <h1 className="font-maison text-[120px] leading-[110px] text-sage-300">
              Back rooted retreats
            </h1>
            <div className="w-full flex py-4 justify-between items-center">
              <div className="flex justify-start items-center gap-4">
                {[
                  "ABOUT",
                  "HERBALPEDIA",
                  "RETREATS CALENDAR",
                  "STORE",
                  "TERMS AND CONDITIONS",
                  "PRIVACY POLICY",
                ].map((element, idx) => (
                  <div
                    className={`w-fit border-r-white pr-6 ${
                      idx !== 5 && "border-r"
                    }`}
                    key={element}
                  >
                    <p className="font-arapey font-light text-sage-300 text-[12px]">
                      {element}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex justify-start items-center gap-4">
                  {["INSTAGRAM", "TWITTER", "FACEBOOK"].map((element) => (
                    <div className="" key={element}>
                      <p className="font-arapey font-light text-sage-300 text-[12px]">
                        {element}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="font-maison font-light text-sage-300 text-[12px]">
              <a href="mailto:hello@backrootedreteats.com">
                hello@backrootedreteats.com
              </a>
            </p>
          </div>
        </>
      ) : (
        <div>
          <div className="w-full flex justify-center items-center pt-8">
            <img src={IMGLogo} alt="Logo" className="h-[35px]" />
          </div>
          {children}
        </div>
      )}
    </div>
  );
};
