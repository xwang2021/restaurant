import "./AddTable.css";
import React from "react";
import { connect } from "react-redux";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { addTable } from "../actions/tableActions";

function AddTable(props) {
  const increaseCapacity = () => {
    setCapacity(capacity + 1);
  };

  const decreaseCapacity = () => {
    setCapacity(capacity - 1);
  };

  const [name, setName] = React.useState("");
  const [length, setLength] = React.useState("");
  const [width, setWidth] = React.useState("");
  const [capacity, setCapacity] = React.useState(1);

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
    <Typography className="formStytle">
      <div className="titleStyle">
        <RestaurantIcon />
        <span> Add table</span>
      </div>
      <div className="numStyle">
        <label>Table Number</label>
        <TextField
          label="Enter Table Number"
          className="textFieldStyle"
          required="true"
          variant="outlined"
          size="small"
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="capacityStyle">
        <label>Seat Capacity</label>
        <Button
          onClick={decreaseCapacity}
          startIcon={<RemoveCircleOutlineOutlinedIcon />}
        ></Button>
        <span className="capacityPadding">{capacity}</span>
        <Button
          onClick={increaseCapacity}
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
            onChange={(event) => setWidth(event.target.value)}
          />
        </div>
      </div>
      <div class="bottomButtonStyle">
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
    </Typography>
  );
}

export default connect()(AddTable);
