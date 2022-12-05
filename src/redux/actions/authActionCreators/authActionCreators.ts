import {
    AUTH_LOADING,
    GET_LOGIN_DATA_FAILURE,
    GET_LOGIN_DATA_SUCCESS,
    LOGIN,
    LOGOUT
} from "../actions";
import { InferActionTypes } from "../../store/store";
import { IAuthRequestLoginData, IAuthResponseActivationUserData } from "../../../types/authTypes/authTypes";

export const authActionCreators = {
    // redux-saga
    getLogin: (loginData: IAuthRequestLoginData) => {
        return {
            type: LOGIN,
            payload: loginData,
        }
    },
    // reducers
    setAuthLoading: (isLoading: boolean) => {
        return {
            type: AUTH_LOADING,
            payload: isLoading,
        }
    },

    getLoginDataSuccess: (data: IAuthResponseActivationUserData) => {
        return {
            type: GET_LOGIN_DATA_SUCCESS,
            payload: data,
        }
    },

    getLoginDataFailure: (error: any) => {
        return {
            type: GET_LOGIN_DATA_FAILURE,
            payload: error,
        }
    },

    logout: () => {
        return {
            type: LOGOUT,
        }
    }
};

export type AuthActionType = InferActionTypes<typeof authActionCreators>
