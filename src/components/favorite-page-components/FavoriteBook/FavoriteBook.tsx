import React from "react";
import styled from "styled-components";
import Photo from "../../common-components/Photo/Photo";
import Title from "../../common-components/Title/Title";
import SecondaryTitle from "../../common-components/SecondaryTitle/SecondaryTitle";
import Like from "../../../assets/icons/Favorite.png";
import Stars from "../../common-components/Stars/Stars";
import { favoritesActionCreators } from "../../../redux/actions/favoritesActionsCreators/favoritesActionsCreators";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import { MOBILE_WIDTH, TABLET_WIDTH } from "../../../mock-data/constants";
import IconBG from "./IconBG/IconBG";

const Favorite = styled.div`
  display: flex;
  padding: 48px 0;
  position: relative;

  &::after {
    content: "";
    height: 1px;
    width: 100%;
    background-color: #E7E7E7;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  @media ( max-width: ${ TABLET_WIDTH } ) {
    padding: 32px 0;
  }
  
  @media ( max-width: ${ MOBILE_WIDTH } ) {
    flex-direction: column;
  }
`;

const BlockImg = styled.div`
  width: 256px;
  
  @media ( max-width: ${ MOBILE_WIDTH } ) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Info = styled.div`
  margin-left: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  
  @media ( max-width: ${ TABLET_WIDTH } ) {
    align-items: normal;
    padding-left: 32px;
    margin: auto;
  }

  @media ( max-width: ${ MOBILE_WIDTH } ) {
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
`;

const Wrap = styled.div`
  @media ( max-width: ${ TABLET_WIDTH } ) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DisLike = styled.div`
  cursor: pointer;
  font-size: 0;
  @media ( max-width: ${ MOBILE_WIDTH } ) {
    background-color: #313037;
    display: block;
    position: absolute;
    top: 32px;
    right: 0;
  }
`;

interface IBookInfoProps {
    title: string;
    authors: string;
    publisher: string;
    isbn13: string;
    year: number;
    price: string;
    image: string;
}

const FavoriteBook = ({ isbn13, title, image, price, authors, publisher, year }: IBookInfoProps) => {
    const dispatch = useAppDispatch();

    const deleteFavoriteBook = () => {
        dispatch(favoritesActionCreators.deleteFavoritesBooks(isbn13));
    };

    return (
        <Favorite key={ isbn13 }>
            <BlockImg>
                <Photo image={ image }/>
            </BlockImg>
            <Info>
                <Wrap>
                    <Title fontSize="24" lineHeight="32" marginBottom="8" mobileFontSize="24"
                           mobileLineHeight="24" mobileMarginBottom="10">{ title }</Title>
                    <SecondaryTitle>by { authors }, { publisher } { year }</SecondaryTitle>
                    <Price>
                        <Title mobileFontSize="24" fontSize="24" lineHeight="32" mobileLineHeight="32"
                               marginBottom="0" mobileMarginBottom="0">{ price }</Title>
                        <Stars/>
                    </Price>
                </Wrap>
                <DisLike onClick={ deleteFavoriteBook }>
                    <IconBG fill="none"/>
                </DisLike>
            </Info>
        </Favorite>
    );
};

export default React.memo(FavoriteBook);