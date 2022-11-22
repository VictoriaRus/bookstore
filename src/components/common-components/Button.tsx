import React, {HTMLAttributes} from 'react';
import styled from "styled-components";

interface IStyledButtonProps {
    width?: string;
    mobileWidth?: string;
}

interface IButtonProps extends IStyledButtonProps, React.ComponentPropsWithoutRef<'button'> {
    text: string;
}

const StyledButton = styled.button<IStyledButtonProps>`
  width: ${props => props.width || "448"}px;
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
  cursor: pointer;

  &:active {
    background-color: #5B5A62;;
  }

  &:hover {
    background-color: #5B5A62;;
  }
  
  &:disabled {
    background-color: #A8A8A8;
  }

  @media ( max-width: 768px ) {
    width: ${props => props.mobileWidth || "448"}px;
  }
  @media ( max-width: 415px ) {
    width: 100%;
  }
`;

const Button = ({text, ...rest}: IButtonProps) => {
    return (
        <StyledButton {...rest}>{text}</StyledButton>
    )
}

export default React.memo(Button);