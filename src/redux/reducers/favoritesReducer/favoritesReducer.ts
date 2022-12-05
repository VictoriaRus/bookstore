import { IBookInfo } from "../../../types/booksTypes/booksTypes";
import { Reducer } from "redux";
import { FavoritesActionType } from "../../actions/favoritesActionsCreators/favoritesActionsCreators";
import { ADD_FAVORITES_BOOKS, DELETE_FAVORITES_BOOKS } from "../../actions/actions";

interface IInitialFavoritesState {
    books: IBookInfo[] | [];
    isLoading: boolean;
    error: null | string;
}

const initialState: IInitialFavoritesState = {
    books: [],
    isLoading: false,
    error: null,
}

const favoritesReducer: Reducer<IInitialFavoritesState, FavoritesActionType> = (state = initialState, { type, payload }: any)=>{
    switch (type) {
        case ADD_FAVORITES_BOOKS:
            return {...state, books:[ ...state.books, payload] };
        case DELETE_FAVORITES_BOOKS:
            return {...state, books: [...state.books.filter(({isbn13}) => isbn13 !== payload)] };
        default:
            return state;
    }
}

export default favoritesReducer;