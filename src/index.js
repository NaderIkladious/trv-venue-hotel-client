import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import TrivagoVenue from './TrivagoVenue';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TrivagoVenue />, document.getElementById('root'));
registerServiceWorker();
