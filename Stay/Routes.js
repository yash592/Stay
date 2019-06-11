import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import CreateListing from "./src/components/screens/CreateListing/CreateListing";
import Listings from "./src/components/screens/Listings/Listings";

const Routes = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="main" hideNavBar>
          <Scene
            onRight={() => Actions.createlisting()}
            key="listings"
            component={Listings}
            initial
          />
          <Scene
            key="createlisting"
            component={CreateListing}
            title="Create Employee"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default Routes;
