import "./TableModal.css";
import React from "react";
import { connect } from "react-redux";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { addTable, updateTable } from "../../actions/tableActions";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { deleteTable } from "../../actions/tableActions";
import CloseIcon from "@material-ui/icons/Close";

/* TableModel is a page for user to enter the table number, capacity, table size 
to create new table or edit current table. 
This component was reused twice in the Add table and Edit table function.
Therefore there is a boolean isEdit to indicate what to show on the tableModal. */

function TableModal(props) {
  const isEdit = props.isEdit;
  const table = props.table;

  const handleDelete = () => {
    handleClose();
    props.dispatch(deleteTable(props.tableIndex));
  };

  const [capacity, setCapacity] = React.useState(isEdit ? table.capacity : 1);

  const increment = () => {
    setCapacity(capacity + 1);
  };

  const decrement = () => {
    setCapacity(capacity - 1);
  };
  // read the table fields from redux as inital state if this component is called by edit function
  const [name, setName] = React.useState(isEdit ? table.name : "");
  const [hasNameError, setHasNameError] = React.useState(false);
  const onNameInput = (event) => {
    const newName = event.target.value;
    setHasNameError(newName.trim().length === 0);
    setName(newName);
  };

  const [length, setLength] = React.useState(isEdit ? table.length : "1");
  const [hasLengthError, sethasLengthError] = React.useState(false);
  const onLengthInput = (event) => {
    const newLength = event.target.value;
    sethasLengthError(
      newLength.trim().length === 0 || parseInt(newLength) <= 0
    );
    setLength(newLength);
  };

  const [width, setWidth] = React.useState(isEdit ? table.width : "1");
  const [hasWidthError, sethasWidthError] = React.useState(false);
  const onWidthInput = (event) => {
    const newWidth = event.target.value;
    sethasWidthError(newWidth.trim().length === 0 || parseInt(newWidth) <= 0);
    setWidth(newWidth);
  };

  // set the boolean showModal from DineIn page to false to make the model invisible
  const handleClose = () => {
    props.closeTableModal();
  };

  const handleSave = () => {
    if (name.length === 0) {
      setHasNameError(true);
      return;
    }

    if (isEdit) {
      props.dispatch(
        // update the states table with the new edited table and its index
        updateTable(
          {
            // pass in all the fields in the table, then override the below fields.
            ...table,
            name: name,
            capacity: capacity,
            width: width,
            length: length,
          },
          props.tableIndex
        )
      );
    } else {
      props.dispatch(
        // call redux action to create new table
        addTable({
          name: name,
          capacity: capacity,
          width: width,
          length: length,
          menuItems: [],
        })
      );
    }
    handleClose();
  };

  const hasError = hasNameError || hasWidthError || hasLengthError;

  return (
    <div className="modal">
      <div className="formStytle">
        <div className="topButtons">
          <div className="iconButtonStyle">
            {isEdit && (
              <IconButton
                title="Delete Table"
                className="deleteIconStyle"
                onClick={handleDelete}
              >
                <DeleteForeverIcon />
              </IconButton>
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
        <div className="nameStyle">
          <label>Table Number</label>
          <TextField
            error={hasNameError}
            helperText={hasNameError ? "Please input a table name" : null}
            label="Enter Table Number"
            className="textFieldStyle"
            variant="outlined"
            size="small"
            defaultValue={name}
            onChange={onNameInput}
          />
        </div>
        <div className="capacityStyle">
          <label>Seat Capacity</label>
          <Button
            onClick={decrement}
            disabled={capacity <= 1}
            startIcon={<RemoveCircleOutlineOutlinedIcon />}
          ></Button>
          <span className="capacityPadding">{capacity}</span>
          <Button
            onClick={increment}
            startIcon={<AddCircleOutlineOutlinedIcon />}
          ></Button>
        </div>
        <div className="sizeContainer">
          <div className="sizeStyle">
            <label>Table Size - Length</label>
            <TextField
              error={hasLengthError}
              helperText={hasLengthError ? "Please input a valid length" : null}
              type="number"
              label="Enter Length"
              className="textFieldStyle"
              variant="outlined"
              size="small"
              defaultValue={length}
              onChange={onLengthInput}
            />
          </div>
          <div className="sizeStyle">
            <label>Table Size - Width</label>
            <TextField
              error={hasWidthError}
              helperText={hasWidthError ? "Please input a valid width" : null}
              type="number"
              label="Enter Width"
              className="textFieldStyle"
              variant="outlined"
              size="small"
              defaultValue={width}
              onChange={onWidthInput}
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
            disabled={hasError}
            onClick={handleSave}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default connect()(TableModal);
