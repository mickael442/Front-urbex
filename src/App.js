import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './components/home';


function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route element={<Home/> } path="/" exact />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
