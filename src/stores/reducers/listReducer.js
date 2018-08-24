const ListReducer = (state = [], action) => {
    switch(action.type){
        case "POPULATE_LIST":
            let id = 0;
            return action.jsonData.map(contact => {
                contact.id = id++;
                return contact;
            });
        default:
            return state;
    }
}
export default ListReducer;