import styled from 'styled-components'
import { Button } from '../styled/Button';


const StartGame = ({ handle }) => {
  return (
    <Container>
        <div>
        <img src="/images/dices.png" />
        </div>
        <div className="content">
            <h1>DICE GAME</h1>
            <Button
            onClick={handle}>PLAY NOW</Button>
        </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
 max-width: 1180px;
 margin: 0 auto;
 display: flex;
 height: 100vh;
 align-items: center;
 /* justify-content: center;
 padding: 0 20px; */

.content {
    h1{
        font-size: 96px;
        white-space: nowrap;
        font-weight: 500;
        color: #000000;
        text-align: center;
        margin-bottom: 10px;
    }
}
`;
