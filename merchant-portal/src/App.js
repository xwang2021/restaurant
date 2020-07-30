import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SideBar from "./components/SideBar";
import TablePage from "./components/TablePage";
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
    <Router>
      <div className="container">
        <SideBar items={items} />
        <Switch>
          <Route path="/tables">
            <Tables />
          </Route>
          <Route path="/orders">
            <EmptyPage />
          </Route>
          <Route path="/menu">
            <EmptyPage />
          </Route>
          <Route path="/profile">
            <EmptyPage />
          </Route>
          <Route path="/hours">
            <EmptyPage />
          </Route>
          <Route path="/reviews">
            <EmptyPage />
          </Route>
          <Route path="/bankAccount">
            <EmptyPage />
          </Route>
          <Route path="/transaction">
            <EmptyPage />
          </Route>
          <Route path="/transfer">
            <EmptyPage />
          </Route>
          <Route path="/stuff">
            <EmptyPage />
          </Route>
          <Route path="/settings">
            <EmptyPage />
          </Route>
          <Route path="/">
            <EmptyPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function EmptyPage() {
  return <div />;
}

function Tables() {
  return <TablePage />;
}
