import React, { HTMLAttributes } from 'react';
import styled from "styled-components";

interface IStyleInputProps {
    width?: string;
}

export interface IInputProps extends IStyleInputProps, HTMLAttributes<HTMLInputElement> {
    value: string;
    fieldName?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyleInput = styled.input<IStyleInputProps>`
  width: ${ props => props.width || "542" }px;
  border: 1px solid #E7E7E7;
  padding: 12px 20px 10px;
  font-size: 16px;
  line-height: 200%;
  flex-grow: 2;
  margin: 0;

  &:focus {
    outline: none;
    border-color: #A8A8A8;
  }

  &:active {
    border: 1px solid #E7E7E7;
  }

  &::placeholder {
    font-size: 16px;
    line-height: 200%;
    color: #A8A8A8;
  }

  @media ( max-width: 768px ) {
    width: 100%;
  }
`;

const Input = ({ value, fieldName, onChange, ...rest }: IInputProps) => {
    return (
        <StyleInput value={ value } onChange={ onChange } name={ fieldName } { ...rest }/>
    )
}

export default React.memo(Input);