import React from "react";
import styled from "styled-components";
import { MOBILE_WIDTH, TABLET_WIDTH } from "../../../mock-data/constants";

interface IFlexProps {
    display?: string;
    flexDirection?: string;
    alignItems?: string;
    justifyContent?: string;
    mobileFlexDirection?: string;
    tabletFlexDirection?: string;
}

const Flex = styled.div<IFlexProps>`
  display: flex;
  flex-direction: ${ props => props.flexDirection || "row" };
  align-items: ${ props => props.alignItems || "center" };
  justify-content: ${ props => props.justifyContent || "space-between" };
  
  @media ( max-width: ${ TABLET_WIDTH } ) {
    flex-direction: ${ props => props.tabletFlexDirection || "row" };
  }
  
  @media ( max-width: ${ MOBILE_WIDTH } ) {
    flex-direction: ${ props => props.mobileFlexDirection || "row" };
  }
`;

export default Flex;