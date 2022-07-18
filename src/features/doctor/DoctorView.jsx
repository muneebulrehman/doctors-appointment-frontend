import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchSingleDoctor } from './doctorSlice';

const DoctorView = () => {
  const doctor = useSelector((state) => state.doctor.doctor);
  const dispatch = useDispatch();
  const { doctorId } = useParams();
  useEffect(() => {
    dispatch(fetchSingleDoctor(doctorId));
  }, []);
  return (
    <div className="doctorView-container">
      <h2>{doctor.name}</h2>
    </div>
  );
};

export default DoctorView;
