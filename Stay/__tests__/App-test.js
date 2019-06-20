/**
 * @format
 */

import "react-native";
import renderer from "react-test-renderer";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

configure({ adapter: new Adapter() });
import Listings from "../src/components/screens/Listings/Listings";
import { FormInput } from "../src/components/common/FormInput";
import { shallow } from "enzyme";

import { END_POINT } from "../config";
import { MockedProvider } from "react-apollo/test-utils";
import {
  getAllReservations,
  getOneReservation
} from "../src/queries/queries.js";
// import { mocks } from "./mocks";
const wait = require("waait");

describe("Listing components renders correctly", () => {
  it("Shallow rendering", () => {
    const component = shallow(<FormInput />);
    expect(component).toMatchSnapshot();
  });
});
