import React, { Component, KeyboardEvent } from "react";
import "../styles//Item.css";

interface ItemProps {
  onClick?: (id: number) => void;
  data: {
    id?: number,
    type: string,
  };
  size?: number;
}

class Item extends Component<ItemProps> {

  public size = this.props.size || 2.4;
  public sizeRem = this.size + "rem";

  public style = {
    width: this.sizeRem,
    height: this.sizeRem,
    lineHeight: this.sizeRem,
    fontSize: this.size / 2 + "rem",
  };

  private onAction = () => {
    if(this.props.onClick) {
      this.props.onClick(this.props.data.id || 0);
    }
  }

  private onPress = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      this.onAction();
    }
  }

  private onClick = () => {
    this.onAction();
  }

  public render() {

    const tabIndex = this.props.onClick ? 0 : undefined;

    return (
      <div onClick={this.onClick} onKeyPress={this.onPress} className="item noselect fancyBoldFont"
        style={this.style} tabIndex={tabIndex}>
        {this.props.data.type}
      </div>
    );
  }
}

export default Item;
