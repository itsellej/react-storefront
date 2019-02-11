import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import CartButtons from "../CartButtons";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const findByAttribute = (wrapper, val) => {
  return wrapper.find(`[test='${val}']`);
};

test("renders without crashing", () => {
  shallow(<CartButtons />);
});

test("renders add button", () => {
  const wrapper = shallow(<CartButtons positive="Add" />);
  const positive = findByAttribute(wrapper, "positive");
  expect(positive.text()).toContain("Add");
});

test("renders remove button", () => {
  const wrapper = shallow(<CartButtons negative="Remove" />);
  const negative = findByAttribute(wrapper, "negative");
  expect(negative.text()).toContain("Remove");
});