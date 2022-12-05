import React from "react";
import styled from "styled-components";
import {COLORS, getColor, MOBILE_WIDTH, TABLET_WIDTH } from "../../../mock-data/constants";

interface ICardBookStyle {
    color: string;
}

const BackgroundBook = styled.div<ICardBookStyle>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${ props => props.color || "#D7E4FD" };
`;

const ImgBook = styled.img`
  width: 226px;
  @media ( max-width: ${ TABLET_WIDTH } ) {
    width: 210px;
  }
  @media ( max-width: ${ MOBILE_WIDTH }) {
    width: 174px;
  }
`;

interface IPhotoProps {
    image: string;
}

const Photo = ({ image }: IPhotoProps) => {
    return (
        <BackgroundBook color={ COLORS[getColor()] }>
            <ImgBook src={ image }/>
        </BackgroundBook>
    );
};

export default React.memo(Photo);