import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

const Hats = (props) => {
  console.log(props);
  return (
    <div>
      <h1>HATS PAGE {props.match.params.hatsId}</h1>
      <button onClick={() => props.history.push("/")}>click</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats/:hatsId" component={Hats} />
      </Switch>
    </div>
  );
};

export default App;
