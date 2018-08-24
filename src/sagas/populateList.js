import { put, takeLatest } from 'redux-saga/effects';

function* populateListSaga() {
    yield takeLatest("POPULATE_LIST_REQUEST", fetchList);
}

function* fetchList(action) {
    try{
        let list = [{"name": "test"},{"name": "test"},{"name": "test"}];
        yield put({type: "POPULATE_LIST", jsonData: list});
    }
    catch(e){
        yield put({type: "POPULATE_LIST", jsonData: []});
    }
}

export default populateListSaga;