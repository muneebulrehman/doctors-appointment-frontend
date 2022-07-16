import config from '../config';

const post = (route, data) =>
  // console.log(data);
  fetch(`${config.url}/${route}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
export default { post };
