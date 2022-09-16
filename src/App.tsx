import React from 'react';
import WithSubnavigation from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Current from './pages/Current';
import About from './pages/About';
import Converter from './pages/Converter';
import CurrencyChange from './pages/CurrencyChange'
import { useEffect } from 'react'
import { fetchData } from './slices/dataSlice';
import { useAppDispatch } from './hooks/hook'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <Router>
      <WithSubnavigation />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/current" element={<Current />} />
        <Route path="/converter" element={<Converter />} />
        <Route path="/current/:id" element={<CurrencyChange />} />
      </Routes>
    </Router>
  );
}

export default App;
