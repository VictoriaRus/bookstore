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
      fill: #A8A8A8;
    }
  }
`;

interface IPlusProps {
    onClick: () => void;
}

const IconPlus = ({ onClick }: IPlusProps) => {
    return (
        <Icon onClick={ onClick }>
            <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="56" height="56" transform="translate(0 0.362305)" fill="white"/>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M35 27.3623H29V21.3623C29 20.8103 28.552 20.3623 28 20.3623C27.448 20.3623 27 20.8103 27 21.3623V27.3623H21C20.448 27.3623 20 27.8103 20 28.3623C20 28.9143 20.448 29.3623 21 29.3623H27V35.3623C27 35.9153 27.448 36.3623 28 36.3623C28.552 36.3623 29 35.9153 29 35.3623V29.3623H35C35.553 29.3623 36 28.9143 36 28.3623C36 27.8103 35.553 27.3623 35 27.3623Z"
                    fill="#313037"/>
            </svg>
        </Icon>
    );
};

export default React.memo(IconPlus);