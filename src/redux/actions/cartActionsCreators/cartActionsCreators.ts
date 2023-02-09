import { IBookInfo } from "../../../types/booksTypes/booksTypes";
import { InferActionTypes } from "../../store/store";
import {
    ADD_BOOK_TO_CART, CHANGE_CART,
    CHANGE_COUNT_BOOK_CART,
    DELETE_BOOK_FROM_CART
} from "../actions";
import {IOder, IProduct} from "../../../types/cartTypes/cartTypes";

export const cartActionCreators = {
    addBookToCart: (data: IBookInfo) => {
        return {
            type: ADD_BOOK_TO_CART,
            payload: data,
        }
    },

    changeCountBookCart: (product: IProduct) => {
        return {
            type: CHANGE_COUNT_BOOK_CART,
            payload: product,
        }
    },

    changeOder: (cart: IOder) => {
        return {
            type: CHANGE_CART,
            payload: cart,
        }
    },

    deleteBookFromCart: (isbn13: string) => {
        return {
            type: DELETE_BOOK_FROM_CART,
            payload: isbn13,
        }
    },
}

export type CartActionType = InferActionTypes<typeof cartActionCreators>