import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "./calandar.css";
import { useCallback, useState } from "react";
import useFetch from "@/hooks/useFetch";
import { URL } from "@/api/axios";
import interactionPlugin from "@fullcalendar/interaction";
import { useNavigate } from "react-router-dom";

const currentDate = new Date();

export default function Calandar() {
  const navigate = useNavigate();
  const { data, loading } = useFetch(`${URL}/retreats`, "GET");
  const dates = data?.data.data;
  // console.log(dates[0]);

  const events = dates?.map((event: any) => ({
    title: event.name,
    start: event.startDate,
    end: event.endDate,
    id: event.id,
  }));

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
  const handleEventClick = (info: any) => {
    const retreatId = info.event.id;
    navigate(`/retreat-calendar/${retreatId}`);
  };

  return (
    <div>
      {loading ? (
        <div
          role="status"
          className="flex justify-between w-full h-28 items-center translate-x-1/2"
        >
          <svg
            aria-hidden="true"
            className="w-8 h-8   animate-spin text-[#E6E5DE]  fill-[#946C3C]"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
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
            dayHeaderClassNames="header"
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            eventContent={renderEventContent}
            initialDate="2024-02-01"
            eventClick={(info) => handleEventClick(info)}
          />
        </>
      )}
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
