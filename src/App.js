import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCaretLeft,
  faBriefcaseMedical,
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

import './App.css';
import DoctorView from './features/doctor/DoctorView';
import AppointmentShow from './features/appointment/AppointmentShow';
import AppointmentsIndex from './features/appointment/AppointmentsIndex';
import NavBar from './features/layout/Navbar';

library.add(faCaretLeft, faTwitter, faFacebookF, faBriefcaseMedical);

function App() {
  return (
    <BrowserRouter>
      <div className="App d-flex bg-primary min-vh-100">
        <NavBar />
        <Routes>
          <Route path="/" element={<DoctorView />} />
          <Route path="/appointments" element={<AppointmentsIndex />} />
          <Route
            path="/appointments/:appointmentId"
            element={<AppointmentShow />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
