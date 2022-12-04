import { AnyAction, combineReducers } from "redux";
import booksReducer from "./booksReducer/booksReducer";
import authReducer from "./authReducer/authReducer";
import { LOGOUT } from "../actions/actions";
import favoritesReducer from "./favoritesReducer/favoritesReducer";


const appReducer = combineReducers({
    books: booksReducer,
    auth: authReducer,
    favorites: favoritesReducer,
});

const rootReducer = (state: ReturnType<typeof appReducer> | undefined, action: AnyAction) => {
    if (action.type === LOGOUT) {
        localStorage.clear();
        return appReducer({} as ReturnType<typeof appReducer>, action);
    }
    return appReducer(state, action);
}

export default rootReducer;