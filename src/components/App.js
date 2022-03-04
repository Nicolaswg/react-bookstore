import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Navbar from './Navbar';
import BookStore from './BookStore';
import Categories from './Categories';

const App = () => (
  <>
    <Router>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<BookStore />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  </>
);

export default App;
