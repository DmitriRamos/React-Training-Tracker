import CoachList from "../Coachlist/CoachList";
import "./AddCoach.css";

const AddCoach = ({ id, coaches, onClick, onDelete, coach, onChange }) => {
  // Delete Coach

  return (
    <div className="wrapper">
      <form onSubmit={onClick}>
        <label className="cname">Coach's Name:</label>
        <input
          className="promptbox"
          type="text"
          value={coach}
          onChange={onChange}
        />
        <button onClick={onClick} className="button" type="button">
          <span>ADD COACH</span>
        </button>
      </form>
      <CoachList coaches={coaches} onDelete={onDelete} id={id} />
    </div>
  );
};

export default AddCoach;
