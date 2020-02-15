import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ItemProvider from './components/itemsProvider'
ReactDOM.render(<ItemProvider><App /></ItemProvider>, document.getElementById('root'));