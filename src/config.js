export default {
  url:
    process.env.NODE_ENV === 'production'
      ? 'https://doctors-appointment-backend.herokuapp.com/api'
      : '/api',
  mobileBreakPoint: 767.98,
  baseUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://doctors-appointment-backend.herokuapp.com/api'
      : '/api',
  // baseUrl: 'http://localhost:3001/api',
};

// export const baseUrl =
