import React from "react";
import styled from "styled-components";

const Icon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;

  &:disabled {
    svg rect {
      fill: #A8A8A8;
    }
  }

  &:hover, :active {
    svg rect {
      fill: #A8A8A8;
    }
  }
`;

interface IMinusProps {
    disabled?: boolean;
    onClick: () => void;
}

const IconMinus = ({ disabled = false, onClick }: IMinusProps) => {
    return (
        <Icon onClick={ onClick } disabled={ disabled }>
            <svg
                width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="22" y="27.3623" width="12" height="2" rx="1" fill="#313037"/>
            </svg>
        </Icon>
    );
};

export default React.memo(IconMinus);