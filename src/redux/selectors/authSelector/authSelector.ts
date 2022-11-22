import {RootState} from "../../store/store";

export const errorAuthSelector = (state: RootState) => state.auth.error;
export const isLoadingAuthSelector =(state: RootState) => state.auth.isLoading;
export const dataAuthSelector =(state: RootState) => state.auth.data;
export const isAuthSelector =(state: RootState) => state.auth.isAuth;
