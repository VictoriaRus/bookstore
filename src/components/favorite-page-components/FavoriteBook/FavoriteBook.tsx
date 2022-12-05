import React from "react";
import styled from "styled-components";
import Photo from "../../common-components/Photo/Photo";
import Title from "../../common-components/Title/Title";
import SecondaryTitle from "../../common-components/SecondaryTitle/SecondaryTitle";
import Like from "../../../assets/icons/Favorite.png";
import Stars from "../../common-components/Stars/Stars";
import { favoritesActionCreators } from "../../../redux/actions/favoritesActionsCreators/favoritesActionsCreators";
import { useAppDispatch } from "../../../redux/hooks/hooks";

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

  @media ( max-width: 768px ) {
    padding: 32px 0;
  }
`;

const BlockImg = styled.div`
  width: 256px;
`;

const Info = styled.div`
  margin-left: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DisLike = styled.img`
  cursor: pointer;
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
                <div>
                    <Title fontSize='24' lineHeight='32' marginBottom='8' mobileMarginBottom='8'>{ title }</Title>
                    <SecondaryTitle>by { authors }, { publisher } { year }</SecondaryTitle>
                    <Price>
                        <Title mobileFontSize='24' fontSize='24' lineHeight='32' mobileLineHeight='32'
                               marginBottom='0'>{ price }</Title>
                        <Stars/>
                    </Price>
                </div>
                <DisLike src={ Like } alt="Like" onClick={ deleteFavoriteBook }/>
            </Info>
        </Favorite>
    );
};

export default React.memo(FavoriteBook);