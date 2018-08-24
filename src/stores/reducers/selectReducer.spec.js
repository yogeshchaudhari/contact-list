import reducer from "./selectReducer";
describe("Tests for Select Reducer", () => {
  it("Should return the initial state of selected contact if no action is dispatched", () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it("Should return the initial state of selected contact if invalid action is dispatched", () => {
    expect(reducer(undefined, {type:"INVALID_ACTION"})).toEqual({});
  });
  it("Should return the id of the selected contact dispatched along with the SELECT_CONTACT action", () => {
    expect(reducer(undefined, {type:"SELECT_CONTACT", id:1})).toEqual({id:1});
  });
});