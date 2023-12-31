import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import '../node_modules/react-bootstrap/dist/react-bootstrap'
import '../node_modules/react-bootstrap/dist/react-bootstrap.min'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import App from './App';
import { Provider } from 'react-redux';
// import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode >
);

