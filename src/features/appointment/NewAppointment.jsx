import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Button,
} from '@mui/material';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { fetchDoctors } from '../doctor/doctorSlice';
import { setDoctorId, setDate, setPending } from './appointmentSlice';
import { useCreateAppointmentMutation } from '../../services/api';
import styles from './AppointmentsIndex.module.scss';

export default function NewAppointment() {
  const { doctors } = useSelector((state) => state.doctor);
  const { doctorId, date, pending } = useSelector((state) => state.appointment);
  const [createAppointment] = useCreateAppointmentMutation();
  const [user, setUser] = useState(undefined);
  const [userId, setUserId] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoctors());
  }, []);

  useEffect(() => {
    if (localStorage.getItem('user_id')) {
      setUserId(+localStorage.getItem('user_id'));
    }
  }, []);

  useEffect(() => {
    let c2;
    try {
      const c1 = localStorage.getItem('user_name');
      if (c1) c2 = c1;
    } catch (e) {
      // console.log(e)
    }
    setUser(c2);
  }, []);

  const formSubmitHandler = async () => {
    dispatch(setPending(true));
    const data = { doctor_id: doctorId, date, user_id: userId };
    createAppointment(data);
    dispatch(setPending(false));
    dispatch(setDate(null));
    dispatch(setDoctorId(''));
  };

  function dateChangeHandler(newDate) {
    try {
      dispatch(setDate(newDate.toISOString()));
      // eslint-disable-next-line no-empty
    } catch {}
  }

  return (
    <section className="w-100 d-flex align-items-center">
      <main className="z-index-1000 d-flex flex-column flex-grow-1 text-white align-items-center">
        <span className="px-5 border-bottom border-1 border-white mb-3">
          <h1 className="fs-5">BOOK AN APPOINTMENT WITH YOUR DOCTOR</h1>
        </span>
        <p className="mb-4">There are a lot of doctors. Choose one.</p>
        {user ? (
          <div className="row col-12 col-md-8 col-lg-6">
            <div>
              <div className="row row-cols-md-2 gx-3 gy-4">
                <span>
                  <FormControl fullWidth>
                    <InputLabel
                      id="demo-simple-select-label"
                      sx={{
                        color: 'white',
                        '&.MuiInputLabel-root': {
                          paddingLeft: '1rem',
                          color: 'white',
                        },
                      }}
                    >
                      Doctor
                    </InputLabel>
                    <Select
                      // IconComponent={() => (
                      //   <FontAwesomeIcon icon="fa-sort-down" className="me-4" />
                      // )}
                      onChange={(e) => dispatch(setDoctorId(e.target.value))}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={doctorId}
                      label="Doctor"
                      sx={{
                        borderRadius: '12rem',
                        backgroundColor: 'var(--doctors-primary)',
                        color: 'white',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'white !important',
                        },
                        '& .MuiSvgIcon-root': {
                          '&.MuiSelect-icon': {
                            color: 'white',
                            width: 'auto',
                            height: '2.3rem',
                            right: '1rem',
                            top: '0.5rem',
                          },
                        },
                        // width: '16rem',
                      }}
                      // onChange={}
                    >
                      {doctors.map((doctor) => (
                        <MenuItem key={`doctor-${doctor.id}`} value={doctor.id}>
                          {doctor.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </span>
                <span>
                  <FormControl fullWidth>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DateTimePicker
                        disablePast
                        // onError={(e, v) => errorHandler(e, v)}
                        minutesStep={30}
                        maxDate={new Date().setMonth(
                          (new Date().getMonth() + 1) % 12
                        )}
                        disableIgnoringDatePartForTimeValidation
                        // minDate={new Date(new Date(Date.now()).setHours(10))}
                        minTime={new Date(new Date(date).setHours(9))}
                        maxTime={new Date(new Date(date).setHours(19))}
                        renderInput={(val) => (
                          <TextField
                            // eslint-disable-next-line react/jsx-props-no-spreading
                            {...val}
                            sx={{
                              color: 'white',
                              '& .MuiInputBase-input': {
                                '&.MuiOutlinedInput-input': {
                                  color: 'white',
                                  paddingLeft: '1.6rem',
                                },
                              },
                            }}
                          />
                        )}
                        label="Date & Time"
                        value={date}
                        onChange={(newDate) => dateChangeHandler(newDate)}
                      />
                    </LocalizationProvider>
                  </FormControl>
                </span>
              </div>
            </div>
            <div className="text-center mt-4">
              <Button
                disabled={pending}
                onClick={formSubmitHandler}
                id="btn-appointment-submit"
                variant="contained"
                className="col-12 col-md-6"
                sx={{
                  backgroundColor: 'white',
                  color: 'var(--doctors-primary)',
                  borderRadius: '12rem',
                  padding: '16.5px 0',
                  '&:hover': {
                    backgroundColor: 'var(--doctors-btn-hover)',
                  },
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        ) : (
          <div>Please log in</div>
        )}
      </main>
      <div
        className={`${styles.backgroundOpac} ${styles.backgroundImg1} position-absolute top-0 bottom-0 start-0 end-0`}
      />
    </section>
  );
}
