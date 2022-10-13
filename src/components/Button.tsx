import React from 'react';
import styled from "styled-components";

interface IButtonProps {
    width?: string;
    mobileWidth?: string;
}

interface IChildrenProps extends IButtonProps{
    children?: React.ReactNode;
}

const StyledButton = styled.button<IButtonProps>`
  width:  ${ props => props.width || "448" }px;
  height: 56px;
  border: none;
  background-color: #313037;
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  color: #FFFFFF;
  &:active{
    background-color: #5B5A62;;
  }
  &:hover{
    background-color: #5B5A62;;
  }
  @media ( max-width: 768px ) {
    width:  ${ props => props.mobileWidth || "448" }px;
  }
  @media ( max-width: 415px ) {
    width: 100%;
  }
`;

const Button = (props: IChildrenProps ) => {
    return (
        <StyledButton { ...props } />
    )
}

export default Button;