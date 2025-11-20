import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Introduction from "./Introduction.jsx";
import Contract from "./Contract.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/contract" element={<Contract />} />
    </Routes>
  </Router>
);
