import { useState } from "react";
import "../style.css";

const generateDeck = () => {
  const suits = ["♦️", "♣️", "♠️", "❤️"];
  const cardValuesLength = 14;
  const deck = [];
  const faceCards = ["J", "Q", "K", "A"];
  for (let suit in suits) {
    for (let cardValues = 2; cardValues <= cardValuesLength; cardValues++) {
      // console.log(cardValues <= 10 ? cardValues : faceCards[cardValues - 11]);
      deck.push({
        suit: suits[suit],
        rank:
          cardValues <= 10 ? cardValues.toString() : faceCards[cardValues - 11],
      });
    }
  }
  return deck;
};

export default function Test() {
  const [deck, setDeck] = useState(() => generateDeck());
  const [drawnCards, setDrawnCards] = useState([]);
  // const [removedCards, setRemovedCards] = useState([]);

  const handleDrawCard = () => {
    if (deck.length < 1) {
      alert("No more Cards to Draw");
      return;
    }
    const randomIndexArr = [];
    const cardsDrawn = [];
    const maxLimit = deck.length > 5 ? 5 : deck.length;
    while (cardsDrawn.length < maxLimit) {
      const randomIndex = Math.floor(Math.random() * deck.length);
      if (!randomIndexArr.includes(randomIndex)) {
        cardsDrawn.push(deck[randomIndex]);
        randomIndexArr.push(randomIndex);
        // console.log(cardsDrawn);
      }
    }
    setDrawnCards((prevDrawnCards) => [...cardsDrawn, ...prevDrawnCards]);
    setDeck((prevDeck) =>
      prevDeck.filter((item, index) => !randomIndexArr.includes(index))
    );
    // console.log()
    // console.log(Math.floor(Math.random(), deck.length));
  };

  const handleRemoveCard = (card) => {
    const removedItemIndex = drawnCards.map((item, index) => {
      if (item.suit === card.suit && item.rank === card.rank) {
        return index;
      }
    });
    // console.log(drawnCards[]);
    setDrawnCards((prevDrawnCards) =>
      prevDrawnCards.filter(
        (item, index) => !(item.suit === card.suit && item.rank === card.rank)
      )
    );

    setDeck((prevDeck) => [card, ...prevDeck]);
    // console.log("remove", drawnCards.find());
  };

  return (
    <div className="App">
      <button
        style={{ height: 100, margin: 24 }}
        onClick={() => handleDrawCard()}
        // disabled={}
      >
        Draw Card
      </button>
      <h3>Cards left to be Drawn: {deck.length} </h3>
      <h3>Cards Drawn: {drawnCards.length} </h3>

      {drawnCards.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
          {drawnCards.map((card, index) => {
            return (
              <div
                style={{
                  border: "1px solid red",
                  width: "18%",
                  margin: 4,
                  height: 200,
                  display: "flex",
                  backgroundColor: "white",
                }}
                onClick={() => handleRemoveCard(card)}
              >
                <div style={{ float: "left" }}>{card.rank}</div>
                <div
                  key={index}
                  style={{
                    fontSize: 32,
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {card.suit}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
