import { useParams } from 'react-router-dom';

import { useGetAppointmentQuery } from '../../services/api';

export default function AppointmentShow() {
  const { appointmentId } = useParams();
  const appointment = useGetAppointmentQuery(appointmentId);

  return <div>{Object.keys(appointment)}</div>;
}
