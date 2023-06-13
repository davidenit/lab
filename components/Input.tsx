import React, { InputHTMLAttributes } from 'react';
import {
  FieldError,
  UseFormRegisterReturn,
  useForm,
  // useForm, // don't need this import
} from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  register: UseFormRegisterReturn; // declare register props
  className?: string;
  error?: FieldError;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  register,
  className,
  error,
  required,
  type,
  ...rest
}) => {
  switch (type) {
    case 'checkbox':
      return (
        <div className={className ?? 'tw-flex'}>
          <input
            className="tw-accent-primary"
            type={type}
            id={id}
            {...register}
            {...rest}
          />
          <label
            htmlFor={id}
            className="tw-text-base tw-leading-[19.2px] md:tw-leading-6"
          >
            {label}
            {required && <span className="tw-text-primary">*</span>}
          </label>
          {error && (
            <p className="tw-m-0 tw-text-primary tw-text-sm">{error.message}</p>
          )}
        </div>
      );

    default:
      return (
        <div className={className ?? 'tw-flex tw-flex-col'}>
          <label
            htmlFor={id}
            className="tw-text-base md:tw-text-xl tw-leading-[19.2px] md:tw-leading-6"
          >
            {label}
            {required && <span className="tw-text-primary">*</span>}
          </label>
          <input
            className="tw-py-[14.5px] tw-px-4 tw-mt-2 tw-rounded-md tw-border-[1px] tw-border-[#A4A4A4] focus-visible:tw-outline-none"
            type={type}
            id={id}
            {...register}
            {...rest}
          />
          {error && (
            <p className="tw-m-0 tw-text-primary tw-text-sm">{error.message}</p>
          )}
        </div>
      );
  }
};

export default Input;
