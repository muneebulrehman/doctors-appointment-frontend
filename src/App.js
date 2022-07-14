import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import DoctorView from './features/doctor/DoctorView';
import AppointmentShow from './features/appointment/AppointmentShow';
import AppointmentsIndex from './features/appointment/AppointmentsIndex';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>React app</h1>
        <Routes>
          <Route path="/" element={<DoctorView />}>
            <Route path="appointments" element={<AppointmentsIndex />}>
              <Route path=":appointmentId" element={<AppointmentShow />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
