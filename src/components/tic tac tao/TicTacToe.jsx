import { useState, useEffect, useRef } from "react";
import { IoMdHome } from "react-icons/io";
import { VscDebugRestart } from "react-icons/vsc";
import { FaUser } from "react-icons/fa";
import './board.css'


const PLAYER_X = "X";
const PLAYER_O = "O";

const winningCombinations = [
  //Rows
  { combo: [0, 1, 2], strikeClass: "strike-row-1" },
  { combo: [3, 4, 5], strikeClass: "strike-row-2" },
  { combo: [6, 7, 8], strikeClass: "strike-row-3" },

  //Columns
  { combo: [0, 3, 6], strikeClass: "strike-column-1" },
  { combo: [1, 4, 7], strikeClass: "strike-column-2" },
  { combo: [2, 5, 8], strikeClass: "strike-column-3" },

  //Diagonals
  { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
  { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];

function checkWinner(tiles, setStrikeClass, setGameState, setGameOver) {
  for (const { combo, strikeClass } of winningCombinations) {
    const tileValue1 = tiles[combo[0]];
    const tileValue2 = tiles[combo[1]];
    const tileValue3 = tiles[combo[2]];

    if (
      tileValue1 !== null &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3
    ) {
      setStrikeClass(strikeClass);
      setGameState(tileValue1 === PLAYER_X ? "X" : "O");

      // Delay showing game over message and play again button
      setTimeout(() => {
        setGameOver(true); // Set game over after 3 seconds delay
      }, 3000);
      
      return;
    }
  }

  const areAllTilesFilledIn = tiles.every((tile) => tile !== null);
  if (areAllTilesFilledIn) {
    setGameState("Draw");
    // Delay showing game over message and play again button
    setTimeout(() => {
      setGameOver(true); // Set game over after 3 seconds delay
    }, 3000);
  }
}

function TicTacToe() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState(null);
  const [gameState, setGameState] = useState("In Progress");
  const [gameOver, setGameOver] = useState(false); // State to track if game is over
  const [gameStarted, setGameStarted] = useState(false);
  const gameOverSound = useRef(new Audio("./sounds/tictactoeSounds/game_over.wav"));
gameOverSound.volume = 0.2;
const clickSound = useRef(new Audio("./sounds/tictactoeSounds/click.wav"));
clickSound.volume = 0.5;
const GameSound = useRef(new Audio("./sounds/tictactoeSounds/tictactoe.mp3"));
GameSound.volume=0.1;

  const handleTileClick = (index) => {
    if (gameState !== "In Progress" || tiles[index] !== null) {
      return;
    }

    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);
    setPlayerTurn(playerTurn === PLAYER_X ? PLAYER_O : PLAYER_X);
  };

  const handleReset = () => {
    setTiles(Array(9).fill(null));
    setPlayerTurn(PLAYER_X);
    setStrikeClass(null);
    setGameState("In Progress");
    setGameOver(false); // Reset game over state
  };

  const handleBackToHome = () => {
    setTiles(Array(9).fill(null));
    setPlayerTurn(PLAYER_X);
    setStrikeClass(null);
    setGameState("In Progress");
    setGameStarted(false);
    setGameOver(false);
    GameSound.current.pause()
  };

  useEffect(() => {
    checkWinner(tiles, setStrikeClass, setGameState, setGameOver);
  }, [tiles]);

  useEffect(() => {
    if (tiles.some((tile) => tile !== null)) {
      clickSound.current.play();
    }
  }, [tiles]);

  useEffect(() => {
    if (gameState !== "In Progress") {
      gameOverSound.current.play();
    }
  }, [gameState]);
  const handleStartGame =()=>{
    setGameStarted(true)
    GameSound.current.play()
  }

  return (
    <div className="TicTacToe-body">
      {!gameStarted && (
        <div className="mainPage-tictactoe">
          <span className="T-heading">T<span className="T-middleHeading">I</span>C</span>
          <span className="T-heading"><span className="T-middleHeading">T</span>A<span className="T-middleHeading">C</span></span>
          <span className="T-heading">T<span className="T-middleHeading">O</span>E</span>
          <button onClick={handleStartGame} className="Tstart-button">
            Start Now
          </button>
        </div>
      )}
      {gameStarted && !gameOver && (
        <>
          <div className="top-boxes">
            <div className={`player-box ${playerTurn === PLAYER_X ? "red" : ""}`}>
              <FaUser/>
              <h1>Player X</h1>
              </div>
            <div className={`player-box ${playerTurn === PLAYER_O ? "yellow" : ""}`}><FaUser/>
              <h1>Player O</h1></div>
          </div>
          <div className="TicTacToe-board">
            {tiles.map((tile, index) => (
              <div
                key={index}
                className={`tile ${index % 3 === 2 ? "" : "right-border"} ${
                  index < 6 ? "bottom-border" : ""
                } ${tile !== null ? "disabled" : ""} ${tile === PLAYER_X ? "x" : tile === PLAYER_O ? "o" : ""}` } 
                onClick={() => handleTileClick(index)}
              >
                {tile}
              </div>
            ))}
            {strikeClass && <div className={`strike ${strikeClass}`} />}
          </div>
          <div style={{display:'flex',gap:'28px'}}>
              <button onClick={handleReset} className="Treset-button">
            <VscDebugRestart/>
          </button>
          <button onClick={handleBackToHome} className="Treset-button">
            <IoMdHome />
          </button>
            </div>
        </>
      )}
      {gameOver && (
        <><div className="Tgame-over">
          {gameState === "X" && "X Wins"}
          {gameState === "O" && "O Wins"}
          {gameState === "Draw" && "Draw"}
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:'30px'}}>
          {gameState === "Draw" ? (
              <img
                src="./images/GIFs/Draw.gif"
                alt="#"
                className="celebration-gif"
              />
            ) : (
              <img
                src="./images/GIFs/winner.gif"
                alt="#"
                className="celebration-gif"
              />
            )}
            <div style={{display:'flex',gap:'28px'}}>
              <button onClick={handleReset} className="Treset-button">
            Play Again
          </button>
          <button onClick={handleBackToHome} className="Treset-button">
            <IoMdHome />
          </button>
            </div>
        </div>
          </>
      )}
    </div>
  );
}

export default TicTacToe;

