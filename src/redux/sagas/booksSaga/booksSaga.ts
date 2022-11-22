import { takeLatest, call, put} from "redux-saga/effects";
import {GET_ASYNC_BOOKS} from "../../actions/actions";
import {getBooks} from "../../../services/booksServices/booksServices";
import {IAsyncBooksResponseData} from "../../../types/booksTypes/booksTypes";
import {AxiosResponse} from "axios";
import {
    getAsyncBooksFailure,
    getAsyncBooksStart,
    getAsyncBooksSuccess
} from "../../actions/booksActionsCreators/booksActionsCreators";

function* workFetchBooksSaga(){
    console.log('workFetchBooksSaga');
    try {
        yield put(getAsyncBooksStart());
        const response: AxiosResponse<IAsyncBooksResponseData> = yield call(getBooks);
        const result = response.data.books;
        console.log(result);
        yield put(getAsyncBooksSuccess(result));
    } catch (e: any) {
      yield put(getAsyncBooksFailure(e?.massage));
    }
}

export  function* watchBooksSaga(){
    yield takeLatest(GET_ASYNC_BOOKS, workFetchBooksSaga);
}