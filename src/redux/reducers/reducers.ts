import { combineReducers } from "redux";
import booksReducer from "./booksReducer/booksReducer";
import authReducer from "./authReducer/authReducer";

const rootReducer = combineReducers({
    books: booksReducer,
    auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;