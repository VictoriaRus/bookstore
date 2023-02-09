import { IBookInfo } from "../../../types/booksTypes/booksTypes";
import { Reducer } from "redux";
import { CartActionType } from "../../actions/cartActionsCreators/cartActionsCreators";
import {
    ADD_BOOK_TO_CART, CHANGE_CART,
    CHANGE_COUNT_BOOK_CART,
    DELETE_BOOK_FROM_CART
} from "../../actions/actions";

export interface IBookForCart {
    book: IBookInfo;
    bookPrice: number;
    booksCount: number;
    booksCost: number;
}

interface IInitialCartState {
    books: IBookForCart[] | [];
    sumTotal: number;
    vat: number;
    total: number;
}

const initialState: IInitialCartState = {
    books: [],
    sumTotal: 0,
    vat: 0,
    total: 0,
}

const cartReducer: Reducer<IInitialCartState, CartActionType> = (state = initialState, {type, payload}: any) => {
    switch (type) {
        case ADD_BOOK_TO_CART:
            let newBook: IBookForCart = {
                book: payload,
                bookPrice: +payload.price.slice(1),
                booksCount: 1,
                booksCost: +payload.price.slice(1),
            };

            return {
                ...state,
                books: [...state.books, newBook],
            };
        case CHANGE_COUNT_BOOK_CART:
            return {
                ...state, books: [...state.books.map(
                    item => item.book.isbn13 === payload.id
                        ? {
                            ...item,
                            bookPrice: payload.bookPrice,
                            booksCount: payload.booksCount,
                            booksCost: payload.booksCost,
                        } : item
                )]
            };
        case CHANGE_CART:
            return {
                ...state,
                sumTotal: payload.sumTotal,
                vat: payload.vat,
                total: payload.total,
            };
        case DELETE_BOOK_FROM_CART:
            return {...state, books: [...state.books.filter(({book}) => book.isbn13 !== payload)]};
        default:
            return state;
    }
}

export default cartReducer;