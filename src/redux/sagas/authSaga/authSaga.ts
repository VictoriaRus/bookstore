import { all, call, put, takeLatest } from "redux-saga/effects";
import { LOGIN } from "../../actions/actions";
import { authActionCreators } from "../../actions/authActionCreators/authActionCreators";
import { AxiosResponse } from "axios";
import { getAuthorizedUserInfo, login } from "../../../services/authServices/authServices";
import { IAuthResponseActivationUserData, IAuthResponseLoginData } from "../../../types/authTypes/authTypes";

function* fetchLogin({ payload: { email, password } }: ReturnType<typeof authActionCreators.getLogin>) {
    try {
        yield put(authActionCreators.setAuthLoading(true));

        const response: AxiosResponse<IAuthResponseLoginData> = yield call(login, {
            email,
            password
        });
        if (response.data && response.status === 200) {
            const accessToken = response.data.access;
            const refreshToken = response.data.refresh;

            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);

            const userData: AxiosResponse<IAuthResponseActivationUserData> = yield call(getAuthorizedUserInfo);

            yield put(authActionCreators.getLoginDataSuccess({ ...userData.data }))
        }
    } catch (e: any) {
        yield put(authActionCreators.getLoginDataFailure(e?.response?.data?.detail))
    } finally {
        yield put(authActionCreators.setAuthLoading(false));
    }
}

export function* watchAuthSaga() {
    yield all([takeLatest(LOGIN, fetchLogin)])
}