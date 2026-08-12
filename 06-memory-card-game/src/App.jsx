import { Header } from "./components/Header";
import { CardBox } from "./components/CardBox";
import "./App.css";
import { useEffect, useState } from "react";
import { ClickContextHandler } from "./store/ClickContext";
import { GameOver } from "./components/GameOver";

function App() {
  const fruits = [
    { fruit_icon: "🍎", count: 0, face: 0, unknown: "?", tick: "" },
    { fruit_icon: "🍇", count: 0, face: 0, unknown: "?", tick: "" },
    { fruit_icon: "🍉", count: 0, face: 0, unknown: "?", tick: "" },
    { fruit_icon: "🍌", count: 0, face: 0, unknown: "?", tick: "" },
  ];

  const [clicked_fruits, setClickedFruits] = useState([]);
  const [shuffled_fruits, setShuffled_fruits] = useState([]);
  const [indices, setIndices] = useState([]);
  const [isChecking, setIsChecking] = useState(false);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [gameover, setGameOver] = useState(false);

  function resetGame() {
    const newCards = [];
    let fruits_data = fruits.map((fruit) => ({ ...fruit }));
    while (newCards.length < 16) {
      let random = Math.floor(Math.random() * fruits_data.length);
      let fruit = fruits_data[random];

      if (fruit.count < 4) {
        newCards.push(fruit);
        fruit.count++;
      } else {
        fruits_data = fruits_data.filter((fruit1) => fruit1 !== fruit);
      }
    }
    let updated_newCards = newCards.map((fruit) => ({ ...fruit, face: 0 }));
    setShuffled_fruits(updated_newCards);
    setScore(0);
    setMoves(0);
    setGameOver(false);
  }

  useEffect(() => {
    resetGame();
  }, []);

  function clickHandler(index, fruit) {
    if (gameover) return;
    if (isChecking) return;
    if (fruit.tick) return;
    if (clicked_fruits.length === 2) return;

    const nextClicked = [...clicked_fruits, fruit];
    const nextIndices = [...indices, index];

    setShuffled_fruits(
      shuffled_fruits.map((item, i) =>
        i === index ? { ...item, face: 1 } : item,
      ),
    );
    setClickedFruits(nextClicked);
    setIndices(nextIndices);
    if (nextClicked.length === 2) {
      compareFruits(nextClicked, nextIndices);
    }
    setMoves((prev) => prev + 1);
  }

  function compareFruits(nextClicked, nextIndices) {
    if (nextClicked.length !== 2) {
      return;
    }
    const [first, second] = nextClicked;

    if (first.fruit_icon === second.fruit_icon) {
      console.log("Matched pair:", first.fruit_icon);

      setScore((prev) => prev + 1);
      setShuffled_fruits((prev) => {
        const updated = prev.map((fruit, ind) =>
          ind === nextIndices[0] || ind === nextIndices[1]
            ? { ...fruit, tick: "✔️" }
            : fruit,
        );

        if (updated.every((card) => card.tick)) {
          setGameOver(true);
        }
        return updated;
      });
      setClickedFruits([]);
      setIndices([]);
      return;
    }
    setIsChecking(true);
    setTimeout(() => {
      setShuffled_fruits((prev) =>
        prev.map((fruit, ind) =>
          ind === nextIndices[0] || ind === nextIndices[1]
            ? { ...fruit, face: 0 }
            : fruit,
        ),
      );
      setClickedFruits([]);
      setIndices([]);
      setIsChecking(false);
    }, 300);
  }

  return (
    <ClickContextHandler value={{ clickHandler }}>
      <div className="app">
        <Header score={score} moves={moves} resetGame={resetGame} />
        <CardBox shuffled_fruits={shuffled_fruits} />
        {gameover && (
          <GameOver
            score={score}
            moves={moves}
            resetGame={resetGame}
          ></GameOver>
        )}
      </div>
    </ClickContextHandler>
  );
}

export default App;
