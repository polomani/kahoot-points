import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { giveItemToPlayer } from "../../store";
import { getInitialState } from "../../store/reducer";
import { GameItems } from "../GameItems";

configure({ adapter: new Adapter() });

it("giveItemToPlayer dispatched when button clicked", () => {
  const mockDispatch = jest.fn();
  const state = getInitialState();
  // @ts-ignore
  const wrapper = mount(<GameItems items={state.gameItems} dispatch={mockDispatch}/>);

  const lastItem = wrapper.find(".item").last();
  lastItem.simulate("click");
  expect(mockDispatch).toBeCalledTimes(1);
  expect(mockDispatch).toHaveBeenLastCalledWith(giveItemToPlayer(state.gameItems.length - 1));
});
