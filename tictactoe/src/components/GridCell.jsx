import React, { useState } from "react";

import classes from "./styles/GridCell.module.css";
import x64 from "../assets/x64.png";
import o64 from "../assets/o64.png";

export function GridCell({ turn, index, cellClick }) {
  const [onHover, setOnHover] = useState(false);
  const [fill, setFill] = useState(null);

  const handleOnHover = () => {
    setOnHover(!onHover);
  };

  const handleCellClick = () => {
    if (fill) return;

    setFill(turn === "x" ? "x" : "o");
    cellClick(index);
  };

  return (
    <div
      className={classes["game-grid__cell"]}
      onMouseEnter={handleOnHover}
      onMouseLeave={handleOnHover}
      onClick={handleCellClick}
    >
      {onHover && !fill && (
        <img src={turn === "x" ? x64 : o64} alt="active sign" />
      )}
      {fill && <img src={fill === "x" ? x64 : o64} alt="cell sign" />}
    </div>
  );
}
