import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header, Footer } from './components';
import { Landing, Confirmation, Hotel, Admin } from './containers';

class TrivagoVenue extends React.Component {
  render() {
    return (
      <div className="trivago-venue">
        <Router>
          <React.Fragment>
            <Helmet>
              <title>Trivago Venue Hotel</title>
            </Helmet>
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
