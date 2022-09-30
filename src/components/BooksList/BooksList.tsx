import React from 'react';
import styled from "styled-components";
import CardBook from "./CardBook";

const StyledBooksList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  align-content: stretch;
  margin: 0 -15px;
  position: relative;

  &::after {
    content: "";
    height: 1px;
    width: calc(100% - 30px);
    margin-left: 15px;
    background-color: #E7E7E7;
    display: block;
    position: absolute;
    bottom: -72px;
    left: 0;
  }
`;

interface IBooks {
    title: string;
    image: string;
    price: string;
    subtitle: string;
    isbn13: number;
    url?: string;
}

interface IBooksProps {
    books: IBooks[];
}

const BooksList = ({ books }: IBooksProps) => {
    return (
        <StyledBooksList>
            { books.map(book =>
                <CardBook key={ book.isbn13 }
                          title={ book.title }
                          image={ book.image }
                          price={ book.price }
                          subtitle={ book.subtitle }
                />
            ) }
        </StyledBooksList>
    )
}

export default BooksList;