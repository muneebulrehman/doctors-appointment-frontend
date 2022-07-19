import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login } from './userSlice';
import './form.css';

const LoginForm = () => {
  const userExists = useSelector((state) => state.user.user);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const name = useRef('');
  const inputHandler = (e) => {
    e.preventDefault();
    const user = {
      name: name.current.value,
    };
    dispatch(login(user));
  };
  useEffect(() => {
    if (userExists && userExists.success) {
      nav('/doctors');
      window.location.reload();
    }
  }, [userExists]);

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
