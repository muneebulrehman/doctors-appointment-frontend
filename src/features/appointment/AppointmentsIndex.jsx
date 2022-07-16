import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import {
//   Select,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   TextField,
//   Button,
// } from '@mui/material';
// import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { fetchDoctors } from '../doctor/doctorSlice';
// import helpers from '../../helpers';
// import routes from '../../routes';
import { useGetAppointmentsQuery } from '../../services/api';
// import { setDoctorId, setDate, setPending } from './appointmentSlice';
import { setMobileMode, setLightMode } from '../layout/layoutSlice';
import config from '../../config';
import styles from './AppointmentsIndex.module.scss';

export default function AppointmentsIndex() {
  const { slidePointer } = useSelector((state) => state.appointment);
  const dispatch = useDispatch();
  const { data } = useGetAppointmentsQuery();
  console.log(data);
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

  return (
    <section className="w-100 bg-white">
      <main className="z-index-1000 mt-5">
        <h2 className="fw-bolder mb-1">APPOINTMENTS</h2>
        <p className="text-secondary fw-bold">
          Your existing appointments are listed below
        </p>
        <p className="text-secondary pb-2 mb-4">----------------------</p>
        <div className="d-flex justify-content-center">
          <div className="row row-cols-md-3 col-11 gx-5">
            {data &&
              data.map((appo, idx) => {
                if (idx >= slidePointer + 3 || idx < slidePointer) return null;
                return (
                  <div
                    key={`appointment-${appo.id}`}
                    className="d-flex flex-column"
                  >
                    <img
                      className={`${styles.doctorImage} mb-4`}
                      src={appo.doctor.photo}
                      alt="doctor"
                    />
                    <div className="d-flex flex-column justify-content-between flex-grow-1">
                      <div>
                        <h4>{appo.doctor.name}</h4>
                      </div>
                      <div>
                        <p className="mb-1">{appo.doctor.speciality}</p>
                        <p className={`text-secondary mb-1 ${styles.grayDots}`}>
                          ----------------------
                        </p>
                        <p>{new Date(appo.date).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </main>
    </section>
  );
}
