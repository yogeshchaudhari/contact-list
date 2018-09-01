const ListReducer = (state = [], action) => {
    switch(action.type){
        case "POPULATE_LIST":
            return action.jsonData;
        default:
            return state;
    }
}
export default ListReducer;