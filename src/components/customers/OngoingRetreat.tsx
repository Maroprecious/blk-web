import ongoingRepeat from "@assets/images/retreat.svg";
import days from "@assets/icons/days.svg";
const OngoingRetreat = () => {
  return (
    <div className="max-w-[326px] border border-[#EAECF0] p-2">
      <img src={ongoingRepeat} alt="ongoingRepeat" />
      <div className="w-full p-4">
        <p className="font-medium text-2xl mb-2">
          Tranquil Forest Retreat, Pacific Northwest
        </p>
        <div className="text-[#CF956F] flex bg-[#FAF6F3] py-2 my-2  justify-start items-start w-[95px] gap-2">
          <img src={days} alt="" />5 days
        </div>
        <button className="w-full uppercase bg-[#946C3C] h-10 text-[#FFFFFF]">
          see itinerary
        </button>
      </div>
    </div>
  );
};

export default OngoingRetreat;
