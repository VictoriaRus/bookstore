import React from "react";
import styled from "styled-components";
import Title from "../../Title/Title";
import SecondaryTitle from "../../SecondaryTitle/SecondaryTitle";
import Flex from "../../Flex/Flex";
import { Link } from "react-router-dom";
import { IBook } from "../../../../types/booksTypes/booksTypes";
import Photo from "../../Photo/Photo";
import Stars from "../../Stars/Stars";
import { MOBILE_WIDTH } from "../../../../mock-data/constants";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(33.3333% - 30px);
  margin: 0 15px 48px;
  @media ( max-width: 768px ) {
    width: calc(50% - 30px);
  }
  @media ( max-width: ${ MOBILE_WIDTH } ) {
    width: 100%;
  }
`;

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 10;
`;

const WrapPhoto = styled.div`
  margin-bottom: 20px;
`;

const CardBook = ({ title, subtitle, image, price, isbn13 }: IBook) => {

    return (
        <Card>
            <WrapPhoto>
                <Photo image={ image }/>
            </WrapPhoto>
            <CardWrap>

                <Link to={`/book/${ isbn13 }`}>
                    <Title fontSize="24" lineHeight="32" mobileFontSize="24" mobileLineHeight="32">
                        { title }
                    </Title>
                </Link>
                <CardWrap>
                    <SecondaryTitle>{ subtitle }</SecondaryTitle>
                    <Flex>
                        <Title fontSize="24" lineHeight="32" mobileFontSize="24" mobileLineHeight="32"
                               marginBottom="0" mobileMarginBottom="0">
                            { price }
                        </Title>
                        <Stars/>
                    </Flex>
                </CardWrap>
            </CardWrap>
        </Card>
    )
}

export default React.memo(CardBook);