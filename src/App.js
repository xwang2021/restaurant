import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SideBar from "./components/SideBar";
import TablePage from "./components/tables/TablePage";
import AccountBalanceOutlinedIcon from "@material-ui/icons/AccountBalanceOutlined";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import PaymentOutlinedIcon from "@material-ui/icons/PaymentOutlined";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import RestaurantOutlinedIcon from "@material-ui/icons/RestaurantOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import SupervisorAccountOutlinedIcon from "@material-ui/icons/SupervisorAccountOutlined";
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";

export default function App() {
  const items = [
    { tab: "Dashboard", url: "/", icon: DashboardOutlinedIcon },
    { tab: "Tables", url: "/tables", icon: RestaurantOutlinedIcon },
    { tab: "Orders", url: "/orders", icon: ListAltOutlinedIcon },
    { tab: "Menu", url: "/menu", icon: MenuBookOutlinedIcon },
    { tab: "Profile", url: "/profile", icon: AccountBoxOutlinedIcon },
    { tab: "Hours", url: "/hours", icon: WatchLaterOutlinedIcon },
    { tab: "Reviews", url: "/reviews", icon: RateReviewOutlinedIcon },
    {
      tab: "Bank Account",
      url: "/bankAccount",
      icon: AccountBalanceOutlinedIcon,
    },
    {
      tab: "Transaction",
      url: "/transaction",
      icon: MonetizationOnOutlinedIcon,
    },
    { tab: "Transfers", url: "/transfers", icon: PaymentOutlinedIcon },
    { tab: "Staff", url: "/staff", icon: SupervisorAccountOutlinedIcon },
    { tab: "Settings", url: "/settings", icon: SettingsOutlinedIcon },
  ];

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="container">
        <SideBar items={items} />
        <Switch>
          <Route exact path="/tables">
            <TablePage />
          </Route>
          <Route exact path="/orders">
            <EmptyPage />
          </Route>
          <Route exact path="/menu">
            <EmptyPage />
          </Route>
          <Route exact path="/profile">
            <EmptyPage />
          </Route>
          <Route exact path="/hours">
            <EmptyPage />
          </Route>
          <Route exact path="/reviews">
            <EmptyPage />
          </Route>
          <Route exact path="/bankAccount">
            <EmptyPage />
          </Route>
          <Route exact path="/transaction">
            <EmptyPage />
          </Route>
          <Route exact path="/transfer">
            <EmptyPage />
          </Route>
          <Route exact path="/stuff">
            <EmptyPage />
          </Route>
          <Route exact path="/settings">
            <EmptyPage />
          </Route>
          <Route exact path="/">
            <TablePage />
          </Route>
          <Route component={EmptyPage} />
        </Switch>
      </div>
    </Router>
  );
}

function EmptyPage() {
  return <div />;
}
