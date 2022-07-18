import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '../config';

const baseUrl = config.url;

export const api = createApi({
  reducerPath: 'backendApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAppointments: builder.query({
      query: () => 'appointments/',
    }),
    getAppointment: builder.query({
      query: (id) => `appointments/${id}`,
    }),
  }),
});

export const { useGetAppointmentsQuery, useGetAppointmentQuery } = api;
