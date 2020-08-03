import "./MorePopover.css";
import React from "react";
import Popover from "@material-ui/core/Popover";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { deleteTable } from "../../actions/tableActions";
import { connect } from "react-redux";
import TableModal from "./TableModal";

function MorePopover(props) {
  const table = props.table;

  const handleDelete = () => {
    props.dispatch(deleteTable(props.tableIndex));
    handleClose();
  };

  const [showModal, setShowModal] = React.useState(false);

  const openEditTableModal = () => {
    setAnchorEl(null);
    setShowModal(true);
  };

  const closeEditTableModal = () => {
    setShowModal(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <div>
        <div className="moreActionIcon">
          <MoreHorizIcon
            style={{ position: "inherit" }}
            onClick={handleClick}
          />
        </div>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div>
          <ButtonGroup orientation="vertical" color="primary">
            <Button onClick={openEditTableModal}>Edit Table</Button>
            <Button onClick={handleDelete}>Delete Table</Button>
          </ButtonGroup>
        </div>
      </Popover>
      {showModal ? (
        <TableModal
          isEdit={true}
          tableIndex={props.tableIndex}
          table={table}
          closeTableModal={closeEditTableModal}
        />
      ) : null}
    </div>
  );
}
export default connect()(MorePopover);
