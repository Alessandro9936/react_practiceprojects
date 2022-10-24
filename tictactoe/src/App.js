import { useState } from "react";
import { GameContainer } from "./components/GameContainer";
import { StartModal } from "./components/StartModal";

function App() {
  const [hoveringPick, setHoveringPick] = useState("x");
  const [player1, setPlayer1] = useState("x");
  const [player2, setPlayer2] = useState("");

  const handleHoveringPick = () => {
    setHoveringPick((prev) => (prev === "x" ? "o" : "x"));
  };

  const handleSetPlayerPick = () => {
    setPlayer1(hoveringPick);
    setPlayer2(hoveringPick === "x" ? "o" : "x");
  };

  return (
    <>
      {!player2 && (
        <StartModal
          setHoveringPick={handleHoveringPick}
          setPick={handleSetPlayerPick}
          hoveringPick={hoveringPick}
        />
      )}
      {player2 && <GameContainer player1={player1} player2={player2} />}
    </>
  );
}

export default App;
