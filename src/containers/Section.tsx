import React from 'react';
import styled from "styled-components";

const Section = styled.div`
  padding: 72px 0;
  @media ( max-width: 768px ) {
    padding: 48px 0;
  }
  @media ( max-width: 415px ) {
    padding: 36px 0;
  }
`;

export default Section;