import React from "react";
import styled from "styled-components";
import { TABLET_WIDTH } from "../../../mock-data/constants";

interface ITitleProps {
    fontSize?: string;
    lineHeight?: string;
    marginBottom?: string;
    mobileFontSize?: string;
    mobileLineHeight?: string;
    mobileMarginBottom?: string;
}

const Title = styled.h2<ITitleProps>`
  font-family: 'Bebas Neue', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: ${ props => props.fontSize || "56" }px;
  line-height: ${ props => props.lineHeight || "64" }px;
  margin-bottom: ${ props => props.marginBottom || "48" }px;
  color: #313037;
  
  @media ( max-width: ${ TABLET_WIDTH } ) {
    font-size: ${ props => props.mobileFontSize || "32" }px;
    line-height: ${ props => props.mobileLineHeight || "44" }px;
    margin-bottom: ${ props => props.mobileMarginBottom || "36" }px;
  }
`;

export default Title;