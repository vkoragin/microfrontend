import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { createBrowserHistory } from "history";
import MicroFrontend from "./MicroFrontend";

import "./App.css";

const defaultHistory = createBrowserHistory();

const {
  REACT_APP_HEADER_HOST: headerHost,
  REACT_APP_BLOGS_HOST: blogHost,
} = process.env;

const Header = ({ history }) => {
  return <MicroFrontend history={history} host={headerHost} name="Header" />;
}

const Blogs = ({ history }) => {
  return <MicroFrontend history={history} host={blogHost} name="Blogs" />;
}

const BlogDetail = ({ history }) => {
  return (
    <div>
      <MicroFrontend history={history} host={blogHost} name="Blogs" />
    </div>
  );
}


const Home = ({ history }) => {
  return (
    <div className="container">
      <Header />
      <Blogs />
    </div>
  );
}

function App() {
  return (
    <Router>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogdetail/:blogid" element={<BlogDetail />} />
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;