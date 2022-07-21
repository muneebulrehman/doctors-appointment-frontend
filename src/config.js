const obj = {
  url:
    process.env.NODE_ENV === 'production'
      ? 'https://doctors-appointment-backend.herokuapp.com/api'
      : '/api',
  mobileBreakPoint: 767.98,
};

export default obj;
