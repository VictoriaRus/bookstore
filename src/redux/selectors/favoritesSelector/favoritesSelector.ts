import { RootState } from "../../store/store";

export const favoriteBooksSelector = (state: RootState) => state.favorites.books;