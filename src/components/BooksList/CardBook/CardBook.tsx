import React from 'react';
import styled from "styled-components";
import Title from "../../Title";
import SecondaryTitle from "../../SecondaryTitle";
import Star from '../../../assets/icons/Star.png';
import StarDis from '../../../assets/icons/StarDis.png';
import Flex from "../../../containers/Flex";

interface ICardBookProps {
    title?: string;
    subtitle?: string;
    price?: string;
    image?: string;
    color?: string;
    children?: React.ReactNode;
}

const StyledCardBook = styled.div<ICardBookProps>`
  width: 30%;
  margin: 0 15px 48px;
  @media ( max-width: 768px ) {
    width: 50%;
  }
  @media ( max-width: 415px ) {
    width: 100%;
  }
`;

const ImgBook = styled.img`
  width: 226px;
  @media ( max-width: 768px ) {
    width: 210px;
  }
  @media ( max-width: 415px ) {
    width: 174px;
  }
`;

const ImgStar = styled.img`
  margin-right: 10px;
`;

const COLORS = ['#D7E4FD', '#CAEFF0', '#F4EEFD', '#FEE9E2'];

const getColor = () => {
    return Math.floor(Math.random() * COLORS.length);
}

const BackgroundBook = styled.div<ICardBookProps>`
  width: 100%;
  background-color: ${ props => props.color || '#D7E4FD' };
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardBook = ({ title, subtitle, image, price }: ICardBookProps) => {
    return (
        <StyledCardBook>
            <BackgroundBook color={ COLORS[getColor()] }>
                <ImgBook src={ image }/>
            </BackgroundBook>
            <Title fontSize={ "24" } lineHeight={ "32" } mobileFontSize={ "24" } mobileLineHeight={ "32" }>
                { title }
            </Title>
            <SecondaryTitle>{ subtitle }</SecondaryTitle>
            <Flex>
                <Title fontSize={ "24" } lineHeight={ "32" } mobileFontSize={ "24" } mobileLineHeight={ "32" }
                       marginBottom={ "0" } mobileMarginBottom={ "0" }>
                    { price }
                </Title>
                <div>
                    <ImgStar src={ Star }/>
                    <ImgStar src={ Star }/>
                    <ImgStar src={ Star }/>
                    <ImgStar src={ Star }/>
                    <img src={ StarDis }/>
                </div>
            </Flex>
        </StyledCardBook>
    )
}

export default CardBook;