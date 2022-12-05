import {
    BOOKS_LOADING, GET_BOOKS_FAILURE, GET_BOOKS_SUCCESS, SET_FILTER, SET_PAGE
} from "../../actions/actions";
import { IBook } from "../../../types/booksTypes/booksTypes";
import { Reducer } from "redux";
import { BooksActionType } from "../../actions/booksActionsCreators/booksActionsCreators";

interface IInitialBooksState {
    books: IBook[] | [];
    isLoading: boolean;
    error: null | string;
    filter: string;
    total: number;
    page: number;
    pageCount: number;
};

const initialState: IInitialBooksState = {
    books: [],
    isLoading: false,
    error: null,
    filter: '',
    total: 7927,
    page: 1,
    pageCount: 100
};

const booksReducer: Reducer<IInitialBooksState, BooksActionType> = (state = initialState, {type, payload}: any) => {
    switch (type) {
        case BOOKS_LOADING:
            return { ...state, isLoading: payload };
        case GET_BOOKS_SUCCESS:
            return {
                ...state,
                books: [...payload.books],
                isLoading: false,
                error: null,
                page: +payload.page,
                total: +payload.total,
                pageCount: Math.ceil(payload.total / 10)
            };
        case GET_BOOKS_FAILURE:
            return { ...state, error: payload, isLoading: false };
        case  SET_FILTER:
            return { ...state, filter: payload, page: 1 };
        case SET_PAGE:
            return { ...state, page: payload };
        default:
            return state;
    }
}

export default booksReducer;