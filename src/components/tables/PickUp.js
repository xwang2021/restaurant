import "./PickUp.css";
import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

function createData(
  orderID,
  customerName,
  phone,
  scheduledTime,
  placedTime,
  total,
  numItem,
  payment,
  status,
  action
) {
  return {
    orderID,
    customerName,
    phone,
    scheduledTime,
    placedTime,
    total,
    numItem,
    payment,
    status,
    action,
  };
}

const rows = [
  createData(
    236,
    "Sylvie Hogan",
    "202-555-0105",
    "2020/08/21, 8:30pm",
    "2020/08/21, 2:38pm",
    "$22.00",
    1,
    "Credit Card",
    "Confirmed"
  ),
  createData(
    235,
    "Afsana Bradshaw",
    "304-747-1751",
    "2020/08/21, 8:00pm",
    "2020/08/21, 1:36pm",
    "$38.75",
    3,
    "Cash",
    "Confirmed"
  ),
  createData(
    234,
    "Denis Hurst",
    "864-921-9961",
    "2020/08/21, 8:00pm",
    "2020/08/21, 4:34pm",
    "$160.50",
    7,
    "Credit Card",
    "Confirmed"
  ),
  createData(
    233,
    "Mac Mullins",
    "856-276-6531",
    "2020/08/21, 7:30pm",
    "2020/08/21, 5:23pm",
    "$250.40",
    15,
    "Credit Card",
    "Completed"
  ),
  createData(
    222,
    "Nella England",
    "618-606-2145",
    "2020/08/21, 7:15pm",
    "2020/08/21, 4:31pm",
    "56.80",
    3,
    "Card",
    "Completed"
  ),
];

export default function PickUp() {
  const [oderList, setOrderList] = React.useState(rows);
  const handleDelete = (index) => {
    setOrderList(oderList.filter((item, itemIndex) => itemIndex !== index));
  };

  return (
    <div className="pickUpStyle">
      <div className="pickUpTitle">Pickup Order List</div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="tableHeadStyle" align="left">
                OrderID
              </TableCell>
              <TableCell className="tableHeadStyle" align="left">
                Customer Name
              </TableCell>
              <TableCell className="tableHeadStyle" align="left">
                Phone
              </TableCell>
              <TableCell className="tableHeadStyle" align="left">
                Scheduled Time
              </TableCell>
              <TableCell className="tableHeadStyle" align="left">
                Placed Time
              </TableCell>
              <TableCell className="tableHeadStyle" align="left">
                Total
              </TableCell>
              <TableCell className="tableHeadStyle" align="left">
                # items
              </TableCell>
              <TableCell className="tableHeadStyle" align="left">
                Payment
              </TableCell>
              <TableCell className="tableHeadStyle" align="left">
                Status
              </TableCell>
              <TableCell className="tableHeadStyle" align="left">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {oderList.map((row, key) => (
              <TableRow key={row.orderID}>
                <TableCell align="left">{row.orderID}</TableCell>
                <TableCell align="left">{row.customerName}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
                <TableCell align="left">{row.scheduledTime}</TableCell>
                <TableCell align="left">{row.placedTime}</TableCell>
                <TableCell align="left">{row.total}</TableCell>
                <TableCell align="left">{row.numItem}</TableCell>
                <TableCell align="left">{row.payment}</TableCell>
                <TableCell align="left">{row.status}</TableCell>
                <TableCell align="left">
                  <Button
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDelete(key)}
                    color="secondary"
                  ></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
