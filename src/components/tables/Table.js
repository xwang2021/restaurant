import "./Table.css";
import TableOrder from "./TableOrder";
import MorePopover from "./MorePopover";
import EventSeatOutlinedIcon from "@material-ui/icons/EventSeatOutlined";
import React from "react";
import { connect } from "react-redux";

// Table represent each table element on the webpage. It is created by the Add Table function.
// After creating, users can click on the existing table to check order details.

function Table(props) {
  // use the hard copy of the table from Redux to store local changes before pushing the changes to redux
  // this will avoid local changes to update Redux state directly without clicking save button
  const table = JSON.parse(JSON.stringify(props.table));

  const [showModal, setShowModal] = React.useState(false);

  const openTableOrderModal = () => {
    setShowModal(true);
  };

  const closeTableOrderModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className="tableStyle"
        // set the width and height based on the user input
        style={{ width: table.width * 120, height: table.length * 120 }}
      >
        <div className="moreHorizStyle">
          <MorePopover tableIndex={props.tableIndex} table={table} />
        </div>
        <div className="tableFieldsWrapper" onClick={openTableOrderModal}>
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
      {showModal && (
        <TableOrder
          tableIndex={props.tableIndex}
          table={table}
          closeTableOrderModal={closeTableOrderModal}
        />
      )}
    </>
  );
}

export default connect()(Table);
