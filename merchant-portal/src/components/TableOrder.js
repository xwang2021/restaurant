import "./TableOrder.css";
import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { connect } from "react-redux";
import { updateTable } from "../actions/tableActions";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import Dish from "./Dish";

function TableOrder(props) {
  const table = props.table;

  const handleSave = () => {
    props.dispatch(updateTable(table, props.tableIndex));
    closePage();
  };

  const closePage = () => {
    props.handleClose();
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    table.menuItems.forEach((item) => {
      subtotal += item.quantity * item.price;
    });
    return subtotal;
  };

  const [subtotal, setSubtotal] = React.useState(calculateSubtotal());

  const updateSubtotal = (delta) => {
    return setSubtotal(subtotal + delta);
  };

  const calculateTax = () => {
    return (subtotal - discount) * 0.1;
  };

  const [discount, setDiscount] = React.useState("");

  const calculateTotal = () => {
    return subtotal - discount + calculateTax();
  };

  return (
    <div className="tableOrder">
      <div className="closeOrderIconStyle">
        <IconButton title="Close" onClick={closePage}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className="formContainer">
        <div className="leftContainer">
          <div className="tableNumStyle">
            <span>Table: {table.name}</span>
          </div>
          <div className="tableOrderStyle">
            <span className="orderTitleSytle">Order Details</span>
            <div>
              <ul className="menuContainer">
                {table.menuItems.map((item, key) => (
                  <li key={key}>
                    <Dish
                      table={table}
                      item={item}
                      updateSubtotal={updateSubtotal}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="checkoutStyle">
            <span>Subtotal:</span>
            <span className="priceStyle">
              ${(Math.round(subtotal * 100) / 100).toFixed(2)}
            </span>

            <span>Discount:</span>
            <div className="discount">
              <span>-$</span>
              <input
                id="discount"
                type="number"
                variant="outlined"
                className="discountTextField"
                onChange={(event) => setDiscount(event.target.value)}
              />
            </div>
            <span>Tax:</span>
            <span className="priceStyle">
              ${(Math.round(calculateTax() * 100) / 100).toFixed(2)}
            </span>
            <span>Order Total:</span>
            <span className="priceStyle">
              ${(Math.round(calculateTotal() * 100) / 100).toFixed(2)}
            </span>
          </div>
        </div>
        <div className="rightContainer">
          <ButtonGroup orientation="vertical" color="primary">
            <Button>Print Order</Button>
            <Button>Print Invoice</Button>
            <Button>Add Item</Button>
            <Button>End Order</Button>
            <Button>Switch Table</Button>
          </ButtonGroup>
        </div>
      </div>
      <div className="menuButtonStyle">
        <Button
          className="btnStyle"
          variant="outlined"
          color="primary"
          onClick={closePage}
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

export default connect()(TableOrder);
