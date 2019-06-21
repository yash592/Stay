import "react-native";
import renderer from "react-test-renderer";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

configure({ adapter: new Adapter() });
import { FormInput } from "../../src/components/common/FormInput";
import { shallow } from "enzyme";

describe("FormInput component renders correctly", () => {
  it("Shallow rendering", () => {
    const component = shallow(<FormInput />);
    expect(component).toMatchSnapshot();
  });
});
