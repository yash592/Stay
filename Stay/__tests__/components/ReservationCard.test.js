import "react-native";
import renderer from "react-test-renderer";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";

configure({ adapter: new Adapter() });
import { ReservationCard } from "../../src/components/common/ReservationCard";
import { shallow } from "enzyme";

describe("ReservationCard component renders correctly", () => {
  it("Shallow rendering", () => {
    const component = shallow(<ReservationCard />);
    expect(component).toMatchSnapshot();
  });
});
