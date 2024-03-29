import React from "react";
import { Link } from "react-router-dom";

function Games() {
  return (
    <div className="totalGames-BG">
      <h1 className="gamesHeading">GAMES</h1>
      <div className="totalGames-list">
        <div>
          <h3>ClickByClickToMagic</h3>
          <Link to="/game1">
            <img
              src="./images/gameCovers/clickbyclickCover.png"
              alt="#"
              className="gameCon"
            />
          </Link>
        </div>
        <div>
          <h3>TicTacToe</h3>
          <Link to="/game2">
            <img
              src="./images/gameCovers/tictactoeCover.jpg"
              alt="#"
              className="gameCon"
            />
          </Link>
        </div>
        <div>
          <h3>AlphabetsGM</h3>
          <Link to="/game3">
            <img
              src="./images/gameCovers/whatnextCover.jpg"
              alt="#"
              className="gameCon"
            />
          </Link>
        </div>
        <div>
          <h3>Colors</h3>
          <Link to="/game5">
            <div>
              <img
                src="./images/gameCovers/colorsCover.jpeg"
                alt="#"
                className="gameCon"
              />
            </div>
          </Link>
        </div>
        <div>
          <h3>AlphabetEN</h3>
          <Link to="/game4">
            <div>
              <img
                src="./images/gameCovers/Alphabet.png"
                alt="#"
                className="gameCon"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Games;
