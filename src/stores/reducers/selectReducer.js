const SelectReducer = (state = {}, action) => {
    switch(action.type){
        case "SELECT_CONTACT":
            return {...state, id: action.id, showContact: true};
        case "HIDE_CONTACT":
            return {...state, showContact: false}
        default: 
            return {id: undefined, showContact: false};
    }
}
export default SelectReducer;