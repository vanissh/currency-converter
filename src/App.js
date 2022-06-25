import './App.scss';
import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './components/navBar/NavBar';
import Home from './pages/home/Home';
import Converter from './pages/converter/Converter';
import Current from './pages/current/Current';

function App() {
 
  const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((result) => {
        setData(Object.entries(result.Valute))
      })

  }, [])

  return (
      <Router>
        <NavBar/>
        <div className="container">
          <Routes>
            <Route path={'/'} exact element={<Home/>}/>
            <Route path={'/converter'} exact element={<Converter data={data}/>}/>
            <Route path={'/current_course'} element={<Current data={data}/>}/>
          </Routes>          
        </div>
      </Router>
  );
}

export default App;
