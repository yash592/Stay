import "react-native";
import renderer from "react-test-renderer";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

configure({ adapter: new Adapter() });
import { BottomNav } from "../../src/components/common/BottomNav";
import { shallow } from "enzyme";

describe("BottomNav component renders correctly", () => {
  it("Shallow rendering", () => {
    const wrapper = shallow(<BottomNav renderTabs={renderTabs} />);
    console.log(wrapper.instance().renderTabs());
  });
});
