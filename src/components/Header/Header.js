import "./Header.css";

const Header = ({ title }) => {
  return (
    <section className="wrapper">
      <div className="top">{title}</div>
      <div className="bottom" aria-hidden="true">
        {title}
      </div>
    </section>
  );
};

// CSS in JS
/*
export const headingStyle = {
  color: "gold",
};
*/

export default Header;
