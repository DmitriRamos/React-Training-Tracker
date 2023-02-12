import { useState } from "react";
import "./AddSeshForm.css";
import DateTimePicker from "react-datetime-picker";
import SessionList from "../SessionList/SessionList";

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

    addSesh(`Session name:${sessionName} Coach:${seshCoach} Date:${value}`);
  };
  return (
    <div className="container2">
      <form onSubmit={onSubmit}>
        <label className="cname">Name Session:</label>
        <input
          className="promptbox"
          type="text"
          value={sessionName}
          onChange={(event) => {
            setSessionName(event.target.value);
          }}
        />
      </form>
      <label className="cname" htmlFor="coach">
        Pick Coach:
      </label>
      <select
        name="coach"
        className="promptbox"
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
      <DateTimePicker onChange={onChange} value={value} />
      <button onClick={onSubmit} className="button" type="button">
        <span>ADD SESSION</span>
      </button>
      <SessionList sessions={sessions} onDelete={deleteSesh}></SessionList>
    </div>
  );
};

export default AddSeshForm;
