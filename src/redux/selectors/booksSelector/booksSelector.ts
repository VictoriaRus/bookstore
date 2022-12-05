import { RootState } from "../../store/store";

export const booksSelector = (state: RootState) => state.books.books;
export const isLoadingAutBooksSelector = (state: RootState) => state.books.isLoading;
export const filterBooksSelector = (state: RootState) => state.books.filter;
export const totalBooksSelector = (state: RootState) => state.books.total;
export const pageBooksSelector = (state: RootState) => state.books.page;
export const pageCountBooksSelector = (state: RootState) => state.books.pageCount;