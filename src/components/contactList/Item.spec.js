import React from "react";
import ReactDOM from "react-dom";
import Item from "./Item";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";

describe("Contact Item Component Testing", () => {
  const mockStore = configureStore();

  it("Contact Item renders without crashing", () => {
    let item = {
      id: "temp_id",
      general: {
        firstName: "Liana",
        lastName: "Crooks",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg"
      },
      job: {
        company: "Ledner, Johnson and Predovic",
        title: "Investor Functionality Coordinator"
      },
      contact: {
        email: "Gerry_Hackett77@gmail.com",
        phone: "(895) 984-0132"
      },
      address: {
        street: "1520 Zemlak Cove",
        city: "New Devon",
        zipCode: "42586-7898",
        country: "Guinea-Bissau"
      }
    };
    let store = mockStore({ contact: item });
    const component = renderer.create(
      <Provider store={store}>
        <Item contact={item} />
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
