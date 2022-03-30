import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return <Route component={Home} path="/" exact />;
}

export default App;
