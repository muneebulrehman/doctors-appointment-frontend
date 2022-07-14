import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>React app</h1>
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
