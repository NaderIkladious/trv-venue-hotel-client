import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

export default class Header extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="wrapper">
          <div className="footer-content">
            <p>
              Made with ❤️ by <a href="https://github.com/NaderIkladious">Nader Ikladious</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
