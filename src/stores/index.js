import { createStore, combineReducers} from 'redux';

import ListReducer from "./reducers/listReducer";
import SearchReducer from "./reducers/searchReducer";
import SelectReducer from "./reducers/selectReducer";

const rootReducer = combineReducers({
    contactList     : ListReducer,
    searchTerm      : SearchReducer,
    selectedContact : SelectReducer
});

export default createStore(rootReducer);