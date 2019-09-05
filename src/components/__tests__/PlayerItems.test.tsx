import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { newGame } from "../../store";
import { getInitialState } from "../../store/reducer";
import { PlayerItems } from "../PlayerItems";

configure({ adapter: new Adapter() });

it("new game dispatched when button clicked", () => {
  const mockDispatch = jest.fn();
  // @ts-ignore
  const wrapper = shallow(<PlayerItems {...getInitialState()} dispatch={mockDispatch}/>);

  wrapper.find("#button").simulate("click");
  expect(mockDispatch).toBeCalledTimes(1);
  expect(mockDispatch).toHaveBeenLastCalledWith(newGame());
});
