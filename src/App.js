import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import DoctorView from './features/doctor/DoctorView';
import AppointmentsIndex from './features/appointment/AppointmentsIndex';
import NewAppointment from './features/appointment/NewAppointment';
import NavBar from './features/layout/Navbar';
import './services/fortawesome';

function App() {
  return (
    <BrowserRouter>
      <div className="App d-flex bg-primary min-vh-100">
        <NavBar />
        <Routes>
          <Route path="/doctors" element={<DoctorView />} />
          <Route path="/doctors/:doctorId" element={<DoctorView />} />
          <Route path="/new_appointment" element={<NewAppointment />} />
          <Route path="/appointments" element={<AppointmentsIndex />} />
          <Route path="/*" element={<Navigate replace to="/doctors" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
