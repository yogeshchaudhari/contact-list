import { combineReducers } from 'redux';

import ListReducer, * as fromListReducer from "./listReducer";
import SelectReducer from "./selectReducer";
import SearchReducer from "./searchReducer";

const rootReducer = combineReducers({
    contactList     : ListReducer,
    searchResult    : SearchReducer,
    selectedContact : SelectReducer
});

export default rootReducer;

export const getFilteredList = (state) =>
    fromListReducer.getFilteredList(state.contactList, state.searchResult.searchTerm);