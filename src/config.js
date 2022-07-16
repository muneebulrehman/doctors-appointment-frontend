export default {
  url:
    process.env.NODE_ENV === 'production'
      ? 'https://doctors-appointment-backend.herokuapp.com/api'
      : '/api',
};
