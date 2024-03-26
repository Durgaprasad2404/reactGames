import React, { useState, useEffect, useCallback, useRef } from "react";
import "./WhatNext.css";
import { IoMdHome } from "react-icons/io";

const AlphabetGame = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const generateQuestion = useCallback(() => {
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    const currentIndex = alphabet.indexOf(randomLetter);
    let questionType;
    if (currentIndex === 0) {
      questionType = "after";
    } else if (currentIndex === alphabet.length - 1) {
      questionType = "before";
    } else {
      questionType = Math.random() < 0.5 ? "after" : "before";
    }

    const questionLetter = alphabet[currentIndex];
    let targetIndex;
    if (questionType === "after") {
      targetIndex = (currentIndex + 1) % alphabet.length;
    } else {
      targetIndex = (currentIndex - 1 + alphabet.length) % alphabet.length;
    }
    const targetLetter = alphabet[targetIndex];
    const options = [targetLetter];
    while (options.length < 4) {
      const randomOption =
        alphabet[Math.floor(Math.random() * alphabet.length)];
      if (!options.includes(randomOption)) {
        options.push(randomOption);
      }
    }
    const shuffledOptions = shuffleArray(options);
    return {
      questionType: questionType,
      question: questionLetter,
      answer: targetLetter,
      options: shuffledOptions,
      optionBackgroundColors: shuffledOptions.map(() => ""), // Initialize background colors for options
    };
  }, []);

  const [question, setQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [showNextQuestionIndicator, setShowNextQuestionIndicator] =
    useState(false);

  // adding sounds
  const correctAnswerSoundRef = useRef(new Audio("/sounds/correct.wav"));
  const wrongAnswerSoundRef = useRef(new Audio("/sounds/error.wav"));
  const wonSoundRef = useRef(new Audio("/sounds/won.wav"));
  useEffect(() => {
    if (gameStarted && !question) {
      setQuestion(generateQuestion());
    }
  }, [gameStarted, question, generateQuestion]);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === question.answer) {
      setScore(score + 1);
      setFeedback("Hoorey You Did It");
      correctAnswerSoundRef.current.play();
      const newBackgroundColors = question.options.map((option, index) =>
        option === selectedOption ? "green" : ""
      );
      setQuestion({
        ...question,
        optionBackgroundColors: newBackgroundColors,
      });
      setTimeout(() => {
        setShowCelebration(true);
        wonSoundRef.current.play();
        setTimeout(() => {
          setShowCelebration(false);
          setFeedback("");
          setQuestion(null);
          setShowNextQuestionIndicator(false); // Hide the indicator after showing the next question
        }, 5000); // Show congratulations message for 5 seconds before changing the question
      }, 2000); // Immediately show the congratulations message after answering correctly
    } else {
      setFeedback(" ❌ Oh No This Is Not Correct");
      wrongAnswerSoundRef.current.play();
      const newBackgroundColors = question.optionBackgroundColors.map(
        (color, index) =>
          question.options[index] === selectedOption ? "red" : color
      );
      setQuestion({
        ...question,
        optionBackgroundColors: newBackgroundColors,
      });
      setTimeout(() => {
        setFeedback("");
        setQuestion((prevQuestion) => ({
          ...prevQuestion,
          optionBackgroundColors: prevQuestion.options.map(() => ""),
        }));
      }, 2000);
    }
  };

  const handleStartNow = () => {
    setGameStarted(true);
  };

  const handleChangeQuestion = () => {
    setShowNextQuestionIndicator(true); // Show the indicator when changing the question
    setTimeout(() => {
      setQuestion(generateQuestion());
      setShowNextQuestionIndicator(false); // Hide the indicator after a delay
    }, 2000); // Delay time before displaying the next question
  };

  useEffect(() => {
    if (showCelebration) {
      const timer = setTimeout(() => {
        setShowNextQuestionIndicator(true); // Show the indicator during the last 2 seconds of the congratulations message
      }, 3000); // Show the indicator for the last 2 seconds
      return () => clearTimeout(timer);
    }
  }, [showCelebration]);
  const handleGoBackToHome = () => {
    setGameStarted(false); // Reset game state to go back to the info page
    setScore(0); // Reset score
    setQuestion(null); // Reset question
    setShowCelebration(false); // Hide celebration
    setFeedback(""); // Clear feedback
  };

  return (
    <>
      <div
        className="alphabet-game-container"
        style={{ backgroundImage: "url('./WhatNextImages/BG.jpg')" }}
      >
        {!gameStarted && (
          <div className="game-infoPage">
            <h1 className="mainpageHeading">
              Welcome <br />
              To <br />
              Alphabet Game
            </h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="./WhatNextImages/kidshow.png"
                alt="#"
                className="kid-show"
              />
              <button onClick={handleStartNow} className="startNow-btn">
                Play
              </button>
            </div>
          </div>
        )}
        {gameStarted && !showCelebration && question && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p className="question">
              What is the letter <br />
              {question.questionType === "after" ? "after" : "before"}{" "}
              <q style={{ fontSize: "55px", color: "red" }}>
                {question.question}
              </q>{" "}
              ?
            </p>
            <ul className="options">
              {question.options.map((option, index) => (
                <li
                  key={index}
                  className="option"
                  onClick={() => handleAnswer(option)}
                  style={{
                    backgroundColor: question.optionBackgroundColors[index],
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
            <div className="feedback">
              {feedback === "Hoorey You Did It" && (
                <span role="img" aria-label="check">
                  ✅
                </span>
              )}
              {feedback === "Oh No this is not Correct" && (
                <span role="img" aria-label="cross">
                  ❌
                </span>
              )}
              {feedback}
            </div>
            {showNextQuestionIndicator && (
              <p className="loading-next">Moving to next question...</p>
            )}
            <button onClick={handleChangeQuestion} className="skipQuestion-btn">
              Skip Question
            </button>
            <div className="GoBackBtn" onClick={handleGoBackToHome}>
              <IoMdHome />
            </div>
          </div>
        )}
        {showCelebration && (
          <div className="celebrationContainer">
            <p className="celebration">Congratulations!</p>
            <img
              src="./GIFs/celebration-kawaii.gif"
              alt="#"
              className="dance-gif"
            />
            <p className="celebration">Your score: {score}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default AlphabetGame;
