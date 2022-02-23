import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Navbar from './Navbar';
import BookStore from './BookStore';
import Categories from './Categories';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookStore />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  </>
);

export default App;
