import "./DineIn.css";
import AddIcon from "@material-ui/icons/Add";
import TableModal from "./TableModal";
import Button from "@material-ui/core/Button";
import React from "react";
import { connect } from "react-redux";
import Table from "./Table";

/* DineIn page contains Add Table button and render the tables from Redux state */
const mapStateToProps = function (state) {
  return {
    tables: state.tables,
  };
};

function DineIn(props) {
  const [showModal, setShowModal] = React.useState(false);

  const openTableModal = () => {
    setShowModal(true);
  };

  const closeTableModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="buttonContainer">
        <Button
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
          onClick={openTableModal}
        >
          Add Table
        </Button>
        {showModal && (
          <TableModal
            isEdit={false /*Create new table*/}
            closeTableModal={closeTableModal}
          />
        )}
      </div>
      <div className="tableContainer">
        {props.tables.map((tableItem, key) => (
          <Table tableIndex={key} table={tableItem} />
        ))}
      </div>
    </>
  );
}
//insert tables field from redux state into the props of DineIn
export default connect(mapStateToProps)(DineIn);
