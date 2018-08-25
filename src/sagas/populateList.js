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
                return list.sort((contact1, contact2) => {
                    let name1 = contact1.general.firstName.toUpperCase();
                    let name2 = contact2.general.firstName.toUpperCase();
                    if (name1 < name2) {
                        return -1;
                      }
                      if (name1 > name2) {
                        return 1;
                      }
                      return 0;
                });
            });
        yield put({type: "POPULATE_LIST", jsonData: list});
    }
    catch(e){
        yield put({type: "POPULATE_LIST", jsonData: []});
    }
}

export default populateListSaga;