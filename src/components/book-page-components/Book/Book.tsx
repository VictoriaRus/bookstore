import React, { useEffect, useState } from "react";
import Title from "../../common-components/Title/Title";
import Flex from "../../common-components/Flex/Flex";
import styled from "styled-components";
import Button from "../../common-components/Button/Button";
import Like from "../Like/Like";
import Back from "../../common-components/Back/Back";
import { BASE_CONTENT_API } from "../../../api/api";
import TabGroup from "../TabGroup/TabGroup";
import { IBookInfo } from "../../../types/booksTypes/booksTypes";
import Stars from "../../common-components/Stars/Stars";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks/hooks";
import { isAuthSelector } from "../../../redux/selectors/authSelector/authSelector";
import { COLORS, getColor, MOBILE_WIDTH, TABLET_WIDTH } from "../../../mock-data/constants";
import { cartActionCreators } from "../../../redux/actions/cartActionsCreators/cartActionsCreators";

interface IColumnProps {
    width: string;
}

const Column = styled.div<IColumnProps>`
  width: ${ props => props.width }px;
  text-align: center;
  @media ( max-width: ${ TABLET_WIDTH } ) {
    width: 100%;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WrapBook = styled.div`
  padding: 40px 0 59px 0;
  position: relative;

  &::after {
    content: "";
    height: 1px;
    width: 100%;
    background-color: #E7E7E7;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }

  @media ( max-width: ${ TABLET_WIDTH } ) {
    padding: 40px 0 48px 0;
  }
  @media ( max-width: ${ MOBILE_WIDTH } ) {
    padding: 40px 0 36px 0;
  }
`;

const Info = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 200%;
`;

const BookInfo = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 200%;
  color: #A8A8A8;
`;

const ImgBook = styled.img`
  width: 300px;
  padding: 61px 0;
  @media ( max-width: ${ TABLET_WIDTH } ) {
    width: 300px;
    padding: 61px 0;
  }
  @media ( max-width: ${ MOBILE_WIDTH } ) {
    width: 150px;
    padding: 49px 0;
  }
`;

interface ICardBookStyle {
    color: string;
}

const BackgroundBook = styled.div<ICardBookStyle>`
  width: 100%;
  background-color: ${ props => props.color || "#D7E4FD" };
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media ( max-width: ${ TABLET_WIDTH } ) {
    margin-bottom: 20px;
  }
`;

const WrapButton = styled.div`
  margin-bottom: 40px;
`;

interface IBookProps {
    isbn13: string | undefined;
}

const Book = ({ isbn13 }: IBookProps) => {
    const isAuth = useAppSelector(isAuthSelector);
    const dispatch = useAppDispatch();

    const [book, setBook] = useState<IBookInfo>({} as IBookInfo);

    useEffect(() => {
        try {
            fetch(`${BASE_CONTENT_API}/books/${ isbn13 }`)
                .then(response => response.json())
                .then(book => {
                    setBook(book);
                })
        } catch (e) {
            console.error(e);
        }
    }, [isbn13]);

    const addToCart = () => {
        dispatch(cartActionCreators.addBookToCart(book));
    }

    return (
        <>
            <Back/>
            <Title>{ book.title }</Title>
            <Flex mobileFlexDirection="column" tabletFlexDirection="column" alignItems="stretch">
                <Column width="544">
                    <BackgroundBook  color={ COLORS[getColor()] }>
                        <ImgBook src={ book.image }/>
                        { isAuth && <Like book={ book }/> }
                    </BackgroundBook>
                </Column>
                <Column width="448">
                    <WrapBook>
                        <Item>
                            <Title fontSize="40" lineHeight="60" marginBottom="24">{ book.price }</Title>
                            <Stars/>
                        </Item>
                        <Item>
                            <BookInfo>Authors</BookInfo>
                            <Info>{ book.authors }</Info>
                        </Item>
                        <Item>
                            <BookInfo>Publisher</BookInfo>
                            <Info>{ book.publisher }, { book.year }</Info>
                        </Item>
                        <Item>
                            <BookInfo>Language</BookInfo>
                            <Info>English</Info>
                        </Item>
                        <Item>
                            <BookInfo>Format</BookInfo>
                            <Info>Paper book / ebook (PDF)</Info>
                        </Item>
                    </WrapBook>
                    <WrapButton>
                        <Button text="add to cart" onClick={ addToCart }/>
                    </WrapButton>
                    <Info>Preview book</Info>
                </Column>
            </Flex>
            <TabGroup desc={ book.desc } authors={ book.authors }/>
        </>
    );
};

export default React.memo(Book);