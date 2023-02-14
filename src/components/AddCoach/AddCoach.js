import CoachList from "../Coachlist/CoachList";
import "./AddCoach.css";

const AddCoach = ({ id, coaches, onClick, onDelete, coach, onChange }) => {
  // Delete Coach

  return (
    <div className="wrapper">
      <form onSubmit={onClick}>
        <label className="cname" style={{ fontSize: "25px" }}>
          Coach's Name:
        </label>
        <input
          className="promptbox"
          type="text"
          value={coach}
          onChange={onChange}
          style={{ fontSize: "20px", Width: "100px", height: "35px" }}
        />
        <button
          onClick={onClick}
          className="button"
          type="button"
          style={{ fontSize: "25px" }}
        >
          <span>ADD COACH</span>
        </button>
      </form>
      <CoachList coaches={coaches} onDelete={onDelete} id={id} />
    </div>
  );
};

export default AddCoach;
