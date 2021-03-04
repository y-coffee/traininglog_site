import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import DefaultScreen from './DefaultScreen';
import Supplement from './Supplement';
import TrainingMenu from './TrainingMenu';
import TremenuApp from './TremenuApp';
import Tre10x3 from './10x3';
import TrePramid from './Piramid';
import Tre531 from './531';
import ContactScreen from './ContactScreen';
import API from './API';
import ScrollToTop from './ScrollToTop';

export default function RouterScreen() {
  return (
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={DefaultScreen} />
          <Route exact path="/supplement" component={Supplement} />
          <Route exact path="/tremenuApp" component={TremenuApp} />
          <Route exact path="/trainingMenu" component={TrainingMenu} />
          <Route exact path="/10x3method" component={Tre10x3} />
          <Route exact path="/piramidmethod" component={TrePramid} />
          <Route exact path="/531program" component={Tre531} />
          <Route exact path="/contact" component={ContactScreen} />
          <Route exact path="/search" component={API} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}
