import reducer from "./selectReducer";
describe("Tests for Select Reducer", () => {
  it("Should return the initial state of selected contact if no action is dispatched", () => {
    expect(reducer(undefined, {})).toEqual({id: undefined, showContact: false});
  });

  it("Should return the initial state of selected contact if invalid action is dispatched", () => {
    expect(reducer(undefined, {type:"INVALID_ACTION"})).toEqual({id: undefined, showContact: false});
  });
  it("Should return the id of the selected contact dispatched along with the SELECT_CONTACT action", () => {
    expect(reducer(undefined, {type:"SELECT_CONTACT", id:1})).toEqual({id:1, showContact: true});
  });
  it("Should return false for showContact when dispatched HIDE_CONTACT action", () => {
    expect(reducer({showContact:true, id:1}, {type:"HIDE_CONTACT"})).toEqual({id:1, showContact: false});
  });
});