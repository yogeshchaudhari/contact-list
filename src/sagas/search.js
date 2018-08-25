import { call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as JsSearch from 'js-search';

function* searchSaga() {
    yield takeLatest("SEARCH_REQUEST", updateSearch);
}

function* updateSearch(action) {
    yield call(delay, 1000);
    let searchResult = yield call(filterContacts, action.searchTerm, action.contactList);
    let filteredContacts = yield searchResult.then((response)=>{return response});
    yield put({type:"SEARCH", searchTerm: action.searchTerm, filteredContacts});
}
function* filterContacts(searchTerm, contactList) {
    return new Promise ((resolve, reject) => {
        if(!searchTerm || searchTerm === '')
            resolve(contactList);
        let search = new JsSearch.Search('id');
        search.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
        search.addIndex(['general', 'firstName']);
        search.addIndex(['general', 'lastName']);
        search.addIndex(['job', 'company']);
        search.addIndex(['job', 'title']);
        search.addIndex(['contact', 'email']);
        search.addDocuments(contactList);
        let searchResult = search.search(searchTerm);
        resolve(searchResult);
    });
}
export default searchSaga;