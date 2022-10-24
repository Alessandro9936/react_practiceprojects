import reload from "../assets/reload.png";
import classes from "./styles/GameContainer.module.css";

import { O } from "./UI/o";
import { X } from "./UI/x";
import { GridCell } from "./GridCell";
import { Modal } from "./Modal";

import { checkResult, checkDraw } from "./helpers/checkWinning";

import React, { useEffect, useState } from "react";
import { Reload } from "./Reload";

export function GameContainer({ player1, player2 }) {
  const [grid, setGrid] = useState(new Array(9).fill(""));
  const [turn, setTurn] = useState("x");

  const [justLoaded, setJustLoaded] = useState(true);
  const [result, setResult] = useState(null);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [pairs, setPairs] = useState(0);
  const [showReload, setShowReload] = useState(false);

  useEffect(() => {
    const winner = checkResult(grid, turn);
    const draw = checkDraw(grid);

    if (winner) {
      setResult("win");

      turn === player1
        ? setPlayer1Score((prev) => prev + 1)
        : setPlayer2Score((prev) => prev + 1);

      return;
    }

    if (draw) {
      setResult("pair");
      setPairs((prev) => prev + 1);
      return;
    }

    if (justLoaded) {
      return setJustLoaded(false);
    }

    setTurn((prev) => (prev === "x" ? "o" : "x"));
  }, [grid]);

  const handleCellClick = (clickIndex) => {
    setGrid((prev) =>
      prev.map((cell, cellIndex) => {
        return clickIndex === cellIndex ? (cell = turn) : cell;
      })
    );
  };

  const nextRound = (startingSign) => {
    setGrid(new Array(9).fill(""));
    setTurn(startingSign);
    setJustLoaded(true);
    setResult(null);
  };

  const handleReload = () => {
    setShowReload((prev) => !prev);
  };

  return (
    <>
      {showReload && <Reload closeReload={handleReload} />}
      {!result && (
        <div className={classes["game-container"]}>
          <div className={classes.commands}>
            <div className={classes["commands__options"]}>
              <X />
              <O />
            </div>
            <div className={classes["commands__turn"]}>
              {turn === "x" ? <X /> : <O />}
              <span>TURN</span>
            </div>
            <div
              className={classes["commands__restart"]}
              onClick={handleReload}
            >
              <img src={reload} alt="reload" />
            </div>
          </div>
          <div className={classes["game-grid"]}>
            {grid.map((_, i) => (
              <GridCell
                key={i}
                index={i}
                turn={turn}
                cellClick={handleCellClick}
              />
            ))}
          </div>
          <div className={classes.scores}>
            <div className={classes["scores__player-one"]}>
              <span>{player1.toUpperCase()} (PLAYER 1)</span>
              <span className={classes.score}>{player1Score}</span>
            </div>
            <div className={classes["secores__pairs"]}>
              <span>TIES</span>
              <span className={classes.score}>{pairs}</span>
            </div>
            <div className={classes["secores__player-two"]}>
              <span>{player2.toUpperCase()} (PLAYER 2)</span>
              <span className={classes.score}>{player2Score}</span>
            </div>
          </div>
        </div>
      )}
      {result === "win" && (
        <Modal
          winner={turn}
          player1={player1}
          nextRound={nextRound}
          result={result}
        />
      )}
      {result === "pair" && <Modal nextRound={nextRound} result={result} />}
    </>
  );
}
