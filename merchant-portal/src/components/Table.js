import "./Table.css";
import TableOrder from "./TableOrder";
import EventSeatOutlinedIcon from "@material-ui/icons/EventSeatOutlined";
import React from "react";
import { connect } from "react-redux";
import Popover from "@material-ui/core/Popover";

function Table(props) {
  const table = props.table;

  const handleOnclick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "menuItem-popover" : undefined;

  return (
    <>
      <div
        className="tableStyle"
        style={{ width: table.width * 100, height: table.length * 100 }}
        onClick={handleOnclick}
      >
        <div>
          <span className="tableNameSpan">{table.name}</span>
          <div className="iconWrapper">
            <EventSeatOutlinedIcon />
            <span className="tableCapacitySpan">x {table.capacity}</span>
          </div>
        </div>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <TableOrder
          tableIndex={props.tableIndex}
          table={JSON.parse(JSON.stringify(table))}
          setAnchorEl={setAnchorEl}
        />
      </Popover>
    </>
  );
}

export default connect()(Table);
