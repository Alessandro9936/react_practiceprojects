function App() {
  return (
    <>
      {/* Starting */}
      <div className="start">
        <div className="choose-container">
          <p>PICK PLAYER 1'S MARK</p>
          <div className="chooses">
            <span className="chooses__x"></span>
            <span className="chooses__o"></span>
          </div>
          <p>REMEMBER: X GOES FIRST</p>
        </div>
        <div className="opponent-container">
          <button className="cpu">NEW GAME (VS CPU)</button>
          <button className="VS PLAYER">NEW GAME (VS PLAYER)</button>
        </div>
      </div>

      {/* Board */}
      <div className="game-container">
        <div className="commands">
          <div className="commands__options"></div>
          <div className="commands__turn"></div>
          <div className="commands__restart"></div>
        </div>
        <div className="game-grid">
          <div className="game-grid__cell"></div>
          <div className="game-grid__cell"></div>
          <div className="game-grid__cell"></div>
          <div className="game-grid__cell"></div>
          <div className="game-grid__cell"></div>
          <div className="game-grid__cell"></div>
          <div className="game-grid__cell"></div>
          <div className="game-grid__cell"></div>
          <div className="game-grid__cell"></div>
        </div>
        <div className="scores">
          <div className="scores__player-one">
            <span>X(YOU)</span>
            <span>10</span>
          </div>
          <div className="secores__pairs">
            <span>TIES</span>
            <span>10</span>
          </div>
          <div className="secores__player-two">
            <span>O(CPU)</span>
            <span>10</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className="modal">
        <p className="winner">YOU WON!</p>
        <p className="next-round-starter">
          <span>X</span>
          TAKES THE ROUND
        </p>
        <div className="options">
          <button className="back">QUIT</button>
          <button className="next">NEXT ROUND</button>
        </div>
      </div>
    </>
  );
}

export default App;
