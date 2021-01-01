import React from "react";

function NewGame(props) {
    return (
        <header>
            <button type='submit' className='btn btn-primary' onClick={props.newGame}>create new game</button>
        </header>
      );
}

export default NewGame;