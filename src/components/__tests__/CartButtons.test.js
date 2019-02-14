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

test("disables positive button if shop quantity is 0", () => {
  const shop_quantity = 0;
  const wrapper = shallow(<CartButtons shop_quantity={shop_quantity} />);
  const button = wrapper.find("[test='positive']");
  expect(button.hasClass("disabled")).toBeTruthy();
});

test("disables negative button if cart quantity is 1", () => {
  const cart_quantity = 1;
  const wrapper = shallow(<CartButtons cart_quantity={cart_quantity} />);
  const button = wrapper.find("[test='negative']");
  expect(button.hasClass("disabled")).toBeTruthy();
});

test("positive button remains active when cart quantity is 0", () => {
  const shopQuantity = 5;
  const cartQuantity = 0;
  const wrapper = shallow(
    <CartButtons shop_quantity={shopQuantity} cart_quantity={cartQuantity} />
  );
  const button = wrapper.find("[test='positive']");
  expect(button.hasClass("disabled")).toBeFalsy();
});

test("negative button remains active when shop quantity is 0", () => {
  const shopQuantity = 0;
  const cartQuantity = 5;
  const wrapper = shallow(
    <CartButtons shop_quantity={shopQuantity} cart_quantity={cartQuantity} />
  );
  const button = wrapper.find("[test='negative']");
  expect(button.hasClass("disabled")).toBeFalsy();
});

test("CartButtons accepts onIncrement prop", () => {
  const wrapper = shallow(<CartButtons onIncrement="Hello" />);
  const button = wrapper.find("[test='positive']");
  expect(button.prop("onClick")).toContain("Hello");
});

test("CartButtons accepts onDecrement prop", () => {
  const wrapper = shallow(<CartButtons onDecrement="Goodbye" />);
  const button = wrapper.find("[test='negative']");
  expect(button.prop("onClick")).toContain("Goodbye");
});
