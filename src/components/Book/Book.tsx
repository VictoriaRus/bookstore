import React, {useEffect, useState} from 'react';
import Title from "../common-components/Title";
import Flex from "../common-components/Flex";
import styled from "styled-components";
import Button from "../common-components/Button";
import Star from "../../assets/icons/Star.png";
import StarDis from "../../assets/icons/StarDis.png";
import DescriptionBook from "./DescriptionBook";
import Like from "./Like";
import Back from "./Back";

interface IColumnProps {
    width: string;
}

const ColumnStyled = styled.div<IColumnProps>`
  width: ${props => props.width}px;
  text-align: center;
  @media ( max-width: 768px ) {
    width: 100%;
  }
`;

const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WrapBookStyled = styled.div`
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

  @media ( max-width: 768px ) {
    padding: 40px 0 48px 0;
  }
  @media ( max-width: 415px ) {
    padding: 40px 0 36px 0;
  }
`;

const InfoStyled = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 200%;
`;

const BookInfoStyled = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 200%;
  color: #A8A8A8;
`;


const ImgBook = styled.img`
  width: 300px;
  padding: 61px 0;
  @media ( max-width: 768px ) {
    width: 300px;
    padding: 61px 0;
  }
  @media ( max-width: 415px ) {
    width: 150px;
    padding: 49px 0;
  }
`;

const BackgroundBook = styled.div`
  width: 100%;
  background-color: #FEE9E2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media ( max-width: 768px ) {
    margin-bottom: 20px;
  }
`;

const WrapButton = styled.div`
  margin-bottom: 40px;
`;

interface IBookState {
    error?: number;
    title?: string;
    subtitle?: string;
    authors?: string;
    publisher?: string;
    isbn10?: number;
    isbn13?: number;
    pages?: number;
    year?: number;
    rating?: number;
    desc?: string;
    price?: string;
    image?: string;
    url?: string;
    pdf?: {
        "Chapter 2"?: string;
        "Chapter 5"?: string;
    }
}

interface IBookProps {
    isbn13: string | undefined;
}

const Book = ({ isbn13 }: IBookProps) => {
    const [book, setBook] = useState<IBookState>({});
    const url = 'https://api.itbook.store/1.0/books/';

    useEffect(() => {
        fetch(`${ url }${ isbn13 }`)
            .then(response => response.json())
            .then(book => {
                setBook(book);
            })
    }, [])

    const stars = [<img src={Star}/>, <img src={Star}/>, <img src={Star}/>, <img src={Star}/>, <img src={StarDis}/>];

    return (
        <>
            <Back />
            <Title>{ book.title }</Title>
            <Flex mobileFlexDirection="column" tabletFlexDirection="column" alignItems="stretch">
                <ColumnStyled width="544">
                    <BackgroundBook>
                        <ImgBook src={ book.image }/>
                        <Like />
                    </BackgroundBook>
                </ColumnStyled>
                <ColumnStyled width="448">
                    <WrapBookStyled>
                        <ItemStyled>
                            <Title fontSize="40" lineHeight="60" marginBottom="24">{ book.price }</Title>
                            <span>{ stars }</span>
                        </ItemStyled>
                        <ItemStyled>
                            <BookInfoStyled>Authors</BookInfoStyled>
                            <InfoStyled>{ book.authors }</InfoStyled>
                        </ItemStyled>
                        <ItemStyled>
                            <BookInfoStyled>Publisher</BookInfoStyled>
                            <InfoStyled>{ book.publisher }, {book.year}</InfoStyled>
                        </ItemStyled>
                        <ItemStyled>
                            <BookInfoStyled>Language</BookInfoStyled>
                            <InfoStyled>English</InfoStyled>
                        </ItemStyled>
                        <ItemStyled>
                            <BookInfoStyled>Format</BookInfoStyled>
                            <InfoStyled>Paper book / ebook (PDF)</InfoStyled>
                        </ItemStyled>
                    </WrapBookStyled>
                    <WrapButton>
                        <Button text="add to cart"/>
                    </WrapButton>
                    <InfoStyled>Preview book</InfoStyled>
                </ColumnStyled>
            </Flex>
            <DescriptionBook desc={ book.desc } authors={ book.authors }/>
        </>
    );
};

export default Book;