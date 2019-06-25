import "react-native";
import renderer from "react-test-renderer";
import React, { Component } from "react";

import { MockedProvider } from "../../node_modules/react-apollo/test-utils";

import Listings from "../../src/components/screens/Listings/Listings";
// import { MockedProvider } from "react-apollo/test-utils";
import { getAllReservations } from "../../src/queries/queries.js";
import { addTypenameToDocument } from "apollo-client";

test("Listings delivers props to child component", done => {
  const mockedData = {
    reservations: {
      id: "cjx4wod1i2pke0b42z5irg2u2",
      arrivalDate: "August 16, 2019",
      departureDate: "July 17, 2019",
      hotelName: "Ritz-Carlton"
    }
  };

  class DummyComponent extends Component {
    render() {
      return null;
    }
  }

  const WrappedDummyComponent = Listings(DummyComponent);

  const query = addTypenameToDocument(getAllReservations);
  console.log(query);

  const mock = (
    <MockedProvider
      mocks={[
        {
          request: { query },
          result: { data: reservations }
        }
      ]}
    >
      <WrappedDummyComponent />
    </MockedProvider>
  );
  renderer.create(mock);
});
