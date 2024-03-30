import React, { useState, useEffect, useCallback, useRef } from "react";
import { RxCross1, RxPlay } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import { TiArrowForward } from "react-icons/ti";
import "./ClickbyClick.css";

const levels = [
  { image: "./images/HideImages/1.jpg", buttons: 5 },
  { image: "./images/HideImages/2.jpg", buttons: 5 },
  { image: "./images/HideImages/3.jpg", buttons: 5 },
  { image: "./images/HideImages/4.jpg", buttons: 5 },
  { image: "./images/HideImages/5.jpg", buttons: 5 },
  { image: "./images/HideImages/6.jpg", buttons: 10 },
  { image: "./images/HideImages/7.webp", buttons: 10 },
  { image: "./images/HideImages/8.png", buttons: 10 },
  { image: "./images/HideImages/9.jpg", buttons: 10 },
  { image: "./images/HideImages/10.jpg", buttons: 10 },
  { image: "./images/HideImages/11.jpg", buttons: 15 },
  { image: "./images/HideImages/12.jpg", buttons: 15 },
  { image: "./images/HideImages/13.jpeg", buttons: 15 },
  { image: "./images/HideImages/14.jpg", buttons: 15 },
  { image: "./images/HideImages/15.jpeg", buttons: 15 },
  { image: "./images/HideImages/16.jpg", buttons: 20 },
  { image: "./images/HideImages/17.jpg", buttons: 20 },
  { image: "./images/HideImages/18.jpg", buttons: 20 },
  { image: "./images/HideImages/19.jpg", buttons: 20 },
  { image: "./images/HideImages/20.jpg", buttons: 20 },
  { image: "./images/HideImages/21.jpg", buttons: 25 },
  { image: "./images/HideImages/22.jpg", buttons: 25 },
  { image: "./images/HideImages/23.jpg", buttons: 25 },
  { image: "./images/HideImages/24.avif", buttons: 25 },
  { image: "./images/HideImages/25.png", buttons: 25 },
  { image: "./images/HideImages/26.avif", buttons: 30 },
  { image: "./images/HideImages/27.png", buttons: 30 },
  { image: "./images/HideImages/28.jpeg", buttons: 30 },
  { image: "./images/HideImages/29.jpg", buttons: 30 },
  { image: "./images/HideImages/30.jpeg", buttons: 30 },
  { image: "./images/HideImages/31.jpg", buttons: 35 },
  { image: "./images/HideImages/32.webp", buttons: 35 },
  { image: "./images/HideImages/33.jpg", buttons: 35 },
  { image: "./images/HideImages/34.jpg", buttons: 35 },
  { image: "./images/HideImages/35.png", buttons: 35 },
];

function shuffleArray(array) {
  // Fisher-Yates Shuffle Algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function ClickByClick() {
  const [currentLevel, setCurrentLevel] = useState(() => {
    const storedLevel = localStorage.getItem("currentLevel");
    return storedLevel !== null && !isNaN(storedLevel)
      ? parseInt(storedLevel)
      : 0;
  });

  const [startingNumber, setStartingNumber] = useState(1);
  const [unorderedNumbers, setUnorderedNumbers] = useState(() => {
    const buttonsCount = levels[currentLevel].buttons;
    return shuffleArray(
      Array.from({ length: buttonsCount }, (_, index) => index + startingNumber)
    );
  });

  const [clickedContainers, setClickedContainers] = useState([]);
  const [showGrid, setShowGrid] = useState(false);
  const [showWinningMessage, setShowWinningMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [completedLevels, setCompletedLevels] = useState(() => {
    const storedCompletedLevels = localStorage.getItem("completedLevels");
    return storedCompletedLevels !== null
      ? JSON.parse(storedCompletedLevels)
      : [];
  });
  const [gameStarted, setGameStarted] = useState(false);
  // sounds
  const correctAnswerSoundRef = useRef(new Audio("./sounds/correct.wav"));
  const wrongAnswerSoundRef = useRef(new Audio("./sounds/error.wav"));
  const gamewinAnswerSoundRef = useRef(new Audio("./sounds/gamewin.wav"));

  const handleComplete = () => {
    setTimeout(() => {
      gamewinAnswerSoundRef.current.play();
      setShowWinningMessage(true);
    }, 1000);
    setShowGrid(false);
    setCompletedLevels((prevCompletedLevels) => [
      ...prevCompletedLevels,
      currentLevel,
    ]);
    setTimeout(() => {
      handleNextLevel();
    }, 6000); // Adjust the delay for next level (5000 milliseconds = 5 seconds)
  };

  useEffect(() => {
    localStorage.setItem("currentLevel", currentLevel.toString());
    const previousLevelsButtons = levels
      .slice(0, currentLevel)
      .reduce((acc, curr) => acc + curr.buttons, 0);
    setStartingNumber(previousLevelsButtons + 1);
  }, [currentLevel]);

  useEffect(() => {
    if (showGrid) {
      setUnorderedNumbers(
        shuffleArray(
          Array.from(
            { length: levels[currentLevel].buttons },
            (_, index) => index + startingNumber
          )
        )
      );
    }
  }, [currentLevel, showGrid, startingNumber]);

  useEffect(() => {
    if (clickedContainers.length === levels[currentLevel].buttons) {
      handleComplete(); // Add handleComplete to the dependency array
    }
  }, [clickedContainers, currentLevel, handleComplete]);

  useEffect(() => {
    let timeoutId;
    if (errorMessage) {
      timeoutId = setTimeout(() => {
        setErrorMessage(false);
      }, 2000); // 2 seconds
    }

    return () => clearTimeout(timeoutId);
  }, [errorMessage]);

  useEffect(() => {
    setShowGrid(true); // Ensure grid is shown on initial render
  }, []);
  useEffect(() => {
    if (showWinningMessage && currentLevel === levels.length - 1) {
      // If the current level is the last level and the winning message is shown
      // Reset the game state and clear local storage
      setCurrentLevel(0);
      setCompletedLevels([]);
      localStorage.removeItem("currentLevel");
      localStorage.removeItem("completedLevels");
    }
  }, [currentLevel, showWinningMessage]);
  useEffect(() => {
    localStorage.setItem("completedLevels", JSON.stringify(completedLevels));
  }, [completedLevels]);

  const handleClick = (number) => {
    const expectedNumber = clickedContainers.length + 1 + startingNumber - 1;
    if (number === expectedNumber) {
      setClickedContainers((prevClickedContainers) => [
        ...prevClickedContainers,
        number,
      ]);
      correctAnswerSoundRef.current.play();
      setErrorMessage(false); // Clear error message on correct click
    } else {
      setErrorMessage(true);
      wrongAnswerSoundRef.current.play();
    }
  };

  const isClicked = (number) => {
    return clickedContainers.includes(number);
  };

  const handleNextLevel = () => {
    setCurrentLevel((prevLevel) => prevLevel + 1);
    setShowGrid(true);
    setShowWinningMessage(false);
    setClickedContainers([]);
    setErrorMessage(false); // Reset error message for new level
  };

  const handleRestartLevel = () => {
    setShowWinningMessage(false);
    setShowGrid(true);
    setClickedContainers([]);
    setErrorMessage(false); // Reset error message for restart
    setUnorderedNumbers(
      shuffleArray(
        Array.from(
          { length: levels[currentLevel].buttons },
          (_, index) => index + startingNumber
        )
      )
    );
  };

  const handleLevelSelection = (levelIndex) => {
    setCurrentLevel(levelIndex);
    setShowGrid(true);
    setShowWinningMessage(false);
    setClickedContainers([]);
    setErrorMessage(false); // Reset error message when selecting a level
  };
  const handleStartNow = () => {
    // gameSoundRef.current.play();
    setGameStarted(true);
  };
  const handleBackToHome = () => {
    setGameStarted(false);
    setCurrentLevel(0);
    setShowWinningMessage(false);
    setShowGrid(false);
    setClickedContainers([]);
    setErrorMessage(false);
  };
  return (
    <div
      style={{
        backgroundImage: 'url("./images/HideImages/ClickBG.jpg")',
        backgroundSize: "cover",
        objectFit: "fill",
        height: "150vh",
        textAlign: "center",
        padding: "30px",
      }}
    >
      {!gameStarted && (
        <>
          <div className="startPageBoard">
            <div className="startPageBoardImg">
              <img src="./images/HideImages/headingBoard.png" alt="#" />
            </div>
            <div className="startPageBoardHeading">
              <h1 className="Clickheading">Click By Click</h1>
              <div className="magic-text">
                <div className="magic-text1">M</div>
                <div className="magic-text2">A</div>
                <div className="magic-text3">G</div>
                <div className="magic-text4">I</div>
                <div className="magic-text5">C</div>
              </div>
              <button onClick={handleStartNow} className="PlayBtn">
                <RxPlay /> Play
              </button>
            </div>
          </div>
        </>
      )}
      {gameStarted && (
        <>
          <div className="level-buttons">
            {levels.map((level, index) => (
              <button
                key={index}
                onClick={() => handleLevelSelection(index)}
                className={`level-btn ${
                  index === currentLevel ? "active" : ""
                }`}
                disabled={
                  !completedLevels.includes(index) &&
                  (index > currentLevel ||
                    (!completedLevels.includes(index) &&
                      index === currentLevel))
                }
              >
                {index + 1}
              </button>
            ))}
          </div>
          <p className="startNumtxt">
            Starting Number: <q className="startNum">{startingNumber}</q>
          </p>
          <div className="restart" style={{ position: "relative" }}>
            <button onClick={handleRestartLevel} className="restart-btn">
              <VscDebugRestart />
              <p className="hide-Para">Restart Level</p>
            </button>
            <button onClick={handleBackToHome} className="backToHomebtn">
              <FaHome />
            </button>
            {currentLevel < levels.length - 1 && (
              <button
                onClick={handleNextLevel}
                className="next-level-btn"
                disabled={!completedLevels.includes(currentLevel)}
              >
                <p className="hide-Para">Next Level</p>
                <TiArrowForward />
              </button>
            )}
          </div>
          <div className="gridWithImg">
            {!showWinningMessage && (
              <div>
                {errorMessage && (
                  <div className="cross-message">
                    <div className="error-symbol">
                      <RxCross1 />
                    </div>
                  </div>
                )}
                <div className="imgContainer">
                  <img
                    src={levels[currentLevel].image}
                    alt="#"
                    className="dog-img"
                  />
                </div>
                {showGrid && (
                  <div className="grid-container">
                    {unorderedNumbers.map((number, index) => (
                      <div
                        key={index}
                        className={`child-container ${
                          isClicked(number) ? "clicked" : ""
                        } ${
                          number === startingNumber ? "starting-number" : ""
                        }`}
                        onClick={() => handleClick(number)}
                      >
                        <p className="numbers">{number}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="wins">
            {showWinningMessage && (
              <div className="winning-message">
                <p className="congrats"> YOU DID IT! 🎉</p>
                <img
                  src="./images/GIFs/celebrate-mocha.gif"
                  alt="#"
                  className="did-it"
                />
                <p className="well-done">
                  {" "}
                  Well Done Just you Passed the level <q>{currentLevel + 1}</q>
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default ClickByClick;
