import "./Card.css";

const Card = (props) => {
  const { type, variant, index } = props;
  return (
    <div className="card-container">
      <div>{variant}</div>
      <div>{type}</div>
      <div>{variant}</div>
    </div>
  );
};

export default Card;
