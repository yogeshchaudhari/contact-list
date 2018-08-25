const SearchReducer = (state = {searchTerm: "", filteredContacts:undefined}, action) => {
    switch(action.type){
        case "SEARCH":
            let newState = {searchTerm: "", filteredContacts:undefined}
            if(action.searchTerm)
                newState.searchTerm = action.searchTerm;
            if(action.filteredContacts)
                newState.filteredContacts = action.filteredContacts;
            return newState;
        default:
            return state;
    }
}
export default SearchReducer;