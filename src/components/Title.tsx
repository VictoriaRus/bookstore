import React from 'react';
import styled from "styled-components";

interface ITitleProps {
    fontSize?: string;
    lineHeight?: string;
    marginBottom?: string;
    mobileFontSize?: string;
    mobileLineHeight?: string;
    mobileMarginBottom?: string;
    children?: React.ReactNode;
}

const StyledTitle = styled.h2<ITitleProps>`
  font-family: 'Bebas Neue';
  font-style: normal;
  font-weight: 700;
  font-size: ${ props => props.fontSize || "56" }px;
  line-height: ${ props => props.lineHeight || "64" }px;
  margin-bottom: ${ props => props.marginBottom || "48" }px;
  color: #313037;
  @media ( max-width: 415px ) {
    font-size: ${ props => props.mobileFontSize || "32" }px;
    line-height: ${ props => props.mobileLineHeight || "44" }px;
    margin-bottom: ${ props => props.mobileMarginBottom || "36" }px;
  }
`;

const Title = (props: ITitleProps ) => {
    return (
        <StyledTitle { ...props } />
    )
}

export default Title;