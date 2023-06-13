'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import Input from './Input';
import { nameValidation } from '@/utils/form-validation';

interface IFormInputs {
  firstName: string;
  lastName: string;
}

const SignUpForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);
  return (
    <div>
      <h1>Create your account</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <Input
          id="firstName"
          label="First Name"
          register={register('firstName', nameValidation)}
        />
        <Input
          id="lastName"
          label="Last Name"
          register={register('lastName', nameValidation)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default SignUpForm;
