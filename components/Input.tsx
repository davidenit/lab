import React, { InputHTMLAttributes } from 'react';
import {
  UseFormRegisterReturn,
  // useForm, // don't need this import
} from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  register: UseFormRegisterReturn; // declare register props
  className?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  register,
  className,
  ...rest
}) => {
  return (
    <div className={className ?? 'tw-flex tw-flex-col'}>
      <label htmlFor={id} className="tw-text-lg">
        {label}
      </label>
      <input
        className="tw-py-[14.5px] tw-px-4"
        type="text"
        id={id}
        {...register}
        {...rest}
      />
    </div>
  );
};

export default Input;
