import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/auth/SignInPage";

function App() {
  return (
    <>
      <Route component={HomePage} path="/" exact />
      <Route component={SignInPage} path="/signin" exact />
    </>
  );
}

export default App;
