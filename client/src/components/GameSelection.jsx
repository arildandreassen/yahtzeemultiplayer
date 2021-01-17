import React from "react";

function GameSelection(props) {
  return (
    <header>
      <button
        className="btn btn-primary"
        onClick={() => {
          window.location.href = `/`;
        }}
      >
        home
      </button>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={props.createGame}
      >
        create new game
      </button>
    </header>
  );
}

export default GameSelection;
