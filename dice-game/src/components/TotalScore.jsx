
import styled from "styled-components";
const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
    <h1>{score}</h1>
    <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore

const ScoreContainer = styled.div`
max-width: 200px;
text-align: center;
h1{
    font-size: 96px;
    line-height: 100px;
    /* white-space: nowrap;
    font-weight: 500;
    color: #000000; */

}
p{
    font-size: 18px;
    font-weight: 500;
    /* white-space: nowrap;
    color: #000000; */

}
`;