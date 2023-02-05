import "./Header.css";

const Header = ({ title }) => {
  return (
    <section class="wrapper">
      <div class="top">{title}</div>
      <div class="bottom" aria-hidden="true">
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
