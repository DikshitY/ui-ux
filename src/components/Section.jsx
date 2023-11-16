import "./Section.css";
import Last from "../images/last.png";

function Section() {
  return (
    <div className="section-main">
      <div className="gray"></div>
      <div className="blue"></div>
      <div className="section-image">
        <img src={Last} />
      </div>
      <div className="section-content">
        <h1>Lorem ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat.
        </p>
        <h3>Lorem ipsum</h3>
      </div>
    </div>
  );
}

export default Section;
