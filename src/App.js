import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar/navBar';
import Home from './components/home/Home';
import Guide from './components/Guide';
import Filtre from './components/urbexCard/Filtre';
import EnSavoirPlus from './components/EnSavoirPlus/EnSavoirPlus';


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <Router>
      <NavBar setSelectedCategory={setSelectedCategory} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/filtre/:name" element={<Filtre />} />
        <Route path="/EnSavoirPlus/:id" element={<EnSavoirPlus />} />
      </Routes>
    </Router>
  );
}

export default App;
