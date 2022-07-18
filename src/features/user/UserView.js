import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { login } from './userSlice';

const UserView = () => {
  const dispatch = useDispatch();
  const name = useRef('');
  // const email = useRef('');
  const inputHandler = (e) => {
    e.preventDefault();
    const user = {
      name: name.current.value,
    };
    dispatch(login(user));
  };
  return (
    <div>
      <form onSubmit={inputHandler}>
        <input type="text" ref={name} placeholder="User Name" required />
        {/* <input type="email" ref={email} placeholder="Email" required /> */}
        <button type="submit"> Sign up </button>
      </form>
    </div>
  );
};

export default UserView;
