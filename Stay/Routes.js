import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import CreateListing from "./src/components/screens/CreateListing/CreateListing";
import Listings from "./src/components/screens/Listings/Listings";

const Routes = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="main" hideNavBar>
          <Scene key="listings" component={Listings} initial />
          <Scene key="createlisting" component={CreateListing} />
        </Scene>
      </Scene>
    </Router>
  );
};

export default Routes;
