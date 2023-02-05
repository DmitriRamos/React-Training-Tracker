const Header = ({ title, button }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <button className="btn">{button}</button>
    </header>
  );
};

// CSS in JS
/*
export const headingStyle = {
  color: "gold",
};
*/

export default Header;
