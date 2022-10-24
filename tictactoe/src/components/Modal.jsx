import { OptionButtons } from "./OptionButtons";
import React from "react";
import x64 from "../assets/x64.png";
import o64 from "../assets/o64.png";
import classes from "./styles/Modal.module.css";

export function Modal({ winner, player1, nextRound, result }) {
  const winnerPlayer = winner === player1 ? "PLAYER 1" : "PLAYER 2";

  const reloadGame = () => {
    window.location.reload();
  };

  const startNewRound = () => {
    nextRound(winner || "x");
  };

  return (
    <>
      {result === "win" && (
        <div className={classes.modal}>
          <p className={classes.winner}>{winnerPlayer} WON!</p>
          <div className={classes["next-round-starter"]}>
            <img src={winner === "x" ? x64 : o64} alt="" />

            <p
              className={`${
                winner === "x" ? classes["blue-light"] : classes.yellow
              }`}
            >
              TAKES THE ROUND
            </p>
          </div>

          <OptionButtons
            reloadGame={reloadGame}
            startNewRound={startNewRound}
          />
        </div>
      )}

      {result === "pair" && (
        <div className={classes.modal}>
          <p className={classes.winner}>PAIR!</p>
          <div className={classes["next-round-starter"]}>
            <img src={x64} alt="" />

            <p className={classes["blue-light"]}>TAKES THE ROUND</p>
          </div>

          <OptionButtons
            reloadGame={reloadGame}
            startNewRound={startNewRound}
          />
        </div>
      )}
    </>
  );
}
