import "react-native";
import renderer from "react-test-renderer";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
require("react-native-mock-render/mock");

configure({ adapter: new Adapter() });
import { Listings } from "../../src/components/screens/Listings/Listings";
import { shallow } from "enzyme";
import { MockedProvider } from "react-apollo/test-utils";
import { getAllReservations } from "../../src/queries/queries.js";
const wait = require("waait");

// const mocks = [
//   {
//     request: {
//       query: getAllReservations
//     },
//     result: {
//       data: { reservations: [] }
//     }
//   }
// ];

test("renders correctly", () => {
  const loadingTree = renderer.create(<Listings loading />).toJSON();
  expect(loadingTree).toMatchSnapshot();
  const tree = renderer
    .create(
      <Listings
        reservations={{
          id: "cjx4wod1i2pke0b42z5irg2u2",
          arrivalDate: "August 16, 2019",
          departureDate: "July 17, 2019",
          hotelName: "Ritz-Carlton"
        }}
        loading={false}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
