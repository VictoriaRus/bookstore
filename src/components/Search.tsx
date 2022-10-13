import React, { useState } from 'react';
import styled from "styled-components";
import Zoom from '../assets/icons/Icon-Search.svg';

interface ISearchProps {
    width?: string;
}

interface IInputProps extends ISearchProps {
    value?: string;
    placeholder?: string;
    onChange?: () => void;
}

const StyledSearch = styled.input<ISearchProps>`
  width: ${ props => props.width || "542" }px;
  border: 1px solid #E7E7E7;
  padding: 12px 20px 10px;
  font-size: 16px;
  line-height: 200%;
  
  &:focus {
    outline: none;
    border-color: #A8A8A8;
  }
 
  &:active {
    border: 1px solid #E7E7E7;
  }
  
  ::placeholder{
    font-size: 16px;
    line-height: 200%;
    color: #A8A8A8;
  }

  @media ( max-width: 415px ) {
    width: 100%;
  }
`;

const StyleWrap= styled.div`
  position: relative;
  vertical-align: middle;
`;

const StyledZoom = styled.button`
  border: none;
  background: transparent;
  width: 20px;
  height: 20px;
  padding: 0;
  position: absolute;
  top: 18px;
  right: 20px;
  cursor: pointer;

  &:before {
    content: "";
    background-image: url("${ Zoom }");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 20px;
    height: 20px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Search = ({ width, placeholder }: IInputProps) => {
    const [value, setValue] = useState('');
    return (
        <StyleWrap>
            <StyledSearch width={ width }
                          placeholder={ placeholder }
                          value={ value }
                          onChange={ (event) => {
                              setValue(event.target.value);
                          }}
            />
            <StyledZoom/>
        </StyleWrap>
    )
}

export default Search;