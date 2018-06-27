import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="wrapper">
          <Link to="/" title="Trivago Venue Hotel">
            <img src={logo} alt="Trivago Venue Hotel Logo" height="70px" />
          </Link>
        </div>
      </header>
    );
  }
}
