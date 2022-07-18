import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { fetchSingleDoctor } from './doctorSlice';
import './doctors.css';

const DoctorView = () => {
  const doctor = useSelector((state) => state.doctor.doctor);
  const dispatch = useDispatch();
  const { doctorId } = useParams();
  useEffect(() => {
    dispatch(fetchSingleDoctor(doctorId));
  }, []);
  return (
    <div className="doctorView-container">
      <div className="doctorView-image-container">
        <img
          src={doctor.photo}
          alt={doctor.name}
          className="doctorView-image"
        />
      </div>
      <div className="doctorView-info">
        <h4>{doctor.name}</h4>
        <p>{doctor.speciality}</p>
        <p>Price: ${doctor.price}</p>
        <h6 style={{ textAlign: 'left', fontWeight: 'bold' }}>Bio</h6>
        <p style={{ textAlign: 'left' }}>{doctor.bio}</p>
        <Link to="/new_appointment" className="doctorView-reserve">
          Book appointment
        </Link>
      </div>
    </div>
  );
};

export default DoctorView;
