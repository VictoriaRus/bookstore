import { all, fork} from "redux-saga/effects";
import { watchBooksSaga } from "./booksSaga/booksSaga";
import { watchAuthSaga } from "./authSaga/authSaga";

export function* rootSaga(){
    yield all([fork(watchBooksSaga), fork(watchAuthSaga)]);
}