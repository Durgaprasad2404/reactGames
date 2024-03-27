import React, { useState, useEffect, useRef } from "react";
import "./colorfill.css";
import {
  FaDog,
  FaCat,
  FaFish,
  FaHorse,
  FaDragon,
  FaDove,
  FaHippo,
  FaSpider,
  FaFrog,
  FaKiwiBird,
} from "react-icons/fa";
import {
  GiBearHead,
  GiButterfly,
  GiCow,
  GiCrab,
  GiDolphin,
  GiElephant,
  GiKangaroo,
  GiLion,
  GiMonkey,
  GiOctopus,
  GiOwl,
  GiPanda,
  GiPenguin,
  GiPig,
  GiSeaTurtle,
  GiSnake,
  GiSquirrel,
} from "react-icons/gi";

function ColorFill() {
  const [selectedColor, setSelectedColor] = useState("");
  const [currentLevel, setCurrentLevel] = useState(1);
  const [questionColor, setQuestionColor] = useState("");
  const [questionOptions, setQuestionOptions] = useState([]);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [hideUI, setHideUI] = useState(false);
  const [isColored, setIsColored] = useState(false);

  const wrongAnswerSoundRef = useRef(
    new Audio("/sounds/colorFillSounds/noNo.mp3")
  );
  const correctAnswerSoundRef = useRef(
    new Audio("/sounds/colorFillSounds/yesYes.mp3")
  );
  const winningEndAnswerSoundRef = useRef(
    new Audio("/sounds/colorFillSounds/winningEnd.mp3")
  );

  const levelIcons = {
    1: FaDog,
    2: FaCat,
    3: FaFish,
    4: FaHorse,
    5: FaKiwiBird,
    6: FaDragon,
    7: FaDove,
    8: FaHippo,
    9: GiElephant,
    10: GiSeaTurtle,
    11: FaSpider,
    12: GiButterfly,
    13: GiPig,
    14: GiCow,
    15: FaFrog,
    16: GiLion,
    17: GiBearHead,
    18: GiMonkey,
    19: GiOwl,
    20: GiSquirrel,
    21: GiPanda,
    22: GiKangaroo,
    23: GiDolphin,
    24: GiOctopus,
    25: GiCrab,
    26: GiPenguin,
    27: GiSnake,
  };

  // Function to advance to the next level
  const advanceLevel = () => {
    const nextLevel = currentLevel + 1;
    if (nextLevel <= Object.keys(levelIcons).length) {
      setCurrentLevel(nextLevel);
      setQuestion();
    } else {
      // Handle case when all levels are completed
      console.log("All levels completed!");
    }
  };

  // Set question color and options
  const setQuestion = () => {
    const questionColor = getRandomColor();
    const questionOptions = generateOptions(questionColor);
    setQuestionColor(questionColor);
    setQuestionOptions(questionOptions);
    setSelectedColor("");
    setIsAnswerCorrect(null);
    setShowMessage(false);
    setHideUI(false);
  };

  // Get a random color for the question
  const getRandomColor = () => {
    const colors = [
      "Red",
      "Orange",
      "Yellow",
      "Green",
      "Blue",
      "Indigo",
      "Violet",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Generate options for the question
  const generateOptions = (questionColor) => {
    const colors = [
      "Red",
      "Orange",
      "Yellow",
      "Green",
      "Blue",
      "Indigo",
      "Violet",
    ];
    const filteredColors = colors.filter((color) => color !== questionColor);
    const shuffledOptions = shuffleArray(filteredColors);
    const options = [questionColor, ...shuffledOptions.slice(0, 3)];
    return shuffleArray(options);
  };

  // Shuffle array
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Check if the selected color is correct
  const checkAnswer = (color) => {
    if (color === questionColor) {
      setIsAnswerCorrect(true);
      correctAnswerSoundRef.current.play();
      setSelectedColor(color);
      setTimeout(() => {
        setShowMessage(true);
        setHideUI(true);
        winningEndAnswerSoundRef.current.play();
        setTimeout(() => {
          advanceLevel();
          setShowMessage(false);
          setHideUI(false);
          setIsAnswerCorrect(null);
        }, 5000);
      }, 2000); // Show message for 2 seconds before hiding UI
      setTimeout(() => {
        setIsAnswerCorrect(null);
      }, 2000); // Reset isAnswerCorrect after 2 seconds
    } else {
      wrongAnswerSoundRef.current.play();
      setIsAnswerCorrect(false);
      setTimeout(() => {
        setIsAnswerCorrect(null);
      }, 2000);
    }
  };

  useEffect(() => {
    setQuestion();
  }, []);

  const IconComponent = levelIcons[currentLevel];

  return (
    <div
      style={{
        backgroundImage: "url('./colorFill/ColorFillBG.jpg')",
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
      }}
    >
      {isColored ? (
        <>
          <div>
            {!hideUI && (
              <div className="GameUI">
                <div className="ColorContainer">
                  <div
                    className="uncolored-icon"
                    style={{ color: selectedColor }}
                  >
                    <IconComponent />
                  </div>
                </div>
                <div className="colorQuestion">
                  Can You Fill the icon with the color:{" "}
                  <q className="colorInQuestion">{questionColor}</q> ?
                </div>
                {isAnswerCorrect !== null && !showMessage && (
                  <div
                    className={`correctIncorrect ${
                      isAnswerCorrect ? "colorGreen" : "colorRed"
                    }`}
                  >
                    {isAnswerCorrect ? "✔ Correct" : "✗ Incorrect!"}
                  </div>
                )}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    flexWrap: "wrap",
                  }}
                >
                  {questionOptions.map((color, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: color,
                        height: "100px",
                        width: "100px",
                        cursor: "pointer",
                        borderRadius: "10px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onClick={() => checkAnswer(color)}
                    >
                      <p className="index-num">{index + 1}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {showMessage && (
            <div className="winningContainer">
              <p className="winning-para">YAHOOO! YOU DID IT</p>
              <img
                src="./colorFill/winningDance.gif"
                alt="#"
                className="winning-gif"
              />
              <p className="winning-para">
                Congratulations! You have answered correctly.
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="colorFillHome">
          <div className="GameName">
            <div className="color-c">C</div>
            <div className="color-o">O</div>
            <div className="color-l">L</div>
            <div className="color-O">O</div>
            <div className="color-r">R</div>
            <div className="color-s">S</div>
          </div>
          <button onClick={() => setIsColored(true)} className="playColor">
            Play
          </button>
        </div>
      )}
    </div>
  );
}

export default ColorFill;
