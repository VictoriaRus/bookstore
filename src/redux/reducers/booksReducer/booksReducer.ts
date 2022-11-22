import {GET_ASYNC_BOOKS_FAILURE, GET_ASYNC_BOOKS_START, GET_ASYNC_BOOKS_SUCCESS} from "../../actions/actions";
import {TBooksActions} from "../../actions/booksActionsCreators/booksActionsCreators";

interface IBook {
    title: string,
    image: string,
    price: string,
    subtitle: string,
    isbn13: number,
    url?: string
}

type TInitialState = {
    books: IBook[] | [];
    isLoading: boolean;
    error: null | string;
};

const initialState: TInitialState = {books: [], isLoading: false, error: null};

const booksReducer = (state = initialState, {type, payload}: TBooksActions): TInitialState => {
    switch (type) {
        case GET_ASYNC_BOOKS_START:
            return {...state, isLoading: true};
        case GET_ASYNC_BOOKS_SUCCESS:
            return {...state, books: [...state.books, ...payload], isLoading: false, error: null}
        case GET_ASYNC_BOOKS_FAILURE:
            return {...state, error: payload, isLoading: false}
        default:
            return state;
    }
}

export default booksReducer;