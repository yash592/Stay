/**
 * @format
 */

import "react-native";
import renderer from "react-test-renderer";
import React from "react";
import { Home } from "../src/components/screens/Home";

// Note: test renderer must be required after react-native.
// import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
