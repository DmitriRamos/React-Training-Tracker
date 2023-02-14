import { FaTimes } from "react-icons/fa";

// A component to generate a session h2 from given prop "session"
const Session = ({ session, onDelete }) => {
  return (
    <div className="session">
      <h2>
        {session}
        <FaTimes
          style={{
            color: "red",
            cursor: "pointer",
            fontSize: "20px",
          }}
          onClick={() => onDelete(session)}
        />
      </h2>
    </div>
  );
};

export default Session;
