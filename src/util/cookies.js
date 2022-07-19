const getCookie = () => {
  const cookie = document.cookie;
  console.log(cookie);
  if (cookie.includes('user_name')) {
    const cookies = cookie.split('=');
    return cookies[cookies.length - 1];
  }
  return undefined;
};

export default getCookie;
