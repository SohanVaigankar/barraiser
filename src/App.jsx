import { useState } from "react";
import "./App.css";
import { Card } from "./components";
import { mockCards } from "./utils/staticData";

function App() {
  const [cards, setCards] = useState(
    mockCards
    // new Array(52).fill({ type: "spade", variant: "5" })
  );
  const [selectedCards, setSelectedCards] = useState([]);

  const handleClick = () => {
    console.log("cards.length", cards.length);

    if (cards.length === 0) {
      return;
    }
    // if availabe cards in deck is less than or equal to 5, show all the remaining cards
    if (cards.length <= 5) {
      setSelectedCards([...selectedCards, ...cards]);
      return;
    }

    // generate a random number b/w 0 to 100
    let temp = parseInt(Math.random() * 100);
    console.log("random num", temp);

    const randomNum1 = temp > cards.length - 1 ? 0 : temp;

    // slice cards from index randomNum to randomNum+4 or randomNum-4

    const randomCards = cards.slice(
      randomNum1 + 4 > cards.length ? randomNum1 - 4 : randomNum1,
      randomNum1
    );

    console.log(
      "updated deck",
      cards.splice(
        randomNum1 + 4 > cards.length ? randomNum1 - 4 : randomNum1,
        randomNum1
      )
    );
    // 50+4 > 52 ? 50-4 : 50+4
    console.log("randomCards", randomCards);

    setSelectedCards([...selectedCards, ...randomCards]);
  };

  return (
    <div className="App">
      <button
        className="draw-card"
        onClick={handleClick}
        disabled={cards.length === 0}
      >
        Draw card
      </button>
      <div className="card-grid">
        {selectedCards.map((card, index) => (
          <Card key={index} type={card.type} variant={card.variant} />
        ))}
      </div>
    </div>
  );
}

export default App;
