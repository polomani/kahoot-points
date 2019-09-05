import React, { KeyboardEvent, PropsWithChildren } from "react";
import "../styles//Common.css";

export function NoItems(props: PropsWithChildren<{}>) {
  return <div className="noItems fancyBoldFont">{props.children}</div>;
}

export function Button(props: PropsWithChildren<{ onClick: <P, R> (p?: P) => R | void, id: string }>) {

  const onPress = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onClick();
    }
  };

  return (
    <div className="button noselect clickable fancyBoldFont" tabIndex={0}
      id={props.id} onClick={props.onClick} onKeyPress={onPress}>
      {props.children}
    </div>
  );
}
