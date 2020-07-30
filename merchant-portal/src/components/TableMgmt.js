import "./TableMgmt.css";
import AddIcon from "@material-ui/icons/Add";
import AddTable from "./AddTable";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
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
  const handleOnclick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <div className="buttonContainer">
        <Button
          variant="contained"
          color="secondary"
          startIcon={<AddIcon />}
          onClick={handleOnclick}
        >
          Add Table
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <AddTable setAnchorEl={setAnchorEl} />
        </Popover>
      </div>
      <div className="tableContainer">
        {props.tables.map((tableItem) => (
          <Table
            name={tableItem.name}
            capacity={tableItem.capacity}
            width={tableItem.width}
            length={tableItem.length}
          />
        ))}
      </div>
    </>
  );
}

export default connect(mapStateToProps)(TableMGMT);
