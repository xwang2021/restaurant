import "./TablePopover.css";
import React from "react";
import { connect } from "react-redux";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { addTable } from "../actions/tableActions";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { deleteTable } from "../actions/tableActions";
import CloseIcon from "@material-ui/icons/Close";

function TablePopover(props) {
  const isEdit = props.isEdit;
  const table = props.table;

  const handleDelete = () => {
    handleClose();
    props.closeOrderPage();
    props.dispatch(deleteTable(props.tableIndex));
  };

  const increment = () => {
    setCapacity(capacity + 1);
  };

  const decrement = () => {
    setCapacity(capacity - 1);
  };
  const [capacity, setCapacity] = React.useState(1);
  const [name, setName] = React.useState("");
  const [length, setLength] = React.useState("");
  const [width, setWidth] = React.useState("");

  const handleClose = () => {
    props.setAnchorEl(null);
  };

  const handleSave = () => {
    props.dispatch(
      addTable({
        name: name,
        capacity: capacity,
        width: width,
        length: length,
      })
    );
    handleClose();
  };

  return (
    <div className="formStytle">
      <div className="topButtons">
        <div className="iconButtonStyle">
          {isEdit ? (
            <IconButton
              title="Delete Table"
              className="deleteIconStyle"
              onClick={handleDelete}
            >
              <DeleteForeverIcon />
            </IconButton>
          ) : (
            <div />
          )}
        </div>
        <div className="closeIconStyle">
          <IconButton title="Close" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
      </div>

      <div className="titleStyle">
        <RestaurantIcon />
        <span>{isEdit ? " Edit table" : " Add table"}</span>
      </div>
      <div className="numStyle">
        <label>Table Number</label>
        <TextField
          label="Enter Table Number"
          className="textFieldStyle"
          required={true}
          variant="outlined"
          size="small"
          value={isEdit ? table.name : ""}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="capacityStyle">
        <label>Seat Capacity</label>
        <Button
          onClick={decrement}
          startIcon={<RemoveCircleOutlineOutlinedIcon />}
        ></Button>
        <span className="capacityPadding">
          {isEdit ? table.capacity : capacity}
        </span>
        <Button
          onClick={increment}
          startIcon={<AddCircleOutlineOutlinedIcon />}
        ></Button>
      </div>
      <div className="sizeContainer">
        <div className="sizeStyle">
          <label>Table Size - Length</label>
          <TextField
            type="number"
            label="Enter Length"
            className="textFieldStyle"
            variant="outlined"
            size="small"
            value={isEdit ? table.length : ""}
            onChange={(event) => setLength(event.target.value)}
          />
        </div>
        <div className="sizeStyle">
          <label>Table Size - Width</label>
          <TextField
            type="number"
            label="Enter Width"
            className="textFieldStyle"
            variant="outlined"
            size="small"
            value={isEdit ? table.width : ""}
            onChange={(event) => setWidth(event.target.value)}
          />
        </div>
      </div>
      <div className="bottomButtonStyle">
        <Button
          className="btnStyle"
          variant="outlined"
          color="primary"
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          className="btnStyle"
          variant="contained"
          color="secondary"
          onClick={handleSave}
        >
          Save
        </Button>
      </div>
    </div>
  );
}

export default connect()(TablePopover);
