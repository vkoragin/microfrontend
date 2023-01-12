import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Blogs from './Blogs';
import BlogDetail from './BlogDetail';
import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Blogs />} />
        <Route exact path="/blogdetail/:blogid" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;