import React from "react";
import styled from "styled-components";

const Icon = styled.div`
  cursor: pointer;
  &:disabled{
    svg path {
      fill: #A8A8A8;
    }
  }
  
  &:hover,:active {
    svg path {
      fill: #FC857F;
    }
  }
`;

interface IDelProps {
    onClick: () => void;
}

const IconDel = ({ onClick }: IDelProps) => {
    return (
        <Icon onClick={ onClick }>
            <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="56" height="56" fill="white"/>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M33.6569 32.2426L29.4142 28L33.6569 23.7573C34.0472 23.367 34.0472 22.7335 33.6569 22.3431C33.2665 21.9528 32.633 21.9528 32.2426 22.3431L28 26.5858L23.7574 22.3431C23.367 21.9528 22.7335 21.9528 22.3431 22.3431C21.9528 22.7335 21.9528 23.367 22.3431 23.7573L26.5858 28L22.3431 32.2426C21.9521 32.6337 21.9528 33.2665 22.3431 33.6568C22.7335 34.0472 23.3663 34.0479 23.7574 33.6568L28 29.4142L32.2426 33.6568C32.6337 34.0479 33.2665 34.0472 33.6569 33.6568C34.0472 33.2665 34.0479 32.6337 33.6569 32.2426Z"
                    fill="#313037"/>
            </svg>
        </Icon>
    );
};

export default IconDel;