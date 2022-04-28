import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Moon from '../src/pages/Menues/Moon/src/moon_Menu';
import Resturants from '../src/components/availableResturants';
import Arcaffe from '../src/pages/Menues/Arcaffe/src/arcaffe_Menu';
import Giraffe from '../src/pages/Menues/Giraffe/src/giraffe_Menu';
import Gluteria from '../src/pages/Menues/Gluteria/src/gluteria_Menu';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Resturants />} />
        <Route path="/moon" element={<Moon />} />
        <Route path="/arcaffe" element={<Arcaffe />} />
        <Route path="/giraffe" element={<Giraffe />} />
        <Route path="/gluteria" element={<Gluteria />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//remove browserrouter so it will work (without moon)
