import React from "react";
import classes from "./styles/StartModal.module.css";

export function StartModal({ setPick, setHoveringPick, hoveringPick }) {
  const handleSetPicks = () => {
    setPick(hoveringPick);
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
        <button className={classes["yellow-button"]} onClick={handleSetPicks}>
          NEW GAME
        </button>
      </div>
    </div>
  );
}
