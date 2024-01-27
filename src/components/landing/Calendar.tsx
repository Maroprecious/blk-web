// import React, { useState, ChangeEvent } from "react";
// import Calendar, { TileContentArg, DateCallback } from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// interface Event {
//   date: Date;
//   name: string;
// }

// const CalendarComponent: React.FC = () => {
//   const [selectedDates, setSelectedDates] = useState<Date[]>([]);
//   const [eventName, setEventName] = useState<string>("");
//   const [events, setEvents] = useState<Event[]>([]);

//   const handleDateChange: DateCallback = (date:Date) => {
//     const newSelectedDates = [...selectedDates, date as Date];
//     setSelectedDates(newSelectedDates);

//     // You can set event names for the selected dates here
//     const newEvents = [...events, { date: date as Date, name: eventName }];
//     setEvents(newEvents);
//   };

//   const handleEventNameChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setEventName(event.target.value);
//   };

//   return (
//     <div>
//       <h1>Event Calendar</h1>
//       <label htmlFor="eventName">Event Name:</label>
//       <input
//         type="text"
//         id="eventName"
//         value={eventName}
//         onChange={handleEventNameChange}
//       />

//       <Calendar
//         onChange={handleDateChange}
//         value={selectedDates}
//         selectRange
//         tileContent={({ date, view }: TileContentArg) =>
//           view === "month" &&
//           events.map((event) =>
//             event.date.toLocaleDateString() ===
//             (date as Date).toLocaleDateString() ? (
//               <div key={event.date.toString()} className="event-marker">
//                 {event.name}
//               </div>
//             ) : null
//           )
//         }
//       />
//     </div>
//   );
// };

// export default CalendarComponent;

// import React, { useState, ChangeEvent } from "react";
// import Calendar, { TileContentArg, DateCallback } from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// interface Event {
//   date: Date;
//   name: string;
// }
import { useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
import "react-calendar/dist/Calendar.css";

const CalendarComponent: React.FC = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} selectRange={true} />
    </div>
  );
};

export default CalendarComponent;

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];
// function CalendarComponent() {
//     const [value, onChange] = useState<Value>(new Date());

//     return (
//       <div>
//         <Calendar onChange={onChange} value={value} />
//       </div>
//     );
//   }
