import { DayPilotCalendar } from "@daypilot/daypilot-lite-react";
import "./Week.css";

const Week = () => {
  return (
    <div className="week">
      <DayPilotCalendar viewType="Week" />
    </div>
  );
};

export default Week;
