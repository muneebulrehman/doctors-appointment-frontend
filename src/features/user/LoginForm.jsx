import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { login } from './userSlice';
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
  };
  return (
    <div className="login-container">
      <form onSubmit={inputHandler} className="login-form">
        <input type="text" ref={name} placeholder="User Name" required />
        <button type="submit"> Login </button>
      </form>
    </div>
  );
};

export default LoginForm;
