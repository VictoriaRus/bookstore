import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {isAuthSelector} from "../../redux/selectors/authSelector/authSelector";
import {AxiosResponse} from "axios";
import {IAuthResponseActivationUserData} from "../../types/authTypes/authTypes";
import {getAuthorizedUserInfo} from "../../services/authServices/authServices";
import {authActionCreators} from "../../redux/actions/authActionCreators/authActionCreators";
import {Navigate, Outlet } from 'react-router';

const PersistLogin = () => {
    const token = localStorage.getItem('accessToken');
    const isAuth = useAppSelector(isAuthSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (token) {
            const getAuthUserData = async () => {
                try {
                    const userData: AxiosResponse<IAuthResponseActivationUserData> = await getAuthorizedUserInfo();
                    dispatch(authActionCreators.getLoginDataSuccess({...userData.data}))
                } catch (e) {
                    console.error(e);
                }
            };
            getAuthUserData();
        }
    }, [dispatch, token])

    return isAuth || token ? <Outlet /> : <Navigate to = '/sign-in' replace />
};

export default PersistLogin;