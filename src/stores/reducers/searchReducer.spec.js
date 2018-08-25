import reducer from "./searchReducer";
describe("Tests for Search Reducer", () => {
  it("Should return the initial state of search results if no action is dispatched", () => {
    expect(reducer(undefined, {})).toEqual({searchTerm: "", filteredContacts: undefined});
  });

  it("Should return the initial state of search results if invalid action is dispatched", () => {
    expect(reducer(undefined, {type:"INVALID_ACTION"})).toEqual({searchTerm: "", filteredContacts: undefined});
  });
  it("Should return the search results dispatched along with the SEARCH action", () => {
    expect(reducer(undefined, {type:"SEARCH", searchTerm: "Test", filteredContacts:[]}))
      .toEqual({searchTerm:"Test", filteredContacts: []});
  });
});
