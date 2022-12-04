import React from "react";
import { useAppSelector } from "../../redux/hooks/hooks";
import { favoriteBooksSelector } from "../../redux/selectors/favoritesSelector/favoritesSelector";
import FavoriteBook from "./FavoriteBook/FavoriteBook";

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
            : <div>You don't have any favorite books yet...</div>
    );
};

export default React.memo(FavoriteList);