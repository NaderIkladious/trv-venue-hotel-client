import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import AdminHotels from './hotels';
import NewHotel from './newHotel';

class Admin extends React.Component {
  render() {
    return (
      <div className="trivago-admin">
        <div className="wrapper">
          <h2>Admin Panel</h2>
          <div className="d-flex">
            <ul className="admin-navigation">
              <li>
                <NavLink to="/admin" exact activeClassName="selected">
                  Manage Hotels
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/new" activeClassName="selected">
                  New Hotel
                </NavLink>
              </li>
            </ul>
            <div className="admin-view">
              <Route path="/admin" component={AdminHotels} />
              <Route path="/admin/new" component={NewHotel} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
