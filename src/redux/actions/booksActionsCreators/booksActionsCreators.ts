import {ActionCreator} from "redux";
import {GET_ASYNC_BOOKS, GET_ASYNC_BOOKS_FAILURE, GET_ASYNC_BOOKS_START, GET_ASYNC_BOOKS_SUCCESS} from "../actions";
import {IBook} from "../../../types/booksTypes/booksTypes";

interface IGetAsyncBookStartAction {
    type: typeof GET_ASYNC_BOOKS_START;
    payload: {},
}

interface IGetAsyncBookAction {
    type: typeof GET_ASYNC_BOOKS;
    payload: {},
}

interface IGetAsyncBookSuccessAction {
    type: typeof GET_ASYNC_BOOKS_SUCCESS;
    payload: IBook[],
}

interface IGetAsyncBookFailureAction {
    type: typeof GET_ASYNC_BOOKS_FAILURE;
    payload: string,
}

export type TBooksActions = IGetAsyncBookAction |
                            IGetAsyncBookStartAction |
                            IGetAsyncBookSuccessAction |
                            IGetAsyncBookFailureAction;

export const getAsyncBooksStart: ActionCreator<TBooksActions> = () => {
    return {
        type: GET_ASYNC_BOOKS_START,
        payload: {},
    }
}

export const getAsyncBooksSuccess: ActionCreator<TBooksActions> = (books: IBook[]) => {
    return {
        type: GET_ASYNC_BOOKS_SUCCESS,
        payload: books,
    }
}

export const getAsyncBooksFailure: ActionCreator<TBooksActions> = (error: string) => {
    return {
        type: GET_ASYNC_BOOKS_FAILURE,
        payload: error,
    }
}

export const getAsyncBooks: ActionCreator<TBooksActions> = () => {
    return {
        type: GET_ASYNC_BOOKS,
        payload: {}
    }
}
