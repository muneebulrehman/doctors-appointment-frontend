import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
import { setLightMode } from '../layout/layoutSlice';
// import styles from './AppointmentsIndex.module.scss';

export default function AppointmentsIndex() {
  const dispatch = useDispatch();
  const { data } = useGetAppointmentsQuery();
  console.log(data);
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchDoctors());
    dispatch(setLightMode(true));
    return () => dispatch(setLightMode(false));
  }, []);

  return (
    <section className="w-100 bg-white">
      <main className="z-index-1000 mt-5">
        {data && data[0] && (
          <div className="row w-100">
            <div className="col-md-7">foto</div>
            <div className="col-md-5">
              <div className="row">
                <span className="col-4">Doctor:</span>
                <span className="col-8">{data[0].doctor_id}</span>
              </div>
            </div>
          </div>
        )}
      </main>
    </section>
  );
}
