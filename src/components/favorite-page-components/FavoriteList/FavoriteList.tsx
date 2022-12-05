import React from "react";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { favoriteBooksSelector } from "../../../redux/selectors/favoritesSelector/favoritesSelector";
import FavoriteBook from "../FavoriteBook/FavoriteBook";
import styled from "styled-components";

const Text = styled.div`
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

const FavoriteList = () => {
    const books = useAppSelector(favoriteBooksSelector);

    return (
        books.length > 0 ?
            <div>
                {
                    books.map(book =>
                        <FavoriteBook key={ book.isbn13 } isbn13={ book.isbn13 }
                                      title={ book.title } image= {book.image } price={ book.price }
                                      authors={ book.authors } publisher={ book.publisher } year={ book.year }/>)
                }
            </div>
            : <Text>You don't have any favorite books yet...</Text >
    );
};

export default React.memo(FavoriteList);