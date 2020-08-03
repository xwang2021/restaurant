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
        {/* call each element in the array then the returned value is added to
        new_array. Key should be provided to help React identify each item*/}
        {items.map((item, key) => (
          // key should be specified inside the array
          <li key={key}>
            <div>
              <Button
                className="buttonStyle"
                startIcon={<item.icon />}
                // use an arrow function to wrap around an event handler and pass parameters
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
