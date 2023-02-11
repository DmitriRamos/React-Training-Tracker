import Header from "./components/Header/Header";
import AddCoach from "./components/AddCoach/AddCoach";
import { useState } from "react";

const App = () => {
  const id = Math.floor(Math.random() * 10000) + 1;
  const [coach, setCoach] = useState([""]);
  const [coaches, setCoaches] = useState([]);
  const desc =
    "Welcome to the premier training tracker, this is a free tool for you to keep tabs on your weekly sessions with different coaches!";

  const addCoach = (name) => {
    setCoaches([...coaches, name]);
  };
  const onChange = (event) => {
    setCoach(event.target.value);
  };

  const deleteCoach = (name) => {
    setCoaches(coaches.filter((coachName) => coachName !== name));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (coach.length === 0) {
      alert("Please add a coach");
      return;
    }

    addCoach(coach, id);
    setCoach([""]);
  };

  return (
    <div className="container">
      <Header title="TRAINING TRACKER ⏰" />
      <p className="desc">{desc}</p>
      <AddCoach
        coach={coach}
        coaches={coaches}
        onClick={onSubmit}
        onChange={onChange}
        onAdd={addCoach}
        id={id}
        onDelete={deleteCoach}
      />
    </div>
  );
};

export default App;
