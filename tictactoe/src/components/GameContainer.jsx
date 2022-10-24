import reload from "../assets/reload.png";
import classes from "./styles/GameContainer.module.css";

import { O } from "./UI/o";
import { X } from "./UI/x";
import { GridCell } from "./GridCell";
import { Modal } from "./Modal";

import { checkResult, checkDraw } from "./helpers/checkWinning";

import React, { useEffect, useReducer, useState } from "react";
import { Reload } from "./Reload";

const reducer = (state, action) => {
  switch (action.type) {
    case "change-turn": {
      return { ...state, turn: action.turn };
    }
    case "score-player1": {
      return { ...state, player1Score: state.player1Score + 1 };
    }
    case "score-player2": {
      return { ...state, player2Score: state.player2Score + 1 };
    }
    case "score-pair": {
      return { ...state, pairs: state.pairs + 1 };
    }
    default:
  }
};

const initialGameState = {
  turn: "x",
  player1Score: 0,
  player2Score: 0,
  pairs: 0,
};

export function GameContainer({ player1, player2 }) {
  const [gameState, dispatch] = useReducer(reducer, initialGameState);

  const [grid, setGrid] = useState(new Array(9).fill(""));
  const [result, setResult] = useState(null);

  const [justLoaded, setJustLoaded] = useState(true);
  const [showReload, setShowReload] = useState(false);

  useEffect(() => {
    const winner = checkResult(grid, gameState.turn);
    const draw = checkDraw(grid);

    if (winner) {
      setResult("win");

      gameState.turn === player1
        ? dispatch({ type: "score-player1" })
        : dispatch({ type: "score-player2" });

      return;
    }

    if (draw) {
      setResult("pair");
      dispatch({ type: "score-pair" });
      return;
    }

    if (justLoaded) {
      return setJustLoaded(false);
    }

    dispatch({ type: "change-turn", turn: gameState.turn === "x" ? "o" : "x" });
  }, [grid]);

  const handleCellClick = (clickIndex) => {
    setGrid((prev) =>
      prev.map((cell, cellIndex) => {
        return clickIndex === cellIndex ? (cell = gameState.turn) : cell;
      })
    );
  };

  const nextRound = (startingSign) => {
    setGrid(new Array(9).fill(""));
    dispatch({ type: "change-turn", turn: startingSign });
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
              {gameState.turn === "x" ? <X /> : <O />}
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
                turn={gameState.turn}
                cellClick={handleCellClick}
              />
            ))}
          </div>
          <div className={classes.scores}>
            <div className={classes["scores__player-one"]}>
              <span>{player1.toUpperCase()} (PLAYER 1)</span>
              <span className={classes.score}>{gameState.player1Score}</span>
            </div>
            <div className={classes["secores__pairs"]}>
              <span>TIES</span>
              <span className={classes.score}>{gameState.pairs}</span>
            </div>
            <div className={classes["secores__player-two"]}>
              <span>{player2.toUpperCase()} (PLAYER 2)</span>
              <span className={classes.score}>{gameState.player2Score}</span>
            </div>
          </div>
        </div>
      )}
      {result === "win" && (
        <Modal
          winner={gameState.turn}
          player1={player1}
          nextRound={nextRound}
          result={result}
        />
      )}
      {result === "pair" && <Modal nextRound={nextRound} result={result} />}
    </>
  );
}
