import React, { useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { Calendar, momentLocalizer, Event } from "react-big-calendar";
import moment from "moment";
import { useCallback, useMemo } from "react";
import { Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.css";

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
  type Keys = keyof typeof Views;
  const [date, setDate] = useState<Date>(moment("2024-1-1").toDate());
  const [view, setView] = useState<(typeof Views)[Keys]>(Views.WEEK);

  // style fo custom toolbar
  const onPrevClick = useCallback(() => {
    if (view === Views.DAY) {
      setDate(moment(date).subtract(1, "d").toDate());
      setView(Views.WEEK);
    } else if (view === Views.WEEK) {
      setDate(moment(date).subtract(1, "w").toDate());
    } else {
      setDate(moment(date).subtract(1, "M").toDate());
    }
  }, [view, date]);

  const onNextClick = useCallback(() => {
    if (view === Views.DAY) {
      setDate(moment(date).add(1, "d").toDate());
    } else if (view === Views.WEEK) {
      setDate(moment(date).add(1, "w").toDate());
    } else {
      setDate(moment(date).add(1, "M").toDate());
    }
  }, [view, date]);
  const dateText = useMemo(() => {
    if (view === Views.DAY) return moment(date).format("dddd, MMMM DD");
    if (view === Views.WEEK) {
      //   const from = moment(date)?.startOf("week");
      //   const to = moment(date)?.endOf("week");
      return moment(date).format("MMMM YYYY");
    }
    if (view === Views.MONTH) {
      return moment(date).format("MMMM YYYY");
    }
  }, [view, date]);
  const CustomToolbar: React.FC<any> = ({ onView }) => {
    return (
      <div>
        <h2 className="text-2xl bg-transparent absolute">Retreat calendar</h2>

        <div className="flex  justify-end gap-64  bg-white pb-3">
          <span className="flex gap-2 items-center border border-[#EAECF0] bg-white px-2 text-[#667085]">
            <IoChevronBackOutline onClick={onPrevClick} />
            {dateText}
            <IoChevronForward onClick={onNextClick} />
          </span>
          <div className="flex gap-3  ">
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
    const isToday = moment(date).isSame(moment(), "day");
    return {
      className: isToday ? "today-cell" : "other-cell",
      style: {
        backgroundColor: `day-cell ${isToday ? "today-cell" : ""}`,
        height: "156px",
        borderBottom: "0.5px solid #EAECF0",
        borderLeft: "0.5px solid #EAECF0",
        borderRight: "0.5px solid #EAECF0",
        borderTop: "0.5px solid #EAECF0",
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
          height: 522,
          backgroundColor: "#F9FAFB",
        }}
        dayPropGetter={dayPropGetter}
      />
    </div>
  );
};

export default CalendarComponent;
