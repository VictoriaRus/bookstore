import { RootState } from "../../store/store";

export const cartSelector = (state: RootState) => state.cart;
export const booksCartSelector = (state: RootState) => state.cart.books;