import React from 'react';

export class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="wrapper">
          <div className="footer-content">
            <p>
              Made with{' '}
              <span role="img" aria-label="heart">
                ❤️
              </span>by <a href="https://github.com/NaderIkladious">Nader Ikladious</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
