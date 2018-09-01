import { getFilteredList } from './getFilteredList';
import { ExpansionPanelActions } from '@material-ui/core';

describe("Get Filtered List Selector", ()=>{
    it('Should return empty array when state has no contacts', ()=>{
        const mockState = {
            contactList: [],
            searchResult: {
                searchTerm: 'test'
            }
        }
        let filteredList = getFilteredList(mockState);
        expect(filteredList).toEqual([]);
    });

    it('Should return complete contact list when search term is empty', ()=>{
        const mockState = {
            contactList: [{
                general:{ firstName : 'test' },
                address: { line1 : "testAddress" }
            }],
            searchResult: {
                searchTerm: ''
            }
        }
        let filteredList = getFilteredList(mockState);
        expect(filteredList).toEqual(mockState.contactList);
    });

    it('Should return only the contacts that match search term', ()=>{
        const mockState = {
            contactList: [{
                general:{ firstName : 'test' },
                address: { line1 : "testAddress" }
            },{
                general:{ firstName : 'mock' },
                address: { line1 : "testAddress" }
            }],
            searchResult: {
                searchTerm: 'test'
            }
        };
        let expectedResult = [{
            general:{ firstName : 'test' },
            address: { line1 : "testAddress" }
        }];
        let filteredList = getFilteredList(mockState);
        expect(filteredList).toEqual(expectedResult);
    });

    it('Should return empty array if search term matches no contact', ()=>{
        const mockState = {
            contactList: [{
                general:{ firstName : 'test' },
                address: { line1 : "testAddress" }
            },{
                general:{ firstName : 'mock' },
                address: { line1 : "testAddress" }
            }],
            searchResult: {
                searchTerm: 'tst'
            }
        };
        let filteredList = getFilteredList(mockState);
        expect(filteredList).toEqual([]);
    });
});