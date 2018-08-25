import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import ListReducer from "./reducers/listReducer";
import SearchReducer from "./reducers/searchReducer";
import SelectReducer from "./reducers/selectReducer";

import rootSaga from '../sagas/root';

const rootReducer = combineReducers({
    contactList     : ListReducer,
    searchResult    : SearchReducer,
    selectedContact : SelectReducer
});

const sagaMiddleware = createSagaMiddleware();

export default createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);