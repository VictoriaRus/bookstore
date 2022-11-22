import {axiosPrivateAuth} from "../../api/api";
import {
    IAuthRequestActivationData,
    IAuthRequestLoginData, IAuthRequestRefreshToken,
    IAuthRequestRegistrationData, IAuthResponseActivationData, IAuthResponseActivationUserData,
    IAuthResponseLoginData, IAuthResponseRefreshToken, IAuthResponseRegistrationData
} from "../../types/authTypes/authTypes";

export const login = async ({email, password}: IAuthRequestLoginData) => {
    return await axiosPrivateAuth.post<IAuthResponseLoginData>(`/auth/jwt/create/`, {email, password});
}

export const registration = async ({username, email, password}: IAuthRequestRegistrationData) => {
    return await axiosPrivateAuth.post<IAuthResponseRegistrationData>(`/auth/users/`, {username, email, password});
}

export const accountActivation = async ({uid, token}: IAuthRequestActivationData) => {
    return await axiosPrivateAuth.post<IAuthResponseActivationData>(`/auth/users/activation/`, {uid, token});
}

export const getAuthorizedUserInfo = async () => {
    return await axiosPrivateAuth.get<IAuthResponseActivationUserData>(`/auth/users/me/`);
}

export const refreshToken = async ({refresh}:IAuthRequestRefreshToken) => {
    return await axiosPrivateAuth.post<IAuthResponseRefreshToken>(`/auth/jwt/refresh/`, {refresh});
}

