import React from "react";
import BRTHeader from "@/shared/components/header/transparentHeader";
import mainVideo from "@assets/video/brw-video.mp4";
import { Calendar } from "@/components/ui/calendar";
const retreatCalendar = () => {
  return (
    <div>
      <BRTHeader />
      {/* section */}
      <section className="">
        <video height="558px" autoPlay loop>
          <source src={mainVideo} type="video/mp4" />
        </video>
      </section>
      {/* section */}
      <section className="px-4 lg:pl-[120px] mt-[80px] md:mt-[130px] lg:mt-[175px}">
        <h2 className="text-[64px] font-recoleta font-medium">
          Retreat calendar
        </h2>
        <Calendar className="w-full" />
      </section>
    </div>
  );
};

export default retreatCalendar;
