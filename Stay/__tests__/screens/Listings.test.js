import "react-native";
import renderer from "react-test-renderer";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

configure({ adapter: new Adapter() });
import Listings from "../../src/components/screens/Listings/Listings";
import { shallow } from "enzyme";
import { MockedProvider } from "react-apollo/test-utils";
import { getAllReservations } from "../../src/queries/queries.js";

const mocks = [
  {
    request: {
      query: getAllReservations
    },
    result: {
      data: {
        reservations: []
      }
    }
  }
];

it("renders without an error", async () => {
  await renderer.create(
    <MockedProvider mocks={mocks} addTypeName={false}>
      <Listings />
    </MockedProvider>
  );
});
