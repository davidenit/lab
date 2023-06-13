'use client';

import React from 'react';
import {
  useForm,
  SubmitHandler,
  UseFormRegisterReturn,
  FieldErrors,
} from 'react-hook-form';
import Input from './Input';

interface IFormInputs {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  return (
    <div>
      <h1>Please login to continue</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <Input
          id="email"
          label="Email"
          register={register('email', {
            required: 'Email Address is required',
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
              message: 'Please enter a valid email',
            },
          })}
          placeholder="Enter your email"
        />
        <Input
          id="password"
          label="Password"
          register={register('password')}
          placeholder="Enter your password"
          type="password"
        />
        <button type="submit">Submit</button>
      </form>
      {errors && errors.email?.message}
    </div>
  );
};
export default LoginForm;
