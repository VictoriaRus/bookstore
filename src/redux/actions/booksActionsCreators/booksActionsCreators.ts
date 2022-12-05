import {
    BOOKS_LOADING,
    GET_BOOKS,
    GET_BOOKS_FAILURE,
    GET_BOOKS_SUCCESS, GET_BOOKS_WITH_FILTER, GET_BOOKS_WITH_PAGE,
    SET_FILTER, SET_PAGE
} from "../actions";
import { IAsyncBooksResponseData } from "../../../types/booksTypes/booksTypes";
import { InferActionTypes } from "../../store/store";

export const booksActionCreators = {
    // redux-saga
    getBooks: () => {
        return {
            type: GET_BOOKS,
        }
    },
    //reducer
    setBooksLoading: (isLoading: boolean) => {
        return {
            type: BOOKS_LOADING,
            payload: isLoading,
        }
    },

    getBooksSuccess: (data: IAsyncBooksResponseData) => {
        return {
            type: GET_BOOKS_SUCCESS,
            payload: data,
        }
    },

      getBooksFailure: (error: string) => {
        return {
            type: GET_BOOKS_FAILURE,
            payload: error,
        }
    },
    //with filter
    getBooksWithFilter: (filter: string) => {
        return {
            type: GET_BOOKS_WITH_FILTER,
            payload: filter,
        }
    },

    setBooksFilter: (filter: string) => {
        return {
            type: SET_FILTER,
            payload: filter,
        }
    },
    //with page
    getBooksWithPage: (page: number) => {
        return {
            type: GET_BOOKS_WITH_PAGE,
            payload: page,
        }
    },

    setBooksPage: (page: number) => {
        return {
            type: SET_PAGE,
            payload: page,
        }
    }
};

export type BooksActionType = InferActionTypes<typeof booksActionCreators>
