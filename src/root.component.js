import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import PrimaryNav from "./primary-nav/primary-nav.component";

export default function Root(props) {
  return (
    <BrowserRouter basename="/">
      <PrimaryNav />
      <Route exact path="/">
        <Redirect to="/clients" />
      </Route>
    </BrowserRouter>
  );
}
