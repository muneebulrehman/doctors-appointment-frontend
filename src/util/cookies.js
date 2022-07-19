const getCookie = () => {
  const cookie = document.cookie;
  if (cookie.includes('user_name')) {
    console.log(typeof cookie);
    const cookies = cookie.split('=');
    return cookies[cookies.length - 1];
  }
  return undefined;
};

export default getCookie;
