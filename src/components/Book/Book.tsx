import React, {useEffect, useState} from 'react';
import Title from "../common-components/Title";
import Flex from "../../containers/Flex";
import styled from "styled-components";
import Button from "../Button";

interface IColumnProps {
    width: string;
}

const ColumnStyled = styled.div<IColumnProps>`
  width: ${props => props.width}px;
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
    top:0;
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

const SelectStyled = styled.select`
  border: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const TextStyled= styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 200%;
`;

const ImgBook = styled.img`
  width:300px;
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
  background-color: #D7E4FD;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ( max-width: 768px ) {
    margin-bottom: 20px;
  }
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

const Book = ({isbn13}: IBookProps) => {
    const [book, setBook] = useState<IBookState>({});
    const url = 'https://api.itbook.store/1.0/books/';

    useEffect(() => {
        fetch(`${url}${isbn13}`)
            .then(response => response.json())
            .then(book => {
                setBook(book);
            })
    }, [])

    return (
        <>
            <Title>{book.title}</Title>
            <Flex mobileFlexDirection="column" tabletFlexDirection="column">
                <ColumnStyled width="544">
                    <BackgroundBook>
                        <ImgBook src={book.image}/>
                    </BackgroundBook>
                </ColumnStyled>
                <ColumnStyled width="448">
                    <WrapBookStyled>
                        <ItemStyled>
                            <Title fontSize="40" lineHeight="60" marginBottom="24">{book.price}</Title>
                            <span></span>
                        </ItemStyled>
                        <ItemStyled>
                            <BookInfoStyled>Authors</BookInfoStyled>
                            <InfoStyled>{book.authors}</InfoStyled>
                        </ItemStyled>
                        <ItemStyled>
                            <BookInfoStyled>Publisher</BookInfoStyled>
                            <InfoStyled>{book.publisher}, {book.year}</InfoStyled>
                        </ItemStyled>
                        <ItemStyled>
                            <BookInfoStyled>Language</BookInfoStyled>
                            <InfoStyled>English</InfoStyled>
                        </ItemStyled>
                        <ItemStyled>
                            <BookInfoStyled>Format</BookInfoStyled>
                            <InfoStyled>Paper book / ebook (PDF)</InfoStyled>
                        </ItemStyled>

                        <SelectStyled name="book_profile">
                            <option value="">More details</option>
                            <option value="1">option 1</option>
                            <option value="2">option 2</option>
                            <option value="3">option 3</option>
                        </SelectStyled>
                    </WrapBookStyled>

                    <Button>add to cart</Button>
                    <div>Preview book</div>
                </ColumnStyled>
            </Flex>
            <div>
                <TextStyled>{book.desc}</TextStyled>
            </div>
        </>
    );
};

export default Book;