import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
<h2>How to play dice game</h2>
<div className="text">
    <p>1. Select number</p>
    <p>2. Roll dice</p>
    <p>3. Select number again</p>
    <p>4. Roll dice</p>
    <p>5. Select number again</p>
    <p>6. Roll dice</p>
</div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
max-width: 800px;
margin: 0 auto;
margin-top: 30px;
margin-bottom: 30px;
box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
border-radius: 10px;
color: #000000;
font-size: 18px;
font-weight: 500;
text-align: center;
background-color: #e0bdbd;
border-radius: 10px;
padding: 20px;
h2{
    font-size: 24px;
    color: #000000;
}
.text{
    margin-top: 24px;
}
`;
