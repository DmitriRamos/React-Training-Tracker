import { FaTimes } from "react-icons/fa";

// A component to generate a coach h3 from given prop "name"
const Coach = ({ name, onDelete }) => {
  return (
    <div className="task">
      <h2>
        {name}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(name)}
        />
      </h2>
    </div>
  );
};

export default Coach;
