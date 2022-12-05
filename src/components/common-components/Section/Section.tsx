import React from "react";
import styled from "styled-components";
import { MOBILE_WIDTH, TABLET_WIDTH } from "../../../mock-data/constants";

const Section = styled.div`
  padding: 72px 0;
  @media ( max-width: ${ TABLET_WIDTH } ) {
    padding: 48px 0;
  }
  @media ( max-width: ${ MOBILE_WIDTH } ) {
    padding: 36px 0;
  }
`;

export default Section;