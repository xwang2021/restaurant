import React from "react";
import "./Dish.css";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import Button from "@material-ui/core/Button";

export default function Dish(props) {
  const item = props.item;
  const table = props.table;

  const [quantity, setQuantity] = React.useState(item.quantity);

  const onClickIncrease = () => {
    setQuantity(quantity + 1);
    item.quantity++;
    props.updateSubtotal(item.price);
  };

  const onClickDecrease = () => {
    setQuantity(quantity - 1);
    item.quantity--;
    props.updateSubtotal(-item.price);
  };

  const onClickRemove = () => {
    table.menuItems = table.menuItems.filter((menuItem) => {
      return menuItem !== item;
    });
    props.updateSubtotal(-item.price * item.quantity);
  };

  return (
    <div className="orderContainer">
      <div className="gridContainer">
        <span>{item.dish}</span>
        <span className="priceStyle">
          $ {(Math.round(item.price * 100) / 100).toFixed(2)}
        </span>
      </div>
      <div className="menuButtons">
        <Button
          onClick={onClickDecrease}
          startIcon={<RemoveCircleOutlineOutlinedIcon />}
        ></Button>
        <span className="capacityPadding">{quantity}</span>
        <Button
          onClick={onClickIncrease}
          color="primary"
          startIcon={<AddCircleOutlineOutlinedIcon />}
        ></Button>

        <Button className="removeButton" onClick={onClickRemove}>
          Remove
        </Button>
      </div>
    </div>
  );
}
