const SearchReducer = (state = '', action) => {
    switch(action.type){
        case "SEARCH":
            return action.searchTerm;
        default:
            return state;
    }
}
export default SearchReducer;