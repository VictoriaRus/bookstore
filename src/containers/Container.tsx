import React from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1170px;
  padding: 0 15px;
  margin: auto;
  font-size: 1.5rem;
  @media (max-width: 1024px) {
    max-width: 984px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

interface IContainerProps {
    children: React.ReactNode;
}

const Container = ({ children }: IContainerProps) => {
    return (
        <StyledContainer>{ children }</StyledContainer>
    );
}

export default Container;