import { createSelector } from 'reselect';
import * as JsSearch from 'js-search';

const getContactList = (state) => state.contactList;
const getSearchTerm = (state) => state.searchResult.searchTerm;

export const getFilteredList = createSelector(
    [ getContactList, getSearchTerm ],
    (contactList, searchTerm) => {
        if(!searchTerm || searchTerm === '')
            return contactList;
        let search = new JsSearch.Search('id');
        search.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
        search.addIndex(['general', 'firstName']);
        search.addIndex(['general', 'lastName']);
        search.addIndex(['job', 'company']);
        search.addIndex(['job', 'title']);
        search.addIndex(['contact', 'email']);
        search.addDocuments(contactList);
        return search.search(searchTerm);
    }
);