import React, {useState} from "react";
import {GameSession, NewGame} from './index'

function Game() {

  const [gameId, setGameId] = useState('')

  const createGameSession = () => {
    const id = 123
    setGameId(id)
  }

  return (gameId ? <GameSession /> : <NewGame to='/games/create' newGame={createGameSession}/>);
}

export default Game;