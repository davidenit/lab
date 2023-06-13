'use client';

import React from 'react';
import {
  useForm,
  SubmitHandler,
  UseFormRegisterReturn,
  FieldErrors,
} from 'react-hook-form';
import Input from './Input';
import { Button } from '@mui/material';
import {
  comfirmPasswordValidation,
  emailValidation,
  passwordValidation,
} from '@/utils/form-validation';

interface IFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
  rememberMyPassword: boolean;
}

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  const password = watch('password');

  console.log('password', password);

  return (
    <div className="tw-py-10 tw-px-12 tw-max-w-[544px] tw-border-solid tw-border-[#A4A4A4] tw-border-[1.5px] tw-rounded-lg">
      <h1 className="tw-m-0">Please login to continue</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="tw-grid tw-pt-6">
        <div className="tw-grid tw-gap-6">
          <Input
            id="email"
            label="Email"
            register={register('email', emailValidation)}
            required
            placeholder="Enter your email"
            error={errors.email}
          />
          <Input
            id="password"
            label="Password"
            register={register('password', passwordValidation)}
            required
            placeholder="Confirm your password"
            type="password"
            error={errors.password}
          />
          <Input
            id="confirmPassword"
            label="Confirm Password"
            register={register(
              'confirmPassword',
              comfirmPasswordValidation(password)
            )}
            required
            placeholder="Enter your password"
            type="password"
            error={errors.confirmPassword}
          />
        </div>
        <Input
          className="tw-flex-row-reverse tw-flex tw-justify-self-end tw-mt-4"
          id="rememberMyPassword"
          label="Remember My Password"
          register={register('rememberMyPassword')}
          type="checkbox"
        />
        <a className="tw-w-fit tw-justify-self-end tw-mt-2" href="#">
          Forgot Password?
        </a>
        <Button
          type="submit"
          variant="contained"
          size="large"
          className="tw-w-[288px] tw-justify-self-center !tw-mt-9"
        >
          CONTINUE TO DELIVERY
        </Button>
        <span className="tw-mt-2 tw-text-primary tw-justify-self-center tw-text-sm tw-font-[450]">
          BACK TO CART
        </span>
      </form>
    </div>
  );
};
export default LoginForm;
