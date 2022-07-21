import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { fetchDoctors } from './doctorSlice';
import './doctors.css';
import Loader from '../loader/Loader';

const AllDoctorView = () => {
  const doctors = useSelector((state) => state.doctor.doctors);
  const loading = useSelector((state) => state.doctor.loading);

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoctors());
  }, []);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth + carousel.current.offsetWidth);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="allDoctors-container">
      <h2 className="allDoctors-heading">All available DOCTORS</h2>
      <p className="allDoctors-script">Select a doctor</p>
      {/* <ul className="allDoctors-list">
        {doctors.map((doctor) => (
          <li key={doctor.id} className="allDoctors-each-doctor">
            <Link to={`/doctors/${doctor.id}`}>
              <img
                src={doctor.photo}
                alt={doctor.name}
                className="allDoctors-doctor-photo"
              />
              <h4>{doctor.name}</h4>
              <p className="allDoctors-doctor-speciality">
                {doctor.speciality}
              </p>
            </Link>
          </li>
        ))}
      </ul> */}
      <motion.div ref={carousel} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {doctors.map((doctor) => {
            return (
              <motion.div
                key={doctor.id}
                className="allDoctors-each-doctor item"
              >
                <Link to={`/doctors/${doctor.id}`}>
                  <img
                    src={doctor.photo}
                    alt={doctor.name}
                    className="allDoctors-doctor-photo"
                  />
                  <h4>{doctor.name}</h4>
                  <p className="allDoctors-doctor-speciality">
                    {doctor.speciality}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AllDoctorView;
