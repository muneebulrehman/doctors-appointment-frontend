import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '../config';
import routesApi from '../routesApi';

const baseUrl = config.url;

export const api = createApi({
  reducerPath: 'backendApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Appointment'],
  endpoints: (build) => ({
    getAppointments: build.query({
      query: () => routesApi.APPOINTMENT,
      providesTags: ['Appointment'],
    }),
    getAppointment: build.query({
      query: (id) => `${routesApi.APPOINTMENT}/${id}`,
    }),
    createAppointment: build.mutation({
      query: (body) => ({
        url: routesApi.APPOINTMENT,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Appointment'],
    }),
  }),
});

export const {
  useGetAppointmentsQuery,
  useGetAppointmentQuery,
  useCreateAppointmentMutation,
} = api;
