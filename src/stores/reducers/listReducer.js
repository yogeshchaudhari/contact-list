import * as JsSearch from 'js-search';

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

export const getFilteredList = (state, searchTerm) => {
    if(!searchTerm || searchTerm === '')
       return state;
    let search = new JsSearch.Search('id');
    search.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
    search.addIndex(['general', 'firstName']);
    search.addIndex(['general', 'lastName']);
    search.addIndex(['job', 'company']);
    search.addIndex(['job', 'title']);
    search.addIndex(['contact', 'email']);
    search.addDocuments(state);
    return search.search(searchTerm);
}