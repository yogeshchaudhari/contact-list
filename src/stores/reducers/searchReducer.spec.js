import reducer from "./searchReducer";
describe("Tests for Search Reducer", () => {
  it("Should return the initial state of search term if no action is dispatched", () => {
    expect(reducer(undefined, {})).toEqual("");
  });

  it("Should return the initial state of search term if invalid action is dispatched", () => {
    expect(reducer(undefined, {type:"INVALID_ACTION"})).toEqual("");
  });
  it("Should return the search term dispatched along with the SEARCH action", () => {
    expect(reducer(undefined, {type:"SEARCH", searchTerm: "Test"})).toEqual("Test");
  });
});
