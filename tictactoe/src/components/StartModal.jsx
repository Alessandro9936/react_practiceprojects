import React from "react";
import classes from "./styles/StartModal.module.css";

export function StartModal({ setPick, setHoveringPick, hoveringPick }) {
  const handleSetPicks = (e) => {
    const opponent = e.target.getAttribute("data-player");
    setPick(opponent);
  };

  return (
    <div className={classes.start}>
      <div className={classes["choose-container"]}>
        <p>PICK PLAYER 1'S MARK</p>
        <div className={classes.chooses}>
          <div
            className={`${hoveringPick === "x" ? classes.active : ""}`}
            onClick={setHoveringPick}
          >
            X
          </div>
          <div
            className={`${hoveringPick === "o" ? classes.active : ""}`}
            onClick={setHoveringPick}
          >
            O
          </div>
        </div>
        <p>REMEMBER: X GOES FIRST</p>
      </div>
      <div className={classes["opponent-container"]}>
        <button
          data-player="player"
          className={classes["yellow-button"]}
          onClick={handleSetPicks}
        >
          NEW GAME (VS CPU)
        </button>
        <button
          data-player="cpu"
          className={classes["light-blue-button"]}
          onClick={handleSetPicks}
        >
          NEW GAME (VS PLAYER)
        </button>
      </div>
    </div>
  );
}
