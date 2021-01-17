import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import api from "../api";
import { GameSelection, Header, Footer, GameSession } from "../components";

const App = () => {
  const [gameId, setGameId] = useState("");

  const createGameSession = async () => {
    const response = await api.createGame({ name: "here we go" });
    const game = response.data.body;
    setGameId(game._id);
    window.location.href = `/game/${game._id}`;
    console.log(game);
  };

  return (
    <Router>
      <Header />
      <GameSelection createGame={createGameSession} />
      <Switch>
        <Route
          path="/game/:id"
          render={(props) => <GameSession {...props} gameId={gameId} />}
        />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
