import { all } from 'redux-saga/effects';
import searchSaga from './search';
import populateListSaga from './populateList';

export default function* rootSaga(){
    yield all([
        searchSaga(),
        populateListSaga()
    ]);
}