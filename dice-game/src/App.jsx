import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {

const [isGameStarted, setIsGameStarted] = useState(false);

const handleStartGame = () => {
  setIsGameStarted((prev) => !prev);
}

  return(
    <>
    {
      // this can be done as turnnary operator using {} for writting JS code in react.
      isGameStarted? <GamePlay /> : <StartGame 
      handle={handleStartGame}/>
    }
    </>
  );
  
}

export default App
