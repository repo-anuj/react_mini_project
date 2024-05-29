import { useState } from "react";
import styled from "styled-components"
const NumberSelector = (
    {
        setError,
        error,
        selectedNumber,
        setSelectedNumber
    }
) => {

    const arrNumber = [1, 2, 3, 4, 5, 6];

    const numberSelectorHandler = (value) => {
        setSelectedNumber(value);
        setError("");
    }

  return (
    <NumberSelectorContainer>
        <p className="error">{error}</p>
        <div className="flex">
        {
            arrNumber.map((value, i) => {
                return (
                    <Container
                    isSelected={selectedNumber === value}
                    key={i} onClick={() => numberSelectorHandler(value)}>
                    {value}
                    </Container>
                )
            })
        }
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
.flex{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 100px;
    margin-right: 100px;
    gap: 20px;
}
p{
    font-size: 24px;
    font-weight: 700;
    color: #000000;
    margin-bottom: 10px;
    margin-top: 10px;
    text-align: center;
    white-space: nowrap;
    /* margin-left: 100px; */
    /* margin-right: 100px; */
}
.error{
    color: red;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
}
`;

const Container = styled.div`
height: 72px;
width: 72px;
background-color: ${(props) => (props.isSelected ? "#000000" : "#ffffff")};
border-radius: 50%;
color: ${(props) => (props.isSelected ? "#ffffff" : "#000000")};
margin: 10px;
display: flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
font-size: 48px;
font-weight: 500;
`;