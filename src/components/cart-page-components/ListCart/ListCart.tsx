import React from "react";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { booksCartSelector } from "../../../redux/selectors/cartSelector/cartSelector";
import ItemCart from "../ItemCart/ItemCart";

const ListCart = () => {
    const books = useAppSelector(booksCartSelector);

    return (
        <div>
            {
                books.map(cartElem =>
                    <ItemCart key={ cartElem.book.isbn13 }
                              isbn13={ cartElem.book.isbn13 }
                              title={ cartElem.book.title }
                              image={ cartElem.book.image }
                              price={ cartElem.book.price }
                              count={ cartElem.booksCount }
                              subtitle={ cartElem.book.subtitle }
                    />
                )
            }
        </div>
    );
};

export default ListCart;