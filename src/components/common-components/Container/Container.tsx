import React from "react";
import styled from "styled-components";
import { DESKTOP_WIDTH, MOBILE_WIDTH, TABLET_WIDTH } from "../../../mock-data/constants";

const Container = styled.div`
  max-width: 1170px;
  padding: 0 15px;
  margin: auto;
  font-size: 1.5rem;
  
  @media (max-width: ${ DESKTOP_WIDTH }) {
    max-width: 984px;
  }
  
  @media (max-width: ${ TABLET_WIDTH }) {
    width: 100%;
    padding: 0 40px;
  }
  
  @media (max-width: ${ MOBILE_WIDTH }) {
    padding: 0 15px;
  }
`;

export default Container;