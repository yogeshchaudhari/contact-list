const SelectReducer = (state = {}, action) => {
    switch(action.type){
        case "SELECT_CONTACT":
            return {...state, id: action.id};
        default: 
            return state;
    }
}
export default SelectReducer;