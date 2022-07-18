import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import UserView from './features/user/UserView';

function App() {
  return (
    <BrowserRouter>
      <div className="App d-flex bg-primary min-vh-100"></div>
    </BrowserRouter>
  );
}

export default App;
