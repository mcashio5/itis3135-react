import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Layout from './Layout.jsx';
import App from './App.jsx';
import Introduction from './Introduction.jsx';
import Contract from './Contract.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="contract" element={<Contract />} />
          <Route path="introduction" element={<Introduction />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
