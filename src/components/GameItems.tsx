import React, { Component } from "react";
import { connect, DispatchProp } from "react-redux";
import { AppState, GameItem } from "../store";
import { giveItemToPlayer } from "../store";
import "../styles//GameItems.css";
import { NoItems } from "./Common";
import Item from "./Item";
import Label from "./Label";

interface GameItemsProps {
  items: GameItem[];
}

export class GameItems extends Component<GameItemsProps & DispatchProp> {

  public onItemClick = (itemId: number) => {
    this.props.dispatch(giveItemToPlayer(itemId));
  }

  public renderItemsList() {
    return (
      <div id="itemsList">
        {
          this.props.items.map((item, index) => (
            <div key={index} className="gameItemContainer clickable">
              <Item size={6} key={"A"} onClick={this.onItemClick} data={item}/>
            </div>
          ))
        }
      </div>
    );
  }

  public render() {
    return (
      <div className="gameItems">
        <Label>Kahoot! Points</Label>
        {this.props.items.length ? this.renderItemsList() : <NoItems>Empty here</NoItems>}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  items: state.gameItems,
});

export default connect(mapStateToProps)(GameItems);
