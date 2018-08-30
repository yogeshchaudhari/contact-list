const SearchReducer = (state = {searchTerm: ""}, action) => {
    switch(action.type){
        case "SEARCH":
            let newState = {searchTerm: ""}
            if(action.searchTerm)
                newState.searchTerm = action.searchTerm;
            return newState;
        default:
            return state;
    }
}
export default SearchReducer;