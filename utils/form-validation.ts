import { RegisterOptions } from 'react-hook-form';

const required = 'This is a required field';

export const nameValidation: RegisterOptions = {
  required,
  maxLength: 40,
};

export const phoneValidation: RegisterOptions = {
  required,
  minLength: 6,
  maxLength: 15,
};

export const passwordValidation: RegisterOptions = {
  required,
  pattern: {
    value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/i,
    message:
      'Password must have at least 8 characters and includes both letters and numbers',
  },
};

export const comfirmPasswordValidation = (
  password: string
): RegisterOptions => {
  return {
    required,
    validate: (value) => {
      console.log('value', value, password);
      return value === password || 'Password do not match';
    },
  };
};

export const emailValidation: RegisterOptions = {
  required,
  pattern: {
    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
    message: 'Please enter a valid email',
  },
};
