import { RootState } from "../../store/store";

export const booksSelector = (state: RootState)=> state.books.books;