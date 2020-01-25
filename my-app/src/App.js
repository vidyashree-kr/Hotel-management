import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LandingPage from './components/LandingComponent/LandingPage'
import DetailPage from './components/DetailComponent/Detailpage'

function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <LandingPage />
          </Route>
          <Route path="/details">
            <DetailPage />
          </Route>
          <Route path="/bookings">

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;