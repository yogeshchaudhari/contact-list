import reducer from "./listReducer";

describe("Tests for List Reducer", () => {
  it("Should return the initial state of contacts list if no action is dispatched", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("Should return the initial state of contacts list if invalid action is dispatched", () => {
    expect(reducer(undefined, {type:"INVALID_ACTION"})).toEqual([]);
  });

  it("Should return contacts list when contact list is provided to POPULATE LIST", () => {
    let testContactList = [
      {
        "id": 0,
        "general": {
          "firstName": "Liana",
          "lastName": "Crooks",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg"
        },
        "job": {
          "company": "Ledner, Johnson and Predovic",
          "title": "Investor Functionality Coordinator"
        },
        "contact": {
          "email": "Gerry_Hackett77@gmail.com",
          "phone": "(895) 984-0132"
        },
        "address": {
          "street": "1520 Zemlak Cove",
          "city": "New Devon",
          "zipCode": "42586-7898",
          "country": "Guinea-Bissau"
        }
      },
      {
        "id":1,
        "general": {
          "firstName": "Deontae",
          "lastName": "Dare",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg"
        },
        "job": {
          "company": "D'Amore, Dicki and Borer",
          "title": "International Applications Consultant"
        },
        "contact": {
          "email": "Kellie.Marvin38@yahoo.com",
          "phone": "1-615-843-3426 x600"
        },
        "address": {
          "street": "65901 Glover Terrace",
          "city": "Alden ton",
          "zipCode": "57744-4248",
          "country": "Kenya"
        }
    }];
    let actionObject = {
      type: "POPULATE_LIST",
      jsonData: testContactList
    };

    let updatedState = reducer(undefined, actionObject);
    expect(testContactList).toEqual(updatedState);
  });
});
