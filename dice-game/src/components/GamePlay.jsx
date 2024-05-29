import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { useState } from "react";
import { Button } from '../styled/Button';
import Rules from './Rules';

const GamePlay = () => {
  const [score, setScore]= useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, showSetRules] = useState(false);


  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() *(max - min) + min);
};

const roleDice = () => {
  if (!selectedNumber) {
    setError("please select number");
    return;
  };
  setError("");
    const ramdomeNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => ramdomeNumber);



    if (ramdomeNumber === selectedNumber) {
        setScore((prev) => prev + 1);
    }
    else {
        setScore((prev) => prev - 1);
    }

    setSelectedNumber(null);
};

  return (
    <MainContainer>
    <div className="top_section">
    <TotalScore 
    score={score}/>
        <NumberSelector 
        error={error}
        setError={setError}
        selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
    </div>
    <RoleDice 
    roleDice={roleDice} currentDice={currentDice}/>
    <div className="btns">
    <Button
    onClick={() => setScore(0)}>Reset Score</Button>
    <Button
    onClick={() => showSetRules((prev) => !prev)}>
      {showRules ? "Hide" : "Show"} Rules</Button>
    </div>

{showRules && <Rules />}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
.top_section{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: 100px;
    margin-right: 100px;
    gap: 20px;

}
.btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: 100px;
    margin-right: 100px;

}
`;