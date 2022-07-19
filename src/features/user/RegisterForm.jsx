import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { signUp } from './userSlice';
import './form.css';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const name = useRef('name');
  const email = useRef('email');
  const inputHandler = (e) => {
    e.preventDefault();
    const user = {
      name: name.current.value,
      email: email.current.value,
    };
    dispatch(signUp(user));
  };
  return (
    <div className="form-container">
      <form onSubmit={inputHandler} className="main-form reg-form ">
        <input type="text" ref={name} placeholder="User Name" required />
        <input type="email" ref={email} placeholder="Email" required />
        <button type="submit"> Sign Up </button>
      </form>
    </div>
  );
};

export default RegisterForm;
