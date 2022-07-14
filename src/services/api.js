import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://doctors-appointment-backend.herokuapp.com/api'
    : '/';

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

export const { useGetAppointments, useGetAppointment } = api;
