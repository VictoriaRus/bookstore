import { InferActionTypes } from "../../store/store";
import { ADD_FAVORITES_BOOKS, DELETE_FAVORITES_BOOKS } from "../actions";
import { IBookInfo } from "../../../types/booksTypes/booksTypes";

export const favoritesActionCreators = {
    addFavoritesBooks: (data: IBookInfo) => {
        return {
            type: ADD_FAVORITES_BOOKS,
            payload: data,
        }
    },

    deleteFavoritesBooks: (isbn13: string) => {
        return {
            type: DELETE_FAVORITES_BOOKS,
            payload: isbn13,
        }
    },
}

export type FavoritesActionType = InferActionTypes<typeof favoritesActionCreators>