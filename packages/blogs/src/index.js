import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

window.renderBlogs = (containerId, history) => {
  const root = ReactDOM.createRoot(document.getElementById(containerId));
  return root.render(
    <App history={history} />
  );
};

window.unmountBlogs = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('Blogs-container')) {
  const rootElement = document.getElementById('root');
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <App />
  );
}