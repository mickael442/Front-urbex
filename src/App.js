import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar/navBar';
import Home from './components/home/Home';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <Router>
      <NavBar setSelectedCategory={setSelectedCategory} />
      <Routes>
        <Route path="/" element={<Home selectedCategory={selectedCategory} />} />
      </Routes>
    </Router>
  );
}

export default App;
