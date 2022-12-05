import React from "react";
import styled from "styled-components";
import { MOBILE_WIDTH } from "../../../mock-data/constants";

const SecondaryTitle = styled.h5`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #A8A8A8;
  margin-bottom: 32px;
  @media ( max-width: ${ MOBILE_WIDTH } ) {
    margin-bottom: 24px;
  }
`;

export default SecondaryTitle;