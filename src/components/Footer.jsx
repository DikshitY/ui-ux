import "./Footer.css";
import Square from "../images/Square.png";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer-main">
      <div className="white">
        <div>
          <img src={Square} />
        </div>
      </div>
      <div className="dark-gray">
        <div className="footer-item-container">
          <p>Home</p>
          <p>Page 1</p>
          <p>Page 2</p>
        </div>
        <div className="icon-container">
            <FaSquareFacebook/>
            <FaSquareTwitter />
            <FaInstagramSquare />
            <FaSquareWhatsapp />
        </div>
        <p className="copyright">© Logo, Inc.</p>
      </div>
    </div>
  );
}

export default Footer;
