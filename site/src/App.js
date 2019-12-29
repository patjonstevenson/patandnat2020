import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

// Components
import Subpage from "./components/Subpage";
import Header from "./components/Header";
import EventDetails from "./pages/EventDetails";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route
        path="/EventDetails"
        render={() => <Subpage Page={EventDetails} />}
      />
    </div>
  );
}

export default App;
