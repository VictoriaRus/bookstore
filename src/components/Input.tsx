import React, {useState} from 'react';
import styled from "styled-components";

interface IStyleInputProps {
    width?: string;
}

interface IInputProps extends IStyleInputProps {
    value?: string;
    placeholder?: string;
    onChange?: () => void;
}

const StyleInput = styled.input<IStyleInputProps>`
  width: ${props => props.width || "542"}px;
  border: 1px solid #E7E7E7;
  padding: 12px 20px 10px;
  font-size: 16px;
  line-height: 200%;
  flex-grow: 2;
  margin:0;
  &:focus {
    outline: none;
    border-color: #A8A8A8;
  }

  &:active {
    border: 1px solid #E7E7E7;
  }

  ::placeholder {
    font-size: 16px;
    line-height: 200%;
    color: #A8A8A8;
  }

  @media ( max-width: 415px ) {
    width: 100%;
    margin-bottom: 24px;
  }
`;

const Search = ({width, placeholder,}: IInputProps) => {
    const [value, setValue] = useState('');
    return (
        <StyleInput width={width}
                    placeholder={placeholder}
                    value={value}
                    onChange={(event) => {
                        setValue(event.target.value);
                    }}/>
    )
}

export default Search;