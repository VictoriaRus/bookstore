import { Reducer } from "redux";
import { AuthActionType } from "../../actions/authActionCreators/authActionCreators";
import { AUTH_LOADING, GET_LOGIN_DATA_FAILURE, GET_LOGIN_DATA_SUCCESS } from "../../actions/actions";
import { IAuthResponseActivationUserData } from "../../../types/authTypes/authTypes";

interface IInitialAuthState {
    data: IAuthResponseActivationUserData;
    isLoading: boolean;
    error: null | string;
    isAuth: boolean;
}

const initialState: IInitialAuthState = {
    data: {} as IAuthResponseActivationUserData,
    isLoading: false,
    error: null,
    isAuth: false
}

const authReducer: Reducer<IInitialAuthState, AuthActionType> = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOGIN_DATA_SUCCESS:
            return { ...state, data: { ...action.payload }, error: null, isAuth: true }
        case GET_LOGIN_DATA_FAILURE:
            return { ...state, error: action.payload }
        case AUTH_LOADING:{
            return { ...state, isLoading: action.payload }
        }
        default:
            return state;
    }
}

export default authReducer;