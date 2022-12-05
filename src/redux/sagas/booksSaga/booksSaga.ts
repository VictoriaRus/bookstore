import { takeLatest, call, put, all, select } from "redux-saga/effects";
import { GET_BOOKS, GET_BOOKS_WITH_FILTER, GET_BOOKS_WITH_PAGE } from "../../actions/actions";
import { getBooks } from "../../../services/booksServices/booksServices";
import { IAsyncBooksResponseData } from "../../../types/booksTypes/booksTypes";
import { AxiosResponse } from "axios";
import { authActionCreators } from "../../actions/authActionCreators/authActionCreators";
import { booksActionCreators } from "../../actions/booksActionsCreators/booksActionsCreators";
import { filterBooksSelector, pageBooksSelector } from "../../selectors/booksSelector/booksSelector";

function* fetchBooks() {
    try {
        yield put(booksActionCreators.setBooksLoading(true));
        const filter: string = yield select(filterBooksSelector);
        const page: number = yield select(pageBooksSelector);

        const response: AxiosResponse<IAsyncBooksResponseData> = yield call(getBooks, { filter, page });
        if (response.data && response.status === 200) {
            yield put(booksActionCreators.getBooksSuccess(response.data));
        }
    } catch (e: any) {
        yield put(booksActionCreators.getBooksFailure(e.massage))
    } finally {
        yield put(authActionCreators.setAuthLoading(false));
    }
}

function* fetchBooksWithFilter({payload}: ReturnType<typeof booksActionCreators.getBooksWithFilter>) {
    yield put(booksActionCreators.setBooksFilter(payload));

    yield fetchBooks();
}

function* fetchBooksWithPage({payload}: ReturnType<typeof booksActionCreators.getBooksWithPage>) {
    yield put(booksActionCreators.setBooksPage(payload));

    yield fetchBooks();
}

export function* watchBooksSaga() {
    yield all([
        takeLatest(GET_BOOKS, fetchBooks),
        takeLatest(GET_BOOKS_WITH_FILTER, fetchBooksWithFilter),
        takeLatest(GET_BOOKS_WITH_PAGE, fetchBooksWithPage)
    ])
}