import { useState } from "react";
import "./AddSeshForm.css";
import DateTimePicker from "react-datetime-picker";
import SessionList from "../SessionList/SessionList";
import Header from "../Header/Header";

const AddSeshForm = ({ coaches, sessions, setSessions, deleteSesh }) => {
  const [seshCoach, setSeshCoach] = useState("");
  const [sessionName, setSessionName] = useState("");
  const [value, onChange] = useState(new Date());
  //const [session, setSession] = useState("");

  const addSesh = (session) => {
    setSessions([...sessions, session]);
  };

  const onSubmit = () => {
    if (sessionName.length === 0) {
      alert("Please add a name");
      return;
    }

    addSesh(
      `Session name: ${sessionName}  |  Coach: ${seshCoach}  |  Date: ${value}`
    );
  };
  return (
    <div className="container2">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Header title="SESSIONS" />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <form onSubmit={onSubmit}>
            <label className="sname" style={{ fontSize: "35px" }}>
              Name Session:
            </label>
            <input
              className="promptbox2"
              style={{ fontSize: "35px", Width: "50px", height: "40px" }}
              type="text"
              value={sessionName}
              onChange={(event) => {
                setSessionName(event.target.value);
              }}
            />
          </form>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <label className="sname" htmlFor="coach" style={{ fontSize: "35px" }}>
            Pick Coach:
          </label>
          <select
            name="coach"
            className="promptbox2"
            style={{ fontSize: "35px", Width: "50px", height: "40px" }}
            value={seshCoach}
            onChange={(event) => {
              setSeshCoach(event.target.value);
            }}
            onClick={(e) => {
              const selectedCoach = e.target.value;
              setSeshCoach(selectedCoach);
            }}
          >
            {coaches.map((name) => (
              <option value={name} key={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <label className="sname" style={{ fontSize: "35px" }}>
            Pick Date and Time:
          </label>
          <DateTimePicker
            className="date"
            onChange={onChange}
            value={value}
            style={{ fontSize: "35px", Width: "50px", height: "40px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
          }}
        >
          <button
            onClick={onSubmit}
            className="button3"
            type="button"
            style={{ fontSize: "35px" }}
          >
            <span>ADD SESSION</span>
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <SessionList sessions={sessions} onDelete={deleteSesh}></SessionList>
        </div>
      </div>
    </div>
  );
};

export default AddSeshForm;
