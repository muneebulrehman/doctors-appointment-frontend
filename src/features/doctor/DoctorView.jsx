import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchDoctors, fetchSingleDoctor } from './doctorSlice';

const DoctorView = () => {
  const doctors = useSelector((state) => state.doctor.doctors);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoctors());
    dispatch(fetchSingleDoctor(3));
  }, []);

  return (
    <div>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>{doctor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorView;
