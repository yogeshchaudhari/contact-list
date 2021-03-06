import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';

function* searchSaga() {
    yield takeLatest("SEARCH_REQUEST", updateSearch);
}

function* updateSearch(action) {
    yield call(delay, 1000);
    yield put({type:"SEARCH", searchTerm: action.searchTerm});
}
export default searchSaga;