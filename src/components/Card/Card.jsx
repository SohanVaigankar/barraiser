import "./Card.css";
import { FaHeart } from "react-icons/fa";
import { FaDiamond } from "react-icons/fa6";
import { GiSpades } from "react-icons/gi";
import { IoFlowerSharp } from "react-icons/io5";

const Card = (props) => {
  const { type, variant } = props;
  let themeColor = "black";

  let icon = <span>none</span>;
  switch (type) {
    case "heart":
      icon = <FaHeart />;
      themeColor = "red";
      break;
    case "diamond":
      icon = <FaDiamond />;
      themeColor = "red";
      break;
    case "spade":
      icon = <GiSpades />;
      themeColor = "black";
      break;
    case "flower":
      icon = <IoFlowerSharp />;
      themeColor = "black";
      break;

    default:
      break;
  }
  return (
    <div style={{ color: themeColor }} className="card-container">
      <div className="top">{variant}</div>
      <div className="icon">{icon}</div>
      <div className="bottom">{variant}</div>
    </div>
  );
};

export default Card;
