import React, { useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { Calendar, momentLocalizer, Event } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

interface EventWithSlots extends Event {
  slots?: string[]; // Array of time slots for the event
}

const events: EventWithSlots[] = [
  {
    title: "Tranquil Forest Retreat, Pacific Northwest",
    start: moment("2024-01-30T10:00:00").toDate(),
    end: moment("2024-02-08T11:00:00").toDate(),
  },
  // Add more events with date range and time slots
];

const CalendarComponent: React.FC = () => {
  const [currentView, setCurrentView] = useState<string>("month");
  const handleViewChange = (view: string) => {
    setCurrentView(view);
  };
  // style fo custom toolbar
  const CustomToolbar: React.FC<any> = ({ onView }) => {
    // const formattedLabel = moment(label).format("MMMM YYYY");

    return (
      <div>
        <div className="flex justify-between bg-white pb-3">
          <span className="flex gap-2 items-center bg-[#E6E5DE] px-2 text-[#667085]">
            <IoChevronBackOutline />
            {/* {formattedLabel} */}
            <IoChevronForward />
          </span>
          <div className="flex gap-3">
            <button
              className={` ${
                currentView === "week"
                  ? "bg-[#E6E5DE] px-2 py-1 text-[#667085]"
                  : "text-[#C5C4BD]"
              }`}
              onClick={() => onView("week")}
            >
              Weekly
            </button>
            <button
              className={
                currentView === "month"
                  ? "bg-[#E6E5DE] px-2 py-1 text-[#667085]"
                  : "text-[#C5C4BD]"
              }
              onClick={() => onView("month")}
            >
              Monthly
            </button>
          </div>
        </div>
      </div>
    );
  };
  const dayPropGetter = (date: Date) => {
    // Customize the appearance of the days here
    // const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    const isToday = moment(date).isSame(moment(), "day");
    return {
      className: isToday ? "today-cell" : "other-cell",
      style: {
        backgroundColor: `day-cell ${isToday ? "today-cell" : ""}`,
        // border: "1px solid #959C7E",
        height: "156px",
        borderBottom: "1px solid #959C7E",
        borderLeft: "1px solid #959C7E",
        borderRight: "1px solid #959C7E",
        borderTop: "1px solid #959C7E",
      },
    };
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        views={["week", "month"]}
        components={{
          toolbar: CustomToolbar,
        }}
        max={moment("2024-02-08T11:00:00").toDate()}
        min={moment("2024-01-30T10:00:00").toDate()}
        className="custom-calendar"
        onView={(view) => handleViewChange(view)}
        style={{
          height: 782,
          backgroundColor: "#E6E5DE",
        }}
        dayPropGetter={dayPropGetter}
      />
    </div>
  );
};

export default CalendarComponent;
