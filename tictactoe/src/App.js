import x from "./assets/x.png";
import o from "./assets/o.png";
import x64 from "./assets/x64.png";
import o64 from "./assets/o64.png";
import reload from "./assets/reload.png";

function App() {
  return (
    <>
      {/* Starting 
      <div className="start">
        <div className="choose-container">
          <p>PICK PLAYER 1'S MARK</p>
          <div className="chooses">
            <div className="active">X</div>
            <div className="">O</div>
          </div>
          <p>REMEMBER: X GOES FIRST</p>
        </div>
        <div className="opponent-container">
          <button className="yellow-button">NEW GAME (VS CPU)</button>
          <button className="light-blue-button">NEW GAME (VS PLAYER)</button>
        </div>
      </div>
      */}

      {/* Overlay 
      
      <div className="overlay"></div>
      */}

      {/* Board
      
      <div className="game-container">
        <div className="commands">
          <div className="commands__options">
            <img src={x} alt="x sign" />
            <img src={o} alt="o sign" />
          </div>
          <div className="commands__turn">
            <img src={x} alt="x sign" />
            <span>TURN</span>
          </div>
          <div className="commands__restart">
            <img src={reload} alt="reload" />
          </div>
        </div>
        <div className="game-grid">
          <div className="game-grid__cell">
            <img src={o64} alt="" />
          </div>
          <div className="game-grid__cell">
            <img src={x64} alt="" />
          </div>
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
            <span>X (YOU)</span>
            <span className="score">10</span>
          </div>
          <div className="secores__pairs">
            <span>TIES</span>
            <span className="score">10</span>
          </div>
          <div className="secores__player-two">
            <span>O (CPU)</span>
            <span className="score">10</span>
          </div>
        </div>
      </div>
      */}

      {/* Modal

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
       */}
    </>
  );
}

export default App;
