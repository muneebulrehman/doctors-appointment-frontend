const getCookie = () => {
  const { cookie } = document;
  return cookie;
};

const setCookie = (name) => {
  const cookie = `user_name=${name}`;
  return cookie;
};

export { getCookie, setCookie };

// export const deleteCookie = () => {};
