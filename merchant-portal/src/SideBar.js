import React from "react";
import "./SideBar.css";
import { useHistory } from "react-router-dom";

export default function SideBar() {
  const history = useHistory();

  const handleOnclick = (url) => {
    history.push(url);
  };

  const tabs = {
    Dashboard: "/",
    Tables: "/tables",
    Orders: "/orders",
    Menu: "/menu",
    Profile: "/profile",
    Hours: "/hours",
    Reviews: "/reviews",
    "Bank Account": "/bankAccount",
    Transaction: "/transaction",
    Transfers: "/transfers",
    Staff: "/staff",
    Settings: "/settings",
  };

  return (
    <nav>
      <ul className="sideList">
        {Object.entries(tabs).map(([tab, url]) => (
          <li>
            <div>
              <button onClick={() => handleOnclick(url)}>{tab}</button>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
