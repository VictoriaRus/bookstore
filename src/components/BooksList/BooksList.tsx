import React from "react";
import styled from "styled-components";
import CardBook from "./CardBook/CardBook";
import { IBook } from "../../types/booksTypes/booksTypes";

interface IListStyled {
    bottomLine?: string;
}

const List = styled.div<IListStyled>`
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
    bottom: ${ props => props.bottomLine || "-72" }px;
    left: 0;
  }
`;

interface IBooksProps extends IListStyled {
    books: IBook[];
}

const BooksList = ({ books, bottomLine }: IBooksProps) => {

    return (
        <List bottomLine={ bottomLine }>
            { books.map(book =>
                <CardBook key={ book.isbn13 }
                          isbn13={ book.isbn13 }
                          title={ book.title }
                          image={ book.image }
                          price={ book.price }
                          subtitle={ book.subtitle }
                />
            ) }
        </List>
    )
}

export default React.memo(BooksList);