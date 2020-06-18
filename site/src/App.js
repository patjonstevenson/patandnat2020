import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

// Components
import Subpage from "./components/Subpage";

// Pages
import EventDetails from "./pages/EventDetails";
import Home from "./pages/Home";
import Ceremony from "./pages/Ceremony";
import WeddingParty from "./pages/WeddingParty";
import Photos from "./pages/Photos";
import OurStory from "./pages/OurStory";
import Registry from "./pages/Registry";
import COVID from "./pages/COVID";

function App() {
  return (
    <div className="App">
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/" render={() => <Subpage Page={COVID} />} />
      <Route
        path="/eventdetails"
        render={() => <Subpage Page={EventDetails} />}
      />
      <Route path="/ceremony" render={() => <Subpage Page={Ceremony} />} />
      <Route
        path="/weddingparty"
        render={() => <Subpage Page={WeddingParty} />}
      />
      <Route path="/photos" render={() => <Subpage Page={Photos} />} />
      <Route path="/ourstory" render={() => <Subpage Page={OurStory} />} />
      <Route path="/registry" render={() => <Subpage Page={Registry} />} />
    </div>
  );
}

export default App;
