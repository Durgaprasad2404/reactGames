import React from "react";
import { Link } from "react-router-dom";

function Games() {
  return (
    <div className="totalGames-BG">
      <div className="totalGames-list">
        <div>
          <Link to="/game1">
            <button className="totalGames-listItems">Game-1</button>
          </Link>
        </div>
        <div>
          <Link to="/game2">
            <button className="totalGames-listItems">Game-2</button>
          </Link>
        </div>
        <div>
          <Link to="/game3">
            <button className="totalGames-listItems">Game-3</button>
          </Link>
        </div>
        <div>
          <Link to="/game4">
            <button className="totalGames-listItems">Game-4</button>
          </Link>
        </div>
        <div>
          <Link to="/game5">
            <button className="totalGames-listItems">Game-5</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Games;
