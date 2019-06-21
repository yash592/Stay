import "react-native";
import renderer from "react-test-renderer";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

configure({ adapter: new Adapter() });
import { Header } from "../../src/components/common/Header";
import { shallow } from "enzyme";

describe("Header component renders correctly", () => {
  it("Shallow rendering", () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});
