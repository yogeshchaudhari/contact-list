import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';

function* searchSaga() {
    yield takeLatest("SEARCH", updateSearch);
}

function* updateSearch(action) {
    yield call(delay, 3000);
    yield put({type:"SEARCH", searchTerm: action.searchTerm});
}

export default searchSaga;