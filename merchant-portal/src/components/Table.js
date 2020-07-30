import "./Table.css";

import EventSeatOutlinedIcon from "@material-ui/icons/EventSeatOutlined";
import React from "react";

export default function Table(props) {
  return (
    <div
      className="tableStyle"
      style={{ width: props.width * 100, height: props.length * 100 }}
    >
      <div>
        <span className="tableNameSpan">{props.name}</span>
        <div className="iconWrapper">
          <EventSeatOutlinedIcon />
          <span className="tableCapacitySpan">x {props.capacity}</span>
        </div>
      </div>
    </div>
  );
}
