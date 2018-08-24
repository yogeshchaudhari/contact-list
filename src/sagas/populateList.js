import { put, takeLatest } from 'redux-saga/effects';

function* populateListSaga() {
    yield takeLatest("POPULATE_LIST_REQUEST", fetchList);
}

function* fetchList(action) {
    try{
        let url = 'http://localhost:3000/contacts.json';
        if(action.url)
            url = action.url;
        let list = yield fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(list) {
                return list;
            });
        yield put({type: "POPULATE_LIST", jsonData: list});
    }
    catch(e){
        yield put({type: "POPULATE_LIST", jsonData: []});
    }
}

export default populateListSaga;