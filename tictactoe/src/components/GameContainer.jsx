import reload from "../assets/reload.png";
import classes from "./styles/GameContainer.module.css";

import { O } from "./UI/o";
import { X } from "./UI/x";
import { GridCell } from "./GridCell";

import React from "react";

export function GameContainer() {
  return (
    <div className={classes["game-container"]}>
      <div className={classes.commands}>
        <div className={classes["commands__options"]}>
          <X />
          <O />
        </div>
        <div className={classes["commands__turn"]}>
          <X />
          <span>TURN</span>
        </div>
        <div className={classes["commands__restart"]}>
          <img src={reload} alt="reload" />
        </div>
      </div>
      <div className={classes["game-grid"]}>
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
      </div>
      <div className={classes.scores}>
        <div className={classes["scores__player-one"]}>
          <span>X (YOU)</span>
          <span className={classes.score}>10</span>
        </div>
        <div className={classes["secores__pairs"]}>
          <span>TIES</span>
          <span className={classes.score}>10</span>
        </div>
        <div className={classes["secores__player-two"]}>
          <span>O (CPU)</span>
          <span className={classes.score}>10</span>
        </div>
      </div>
    </div>
  );
}
