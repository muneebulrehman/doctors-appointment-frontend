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
    <div>
      <form onSubmit={inputHandler}></form>
    </div>
  );
};

export default RegisterForm;
