import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Games from "./components/Games";

import SpeakOut from "./components/Alpha&Numbers/AlphaNumbers";
import AlphabetGame from "./components/WhatIsNext/WhatNext";
import TicTacToe from "./components/tic tac tao/TicTacToe";
import ClickByClick from "./components/clickByclick/ClickByClick";
import ColorFill from "./components/colors/ColorFill";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Games />} />
          <Route exact path="/game1" element={<ClickByClick />} />
          <Route exact path="/game2" element={<TicTacToe />} />
          <Route exact path="/game3" element={<AlphabetGame />} />
          <Route exact path="/game4" element={<SpeakOut />} />
          <Route exact path="/game5" element={<ColorFill />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
