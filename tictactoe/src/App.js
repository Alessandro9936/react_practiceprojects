import { useState } from "react";
import { GameContainer } from "./components/GameContainer";
import { StartModal } from "./components/StartModal";

function App() {
  const [hoveringPick, setHoveringPick] = useState("x");
  const [player1, setPlayer1] = useState({ player: "player", sign: "x" });
  const [player2, setPlayer2] = useState({ player: "", sign: "" });

  const handleHoveringPick = () => {
    setHoveringPick((prev) => (prev === "x" ? "o" : "x"));
  };

  const handleSetPlayerPick = (opponent) => {
    setPlayer1((prev) => ({ ...prev, sign: hoveringPick }));
    setPlayer2({ player: opponent, sign: hoveringPick === "x" ? "o" : "x" });
  };

  return (
    <>
      {!player2.sign && (
        <StartModal
          setHoveringPick={handleHoveringPick}
          setPick={handleSetPlayerPick}
          hoveringPick={hoveringPick}
        />
      )}
      {player2.sign && <GameContainer />}
    </>
  );
}

export default App;
