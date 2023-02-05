import Header from "./components/Header/Header";
import Week from "./components/Week/Week";

const App = () => {
  const desc =
    "Welcome to the premier training tracker, this is a free tool for you to keep tabs on your weekly sessions with different coaches!";

  return (
    <div className="container">
      <Header title="TRAINING TRACKER ⏰" />
      <p className="desc">{desc}</p>
      <Week />
    </div>
  );
};

export default App;
