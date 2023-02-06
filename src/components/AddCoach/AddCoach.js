import "./AddCoach.css";

const AddCoach = () => {
  return (
    <div class="wrapper">
      <form>
        <label class="cname">Coach's Name:</label>
        <input class="promptbox " type="text"></input>
        <button class="button" value="Add Coach">
          <span>ADD COACH</span>
        </button>
      </form>
    </div>
  );
};

export default AddCoach;
