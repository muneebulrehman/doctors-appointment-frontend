import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
// import DoctorView from './features/doctor/DoctorView';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>React app</h1>
        {/* <DoctorView /> */}
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
