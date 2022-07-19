import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { login } from './userSlice';
import getCookie from '../../util/cookies';
import './form.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const name = useRef('');
  const inputHandler = (e) => {
    e.preventDefault();
    const user = {
      name: name.current.value,
    };
    dispatch(login(user));
    getCookie();
  };
  return (
    <div className="form-container">
      <form onSubmit={inputHandler} className="main-form login-form">
        <input type="text" ref={name} placeholder="User Name" required />
        <button type="submit"> Login </button>
      </form>
    </div>
  );
};

export default LoginForm;
