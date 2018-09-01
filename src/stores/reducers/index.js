import { combineReducers } from 'redux';

import ListReducer from "./listReducer";
import SelectReducer from "./selectReducer";
import SearchReducer from "./searchReducer";

const rootReducer = combineReducers({
    contactList     : ListReducer,
    searchResult    : SearchReducer,
    selectedContact : SelectReducer
});

export default rootReducer;