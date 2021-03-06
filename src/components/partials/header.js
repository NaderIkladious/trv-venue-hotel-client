import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../logo.png';
import './header.css';

/**
 * The header
 * @returns {string} Header HTML component
 */
export const Header = () => (
  <header className="header">
    <div className="wrapper">
      <Link to="/" title="Trivago Venue Hotel" className="logo">
        <img src={logo} alt="Trivago Venue Hotel Logo" height="70px" />
      </Link>
      <div className="user">
        <span>John Doe</span>
        <div className="avatar">
          <img src="/images/avatar.png" alt="User Avatar" />
        </div>
      </div>
    </div>
  </header>
);
