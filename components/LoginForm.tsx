'use client';

import React from 'react';
import {
  useForm,
  SubmitHandler,
  UseFormRegisterReturn,
  FieldErrors,
} from 'react-hook-form';
import Input from './Input';
import { Button, Paper, Box, Typography } from '@mui/material';
import { title } from 'process';

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
  const titles = ['Home', 'About', 'Contact', 'Blog'];
  return (
    <div className="tw-py-10 tw-px-12 w-1 tw-border-solid tw-border-[#A4A4A4] tw-border-[1.5px] tw-rounded-lg">
      <h1 className="tw-m-0">Please login to continue</h1>
      {/* <form onSubmit={handleSubmit(onSubmit)} className="tw-grid tw-pt-6">
        <div className="tw-grid tw-gap-6">
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
            required
            placeholder="Enter your email"
            error={errors.email}
          />
          <Input
            id="password"
            label="Password"
            register={register('password', {
              required: 'Please enter your password',
            })}
            required
            placeholder="Enter your password"
            type="password"
            error={errors.password}
          />
        </div>
        <a className="tw-w-fit tw-justify-self-end tw-mt-2" href="#">
          Forgot Password?
        </a>
        <Button
        sx={{}}
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
      </form> */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
          // gridTemplateRows: 'repeat(2, 1fr)',
          columnGap: '1rem',
          rowGap: '1rem',
        }}
      >
        {titles.map((title) => (
          <Paper
            key={title}
            elevation={3}
            variant="outlined"
            className="tw-box-border tw-p-3"
          >
            <Typography variant="h3">{title}</Typography>
            <Typography>
              Of many texting trends, a system known as microblogging has
              surfaced, which consists of a miniaturized blog, inspired mainly
              by people tendency to jot down informal thoughts and post them
              online. They consist of websites like Twitter and its Chinese
              equivalent Weibo (微博). As of 2016, both of these websites were
              popular.
            </Typography>
            <Button
              variant="contained"
              // sx={{ bgcolor: 'black', color: 'white', mt: 1, ":hover" }}
            >
              Do something
            </Button>
          </Paper>
        ))}
      </Box>
    </div>
  );
};
export default LoginForm;
