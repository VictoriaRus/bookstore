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
}

const StyledCardBook = styled.div<ICardBookProps>`
  display: flex;
  flex-direction: column;
  width: calc(33.3333% - 30px);
  margin: 0 15px 48px;
  @media ( max-width: 768px ) {
    width: calc(50% - 30px);
  }
  @media ( max-width: 415px ) {
    width: 100%;
  }
`;

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 10;
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

const BackgroundBook = styled.div`
  width: 100%;
  background-color: ${props => props.color || '#D7E4FD'};
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardBook = ({title, subtitle, image, price}: ICardBookProps) => {
    return (
        <StyledCardBook>
            <BackgroundBook color={COLORS[getColor()]}>
                <ImgBook src={image}/>
            </BackgroundBook>
            <CardWrap>
                <Title fontSize={"24"} lineHeight={"32"} mobileFontSize={"24"} mobileLineHeight={"32"}>
                    {title}
                </Title>
                <CardWrap>
                    <SecondaryTitle>{subtitle}</SecondaryTitle>
                    <Flex>
                        <Title fontSize={"24"} lineHeight={"32"} mobileFontSize={"24"} mobileLineHeight={"32"}
                               marginBottom={"0"} mobileMarginBottom={"0"}>
                            {price}
                        </Title>
                        <div>
                            <ImgStar src={Star}/>
                            <ImgStar src={Star}/>
                            <ImgStar src={Star}/>
                            <ImgStar src={Star}/>
                            <img src={StarDis}/>
                        </div>
                    </Flex>
                </CardWrap>
            </CardWrap>
        </StyledCardBook>
    )
}

export default CardBook;