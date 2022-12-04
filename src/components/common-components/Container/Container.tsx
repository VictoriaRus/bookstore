import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1170px;
  padding: 0 15px;
  margin: auto;
  font-size: 1.5rem;
  
  @media (max-width: 1024px) {
    max-width: 984px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 40px;
  }
  
  @media (max-width: 415px) {
    padding: 0 15px;
  }
`;

export default Container;