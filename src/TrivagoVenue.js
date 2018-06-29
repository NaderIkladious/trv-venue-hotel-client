import React from 'react';
import { Header, Footer } from './components';
import Landing from './containers/landing';
import Confirmation from './containers/confirmation';
import Hotel from './containers/hotel';
import Admin from './containers/admin/index';
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
              <Route path="/admin" component={Admin} />
            </div>
            <Footer />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default TrivagoVenue;
