import React from 'react';
import styled from "styled-components";

interface IFlexProps {
    display?: string;
    flexDirection?: string;
    alignItems?: string;
    justifyContent?: string;
    mobileFlexDirection?: string;
    tabletFlexDirection?: string;
}

const StyledFlex = styled.div<IFlexProps>`
  display: flex;
  flex-direction: ${ props => props.flexDirection || "row" };
  align-items: ${ props => props.alignItems || "center" };
  justify-content: ${ props => props.justifyContent || "space-between" };
  @media ( max-width: 768px ) {
    flex-direction: ${ props => props.tabletFlexDirection || "row" };
  }
  @media ( max-width: 415px ) {
    flex-direction: ${ props => props.mobileFlexDirection || "row" };
  }
`;

interface IFlexRowProps extends IFlexProps {
    children: React.ReactNode;
}

const Flex = (props: IFlexRowProps) => {
    return (
        <StyledFlex { ...props } />
    )
}

export default Flex;