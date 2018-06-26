import React from 'react';
import Header from './components/header';
import Landing from './components/landing';
import Confirmation from './components/confirmation';
import Hotel from './components/hotel';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class TrivagoVenue extends React.Component {
  render() {
    return (
      <div className="trivago-venue">
        <Router>
          <React.Fragment>
            <Header />
            <div className="main">
              <Route exact path="/" component={Landing} />
              <Route path="/hotels/:id" component={Hotel} />
              <Route path="/confirmation/:id" component={Confirmation} />
            </div>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default TrivagoVenue;
