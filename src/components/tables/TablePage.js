import "./TablePage.css";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import PickUp from "./PickUp";
import React from "react";
import Tab from "@material-ui/core/Tab";
import DineIn from "./DineIn";
import Tabs from "@material-ui/core/Tabs";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1f504c",
    },
    secondary: {
      main: "#4c7c78",
    },
  },
});

// TablePage contains a menu bar on the top. Users can swtich between DineIn and PickUp.

export default function TablePage() {
  /* The parameter in useState is the inital state. UseState will return
   the current state and a function (setValue) that update the state */
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <div className="pageStyle">
        <div className="tabsContainer">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab className="tabStyle" label="Dine In" />
            <Tab className="tabStyle" label="Pick Up" />
          </Tabs>
        </div>
        <div className="dineInContainer">{value === 0 && <DineIn />}</div>
        <div className="pickUpContainer">{value === 1 && <PickUp />}</div>
      </div>
    </MuiThemeProvider>
  );
}
