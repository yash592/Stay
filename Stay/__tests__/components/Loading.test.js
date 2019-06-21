import "react-native";
import renderer from "react-test-renderer";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

configure({ adapter: new Adapter() });
import { Loading } from "../../src/components/common/Loading";
import { shallow } from "enzyme";

describe("Loading component renders correctly", () => {
  it("Shallow rendering", () => {
    const component = shallow(<Loading />);
    expect(component).toMatchSnapshot();
  });
});
