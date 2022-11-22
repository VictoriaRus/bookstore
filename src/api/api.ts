import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";
import {refreshToken} from "../services/authServices/authServices";

const BASE_API = 'https://studapi.teachmeskills.by';

export const axiosPrivateAuth = axios.create({
    baseURL: BASE_API,
    withCredentials: true,
});

axiosPrivateAuth.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const token = localStorage.getItem('accessToken');

        if (token) {
            config.headers!.authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error: AxiosError) => Promise.reject(error)
);

axiosPrivateAuth.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response) {
            if (error.response.status === 401 && !originalRequest.isRetry) {
                const token = localStorage.getItem('refreshToken');
                originalRequest.isRetry = true;

                if (token) {
                    try {
                        const newAccessToken = await refreshToken({refresh: token});
                        originalRequest.headers!.authorization = `Bearer ${newAccessToken.data.access}`;
                        localStorage.setItem('accessToken', newAccessToken.data.access);

                        return axiosPrivateAuth(originalRequest);
                    } catch (e) {
                        return Promise.reject(e);
                    }
                }
            } else {
                return Promise.reject(error);
            }
        } else {
            if (window.location.pathname !== '/sign-in')
                window.location.href = '/sign-in';
        }
    }
)

/*
export const axiosPrivateContent= axios.create({
    baseURL: BASE_API,
});*/