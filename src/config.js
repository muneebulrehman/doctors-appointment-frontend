export default {
  url:
    process.env.NODE_ENV === 'production'
      ? 'https://evening-ravine-92387.herokuapp.com/https://doctors-appointment-backend.herokuapp.com/api'
      : '/api',
  mobileBreakPoint: 767.98,
};
