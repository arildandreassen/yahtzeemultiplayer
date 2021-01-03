import React, {useState} from "react";
import {GameSession, NewGame} from './index';
import api from '../api/index'

function Game() {

  const [gameId, setGameId] = useState('')

  const createGameSession = () => {
    api.createGame({ name:'here we go'} ).then(game => {
      console.log(game);
      }
    );
    const id = '1234'
    setGameId(id)
  }

  return (gameId ? <GameSession /> : <NewGame newGame={createGameSession}/>);
}

export default Game;