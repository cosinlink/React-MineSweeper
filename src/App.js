import React, { useState } from "react";
import "./App.css";
import Container from "./containers/Container";
import { GAME_STATUS } from "./constant";

export const AppContext = React.createContext({});

const zeroLine = (squareSize) => {
    const line = [];
    for (let i = 0; i < squareSize; i++) {
        line.push(0);
    }
    return line;
}

const zeroSquare = (squareSize) => {
    const square = [];
    for (let i = 0; i < squareSize; i++) {
        square.push(zeroLine(squareSize));
    }
    return square;
}

function App() {
  const squareSize = 20;
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.NOT_START);
  const [squareData, setSquareData] = useState();

  const appStart = () => {
    // generate new mine data
    setSquareData(zeroSquare(squareSize));
    setGameStatus(GAME_STATUS.STARTED);
  };

  const generateSquareData = (data) => {
      setSquareData(data);
  }

  const endGame = () => {
    setGameStatus(GAME_STATUS.OVER);
  };

  return (
    <AppContext.Provider
      value={{
        gameStatus,
        squareData,
        squareSize,
      }}
    >
      <Container className="App"
                 appStart={appStart}
                 generateSquareData={generateSquareData}
                 endGame={endGame} />
    </AppContext.Provider>
  );
}

export default App;
