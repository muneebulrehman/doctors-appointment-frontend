import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchDoctors } from './doctorSlice';
import './doctors.css';

const AllDoctorView = () => {
  const doctors = useSelector((state) => state.doctor.doctors);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoctors());
  }, []);

  return (
    <div className="allDoctors-container">
      <h2 className="allDoctors-heading">All available DOCTORS</h2>
      <p className="allDoctors-script">Select a doctor</p>
      <ul className="allDoctors-list">
        {doctors.map((doctor) => (
          <li key={doctor.id} className="allDoctors-each-doctor">
            <Link to={`/doctors/${doctor.id}`}>
              <img
                src={doctor.photo}
                alt="photo"
                className="allDoctors-doctor-photo"
              />
              <h4>{doctor.name}</h4>
              <p className="allDoctors-doctor-speciality">
                {doctor.speciality}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllDoctorView;
