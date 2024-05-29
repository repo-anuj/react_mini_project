import styled from "styled-components";

export const Button = styled.button`
background-color: #000000;
padding: 10px 18px;
color: #ffffff;
border-radius: 5px;
min-width: 220px;
border: none;
cursor: pointer;
font-size: 18px;
font-weight: 500;
outline: none;
margin-top: 10px;
border: 1px solid transparent;
transition: 0.4s background ease-in;

&:hover {
    background-color: #ffffff;
    color: #000000;
    border: 1px solid #000000;
    box-shadow: 0 0 10px #000000;
    transition: 0.3s background ease-in;
}
`;