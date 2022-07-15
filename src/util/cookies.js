const getCookie = () => {
  const cookie = document.cookie;
  console.log(cookie);
  return cookie;
};

const setCookie = (name) => {
  const cookie = `user_name=${name}`;
};

export { getCookie, setCookie };

// export const deleteCookie = () => {};
