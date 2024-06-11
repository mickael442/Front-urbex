// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar/navBar';
import Home from './components/home/Home';
import Guide from './components/Guide/Guide';
import Filtre from './components/Filtre/Filtre';
import EnSavoirPlus from './components/EnSavoirPlus/EnSavoirPlus';
import Connection from './components/Connection/Connection';
import Publication from './components/Publication/Publication';
import ContactForm from './components/Contact/ContactForm';
import PremièreConnection from './components/Connection/PremièreConnection';
import MentionLegale from './components/MentionLegale/MentionLegale';


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <Router>
      <NavBar setSelectedCategory={setSelectedCategory} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/Filtre/:id" element={<Filtre />} />
        <Route path="/EnSavoirPlus/:UrbexId" element={<EnSavoirPlus />} />
        <Route path="/Connection" element={<Connection />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/PremièreConnection" element={<PremièreConnection />} />
        <Route path="/MentionLegale" element={<MentionLegale />} />
      </Routes>
    </Router>
  );
}

export default App;
