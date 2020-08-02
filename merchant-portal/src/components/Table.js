import "./Table.css";
import TableOrder from "./TableOrder";
import MorePopover from "./MorePopover";
import EventSeatOutlinedIcon from "@material-ui/icons/EventSeatOutlined";
import React from "react";
import { connect } from "react-redux";
import Modal from "@material-ui/core/Modal";

function Table(props) {
  const table = props.table;

  const [open, setOpen] = React.useState(false);

  const handleOnclick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className="tableStyle"
        style={{ width: table.width * 120, height: table.length * 120 }}
      >
        <div className="moreHorizStyle">
          <MorePopover
            tableIndex={props.tableIndex}
            table={JSON.parse(JSON.stringify(table))}
          />
        </div>
        <div className="tableFieldsWrapper" onClick={handleOnclick}>
          <div>
            <div>
              <span className="tableNameSpan">{table.name}</span>
            </div>

            <div className="iconWrapper">
              <EventSeatOutlinedIcon />
              <span className="tableCapacitySpan">x {table.capacity}</span>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={handleClose} className="tableOrderModal">
        <TableOrder
          tableIndex={props.tableIndex}
          table={JSON.parse(JSON.stringify(table))}
          handleClose={handleClose}
        />
      </Modal>
    </>
  );
}

export default connect()(Table);
