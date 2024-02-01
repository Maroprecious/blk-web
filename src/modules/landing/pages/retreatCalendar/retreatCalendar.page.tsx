import BRTHeader from "@/shared/components/header/transparentHeader";
import mainVideo from "@assets/video/brw-video.mp4";
import CalendarComponent from "@/components/landing/Calendar";
const retreatCalendar = () => {
  return (
    <div className="bg-white">
      <BRTHeader />
      {/* section */}
      <section className="">
        <video height="558px" autoPlay loop>
          <source src={mainVideo} type="video/mp4" />
        </video>
      </section>
      {/* section */}
      <section className="px-4 lg:px-[120px] mt-[80px] md:mt-[130px] bg-white lg:mt-[175px}">
        <h2 className="text-[64px] font-recoleta font-medium">
          Retreat calendar
        </h2>
        <CalendarComponent />
      </section>
    </div>
  );
};

export default retreatCalendar;
