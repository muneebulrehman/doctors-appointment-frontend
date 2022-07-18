import { useGetAppointmentsQuery } from '../../services/api';

export default function AppointmentsIndex() {
  const appointments = useGetAppointmentsQuery();
  return <div>{Object.keys(appointments)}</div>;
}
