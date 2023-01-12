import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';

window.renderHeader = (containerId, history) => {
  const root = ReactDOM.createRoot(document.getElementById(containerId));
  return root.render(
    <App history={history} />
  );
};

window.unmountHeader = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('Header-container')) {
  const rootElement = document.getElementById('root');
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <App />
  );
}
