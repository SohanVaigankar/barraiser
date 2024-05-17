import { useState } from "react";
import "./App.css";
import { Card } from "./components";
import { mockCards } from "./utils/staticData";

function App() {
  const [cards, setCards] = useState(mockCards);
  const [selectedCards, setSelectedCards] = useState([]);

  const handleClick = () => {
    console.log("cards.length", cards.length);

    if (cards.length === 0 || selectedCards.length === 52) {
      return;
    }
    // if availabe cards in deck is less than or equal to 5, show all the remaining cards
    if (cards.length <= 5) {
      setSelectedCards([...selectedCards, ...cards]);
      cards.splice(0, cards.length - 1);
      return;
    }

    const updatedArray = [];
    for (let i = 0; i < 5; i++) {
      // generate a random num b/w 0 and available deck length
      const randomNum1 = Math.floor(Math.random() * cards.length);
      // add card present at random no to updated array
      updatedArray.push(cards[randomNum1]);
      // delete drawn card from deck
      cards.splice(randomNum1, 1);
    }
    // update drawn cards
    setSelectedCards([...selectedCards, ...updatedArray]);
  };

  return (
    <div className="App">
      <button
        className="draw-card"
        onClick={handleClick}
        disabled={selectedCards.length === 52}
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
