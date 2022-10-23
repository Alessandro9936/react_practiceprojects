import React from "react";
import classes from "./styles/StartModal.module.css";

export function StartModal({}) {
  return (
    <div className={classes.start}>
      <div className={classes["choose-container"]}>
        <p>PICK PLAYER 1'S MARK</p>
        <div className={classes.chooses}>
          <div className={classes.active}>X</div>
          <div className="">O</div>
        </div>
        <p>REMEMBER: X GOES FIRST</p>
      </div>
      <div className={classes["opponent-container"]}>
        <button className={classes["yellow-button"]}>NEW GAME (VS CPU)</button>
        <button className={classes["light-blue-button"]}>
          NEW GAME (VS PLAYER)
        </button>
      </div>
    </div>
  );
}
