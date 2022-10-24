import React from "react";
import classes from "./styles/OptionButtons.module.css";

export function OptionButtons({ reloadGame, startNewRound }) {
  return (
    <div className={classes.options}>
      <button className={classes.back} onClick={reloadGame}>
        QUIT
      </button>
      <button className={classes.next} onClick={startNewRound}>
        NEXT ROUND
      </button>
    </div>
  );
}
