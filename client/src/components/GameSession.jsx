import React, { useState } from "react";
import { AddPlayer } from "./index";

const GameSession = (props) => {
  const [players, addPlayer] = useState(["arild"]);

  const addNewPlayer = () => {};
  return (
    <div>
      {/* {players.forEach((player) => {
        console.log(player);
      })} */}
      <AddPlayer />
    </div>
  );
};

export default GameSession;
