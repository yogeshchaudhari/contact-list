import { createStore, combineReducers} from 'redux';

import ListReducer from "./reducers/listReducer";

const rootReducer = combineReducers({
    contactList: ListReducer
});

export default createStore(rootReducer);