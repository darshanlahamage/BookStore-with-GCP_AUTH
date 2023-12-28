import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Components/Main';
import Signup from './Components/Signup';
import './Components/style.css';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="mainscreen" element={<Main />} />
    </Routes>
  </div>
  );
}
export default App;
