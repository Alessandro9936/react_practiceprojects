import React from "react";
export function Modal({ x }) {
  return (
    <div className="modal">
      <p className="winner">YOU WON!</p>
      <div className="next-round-starter">
        <img src={x} alt="" />
        <p className="blue-light">TAKES THE ROUND</p>
      </div>

      <div className="options">
        <button className="back">QUIT</button>
        <button className="next">NEXT ROUND</button>
      </div>
    </div>
  );
}
