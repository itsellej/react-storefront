import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Cart from "../Cart";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
  shallow(<Cart />);
});

// test("when rendered it updates this.state.cart with items available in this.state.data", () => {
//   const wrapper = shallow(<Cart />);
//   const instance = wrapper.instance();
//   const dataQuantity = instance.state.data.length;
//   const cartQuantity = instance.state.cart.length;
//   expect(cartQuantity).toEqual(dataQuantity);
// });
