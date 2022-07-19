import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import AllDoctorView from './features/doctor/AllDoctorView';
import DoctorView from './features/doctor/DoctorView';
import AppointmentsIndex from './features/appointment/AppointmentsIndex';
import NewAppointment from './features/appointment/NewAppointment';
import NavBar from './features/layout/Navbar';
import './services/fortawesome';
import routesApp from './routesApp';

function App() {
  return (
    <div className="App d-flex bg-primary min-vh-100">
      <NavBar />
      <Routes>
        <Route path={routesApp.DOCTORS} element={<AllDoctorView />} />
        <Route path={routesApp.DOCTOR} element={<DoctorView />} />
        <Route path={routesApp.NEW_APPOINTMENT} element={<NewAppointment />} />
        <Route path={routesApp.APPOINTMENTS} element={<AppointmentsIndex />} />
        <Route
          path="/*"
          element={<Navigate replace to={routesApp.DOCTORS} />}
        />
      </Routes>
    </div>
  );
}

export default App;
