import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "./calandar.css";
import { useCallback, useState } from "react";
import useFetch from "@/hooks/useFetch";
import { URL } from "@/api/axios";
// import { an } from "node_modules/@fullcalendar/core/internal-common";

const currentDate = new Date();

export default function Calandar() {
  const { data, loading } = useFetch(`${URL}/retreats`, "GET");
  console.log(loading, data?.data);

  const events = [
    {
      title: "Multi-day Event",
      start: "2024-05-01",
      end: "2024-05-04",
    },
  ];

  const [date, setDate] = useState(
    currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })
  );

  const handleNext = useCallback(() => {
    const doc = document.querySelector(".fc-next-button");
    const title = document.querySelector(".fc-toolbar-title");
    if (doc && title) {
      const clickEvent = new Event("click");
      doc.dispatchEvent(clickEvent);
      setDate(title.textContent as string);
    }
  }, []);

  const handlePrev = useCallback(() => {
    const doc = document.querySelector(".fc-prev-button");
    const title = document.querySelector(".fc-toolbar-title");
    if (doc && title) {
      const clickEvent = new Event("click");
      doc.dispatchEvent(clickEvent);
      setDate(title.textContent as string);
    }
  }, []);

  return (
    <div>
      <div className="w-full pb-6 flex justify-between items-center">
        <div className="border border-gray-200 flex justify-center bg-[#E6E5DE] items-center gap-2 py-2 px-4">
          <IoChevronBack
            onClick={handlePrev}
            className="cursor-pointer"
            fill="#667085"
          />
          <p className="text-gray-500 font-maison font-medium">{date}</p>
          <IoChevronForward
            onClick={handleNext}
            className="cursor-pointer"
            fill="#667085"
          />
        </div>
        <div className="flex gap-2">
          <button className="py-2 px-4 bg-[#E6E5DE] text-[#667085] font-maison font-medium">
            Weekly
          </button>
          <button className="py-2 px-4 bg-gray-50 text-gray-500 font-maison font-medium">
            Monthly
          </button>
        </div>
      </div>
      <FullCalendar
        initialView="dayGridMonth"
        events={events}
        eventChange={(arg) => console.log(arg, "add")}
        dayHeaderClassNames="header"
        plugins={[dayGridPlugin, timeGridPlugin]}
        eventContent={renderEventContent}
      />
    </div>
  );
}
function renderEventContent(eventInfo: any) {
  return (
    <div
      style={{ outline: "none !important" }}
      className="h-[44px] mt-6 ring-0 scale-y-2 outline-none bg-white text-gray-700 border-0 font-maison text-[12px] rounded-[4px] flex justify-start items-center pl-2 border-l border-l-[3px] border-l-[#959C7E]"
    >
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </div>
  );
}
