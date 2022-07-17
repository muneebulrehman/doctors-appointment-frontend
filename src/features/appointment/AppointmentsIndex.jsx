import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { useGetAppointmentsQuery } from '../../services/api';
import { setMobileMode, setLightMode } from '../layout/layoutSlice';
import { setSlideAmountToShow, setSlidePointer } from './appointmentSlice';
import config from '../../config';
import NavButton from '../layout/NavButton';
import styles from './AppointmentsIndex.module.scss';

export default function AppointmentsIndex() {
  const { slidePointer, slideAmountToShow } = useSelector(
    (state) => state.appointment
  );
  const { mobileMode } = useSelector((state) => state.layout);
  const dispatch = useDispatch();
  const { data: appointmentData, error } = useGetAppointmentsQuery();
  console.log(appointmentData);
  // const dispatch = useDispatch();

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth >= config.mobileBreakPoint) {
        dispatch(setMobileMode(false));
      } else {
        dispatch(setMobileMode(true));
      }
    };
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
      dispatch(setMobileMode(true));
    };
  }, []);

  useEffect(() => {
    // dispatch(fetchDoctors());
    dispatch(setLightMode(true));
    return () => dispatch(setLightMode(false));
  }, []);

  useEffect(() => {
    if (mobileMode && slideAmountToShow !== 1) {
      dispatch(setSlideAmountToShow(1));
    } else if (slideAmountToShow !== 3) {
      dispatch(setSlideAmountToShow(3));
    }
  }, [mobileMode]);

  const prevSlide = () => {
    const nextPointer = Math.max(1, slidePointer - 1);
    dispatch(setSlidePointer(nextPointer));
  };

  const nextSlide = () => {
    const nextPointer = Math.min(appointmentData.length - 3, slidePointer + 1);
    dispatch(setSlidePointer(nextPointer));
  };

  return (
    <section className="w-100 bg-white d-flex align-items-center">
      <NavButton reverseColors onClick={prevSlide} />
      <main className="z-index-1000 mt-1 w-100">
        <h2 className="fw-bolder mb-1">APPOINTMENTS</h2>
        <p className="text-info fw-bold">
          Your existing appointments are listed below
        </p>
        <p className="text-secondary pb-2 mb-4">----------------------</p>
        <div className="d-flex justify-content-center">
          <div className="row row-cols-md-3 col-10 gx-5">
            {error && error.appointmentData && (
              <p className="w-100 text-danger">{error.appointmentData.error}</p>
            )}
            {appointmentData &&
              appointmentData.map((appo, idx) => {
                if (
                  idx >= slidePointer + slideAmountToShow ||
                  idx < slidePointer
                )
                  return null;
                return (
                  <div
                    key={`appointment-${appo.id}`}
                    className="d-flex flex-column"
                  >
                    <Link to={`/doctors/${appo.doctor_id}`}>
                      <img
                        className={`${styles.doctorImage} mb-4`}
                        src={appo.doctor.photo}
                        alt="doctor"
                      />
                    </Link>
                    <div className="d-flex flex-column justify-content-between flex-grow-1">
                      <div className="mb-2">
                        <Link to={`/doctors/${appo.doctor_id}`}>
                          <h4 className="fs-5">{appo.doctor.name}</h4>
                        </Link>
                      </div>
                      <div>
                        <p className="mb-1 text-info fw-bold">
                          {appo.doctor.speciality}
                        </p>
                        <p className={`text-secondary mb-1 ${styles.grayDots}`}>
                          ----------------------
                        </p>
                        <div className="text-info fw-bolder">
                          {new Date(appo.date)
                            .toLocaleString()
                            .split(',')
                            .map((datePart) => (
                              <p className="mb-1" key={`date-${datePart}`}>
                                {datePart}
                              </p>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </main>
      <NavButton reverseXAxis onClick={nextSlide} />
    </section>
  );
}
