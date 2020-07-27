import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "./SideBar";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="container">
        <SideBar />

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
  return <h2>tables</h2>;
}
