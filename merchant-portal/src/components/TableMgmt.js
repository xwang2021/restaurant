import "./TableMgmt.css";
import AddIcon from "@material-ui/icons/Add";
import TableModal from "./TableModal";
import Button from "@material-ui/core/Button";
import React from "react";
import { connect } from "react-redux";
import Table from "./Table";

const mapStateToProps = function (state) {
  return {
    tables: state.tables,
  };
};

//import CloseIcon from "@material-ui/icons/Close";
function TableMGMT(props) {
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
        {showModal ? (
          <TableModal isEdit={false} handleClose={closeTableModal} />
        ) : null}
      </div>
      <div className="tableContainer">
        {props.tables.map((tableItem, key) => (
          <Table tableIndex={key} table={tableItem} />
        ))}
      </div>
    </>
  );
}

export default connect(mapStateToProps)(TableMGMT);
