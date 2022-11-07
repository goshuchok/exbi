import React from 'react';
import { Order } from './pages/Order';
import './App.scss';
// import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';

import './scss/app.scss';

import Blank from './pages/Blank';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Blank />} />
          <Route path="/order" element={<Order />} />
          <Route path="/balances" element={<Blank />} />
          <Route path="/withdrawal" element={<Blank />} />
          <Route path="/settings" element={<Blank />} />
          <Route path="/support" element={<Blank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
