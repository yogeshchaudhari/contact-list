import { createStore, combineReducers} from 'redux';

import ListReducer from "./reducers/listReducer";
import SearchReducer from "./reducers/searchReducer";

const rootReducer = combineReducers({
    contactList : ListReducer,
    searchTerm  : SearchReducer
});

export default createStore(rootReducer);