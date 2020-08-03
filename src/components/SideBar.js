import React from "react";
import "./SideBar.css";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

// render the left navigation side bar
export default function SideBar({ items }) {
  const history = useHistory();

  const handleOnclick = (url) => {
    history.push(url);
  };

  return (
    <div className="sideBarContainer">
      <ul className="sideList">
        {items.map((item, key) => (
          <li key={key}>
            <div>
              <Button
                className="buttonStyle"
                startIcon={<item.icon />}
                onClick={() => handleOnclick(item.url)}
              >
                {item.tab}
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
