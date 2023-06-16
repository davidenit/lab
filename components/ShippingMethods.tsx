'use-client';

import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import styles from './ShippingMethods.module.css';

const data = [
  {
    text1: 'Delivery',
    text2: 'Normal | 10.00 SGD',
    id: 1,
  },
  {
    text1: 'Store Pickup',
    text2: 'Store Pickup with Locator | 0.00 SGD',
    id: 2,
  },
];

const dataAddress = [
  {
    id: 1,
    text1: 'Veronica 1',
    text2:
      '6146 Honey Bluff Parkway Calder, Michigan 49628-7978 United States (555) 229-3326',
  },
  {
    id: 2,
    text1: 'Veronica 2',
    text2:
      '6146 Honey Bluff Parkway Calder, Michigan 49628-7978 United States (555) 229-3326',
  },
  {
    id: 3,
    text1: 'Veronica 3',
    text2:
      '6146 Honey Bluff Parkway Calder, Michigan 49628-7978 United States (555) 229-3326',
  },
  {
    id: 4,
    text1: 'Veronica 4',
    text2:
      '6146 Honey Bluff Parkway Calder, Michigan 49628-7978, United States, (555) 229-3326',
  },
];

function ShippingMethods() {
  const form = useForm({
    defaultValues: {
      ShippingMethods: 'Delivery',
      ShippingDelivery: 'Veronica 1',
    },
    // mode: 'all',
  });

  const { register, watch, handleSubmit } = form;

  const onSubmit = (data: any) => {
    console.log('data', data);
  };

  return (
    <div className="tw-flex tw-justify-center tw-max-w-[820px] tw-m-20">
      <div>
        <h1 className="tw-text-2xl">Shipping Methods</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={`tw-grid tw-grid-cols-2 tw-gap-8 tw-pb-8 `}>
            {data.map((item) => (
              <div
                className={`tw-w-full tw-h-[88px] tw-rounded-[6px] tw-border tw-border-[#A4A4A4] tw-border-solid tw-cursor-pointer   ${
                  watch('ShippingMethods') === item.text1 && styles.checkedTotal
                }`}
                key={item.id}
              >
                <label
                  htmlFor={item.text1}
                  className={`tw-flex tw-flex-row tw-p-[17px] tw-cursor-pointer`}
                >
                  <div>
                    <input
                      type="radio"
                      id={item.text1}
                      value={item.text1}
                      className={`tw-mr-3 ${styles.circleBorder}  
                    ${
                      watch('ShippingMethods') === item.text1 &&
                      styles.circleHandle
                    }`}
                      {...register('ShippingMethods')}
                    />
                  </div>
                  <div className="tw-flex tw-flex-col tw-cursor-pointer">
                    <span className="tw-text-lg tw-text-[#191817] tw-font-[390]">
                      {item.text1}
                    </span>
                    <span className="tw-font-[300]">{item.text2}</span>
                  </div>
                </label>
              </div>
            ))}
          </div>

          <div className="tw-mt-8">
            <h1 className="tw-text-2xl ">Shipping Address</h1>

            <div className="tw-grid tw-grid-cols-2 tw-gap-8">
              {dataAddress.map((item) => (
                <label
                  htmlFor={item.text1}
                  key={item.id}
                  className={`tw-w-full tw-h-full tw-rounded-md tw-cursor-pointer ${
                    watch('ShippingDelivery') === item.text1 &&
                    styles.checkedTotal
                  } `}
                >
                  <input
                    type="radio"
                    id={item.text1}
                    className={styles.addressCheckbox}
                    value={item.text1}
                    {...register('ShippingDelivery')}
                  />
                  <div className="tw-mt-[17px] tw-mr-[52px] tw-mb-[18px] tw-ml-[16px]">
                    <h3 className="tw-text-lg tw-m-0 tw-font-normal">
                      {item.text1}
                    </h3>
                    <div className="tw-mt-2">
                      <p className="tw-font-light tw-m-0">{item.text2}</p>
                    </div>

                    <p
                      className={`tw-max-w-fit ${
                        watch('ShippingDelivery') === item.text1
                          ? ' tw-bg-[#A4A4A4] tw-border-[#A4A4A4]'
                          : 'tw-bg-[red] tw-border-[red]'
                      }  tw-text-[white] tw-border-[1px]  tw-border-solid tw-px-4 tw-py-1 tw-text-sm tw-uppercase tw-font-medium tw-rounded tw-mt-[20px] tw-transition tw-duration-700 tw-ease-linear`}
                    >
                      {watch('ShippingDelivery') === item.text1
                        ? 'Selected'
                        : 'Ship here'}
                    </p>
                  </div>
                </label>
              ))}
            </div>
            <button
              className="tw-uppercase tw-text-sm tw-text-[red] tw-rounded-[6px] tw-border tw-border-[red] tw-border-solid tw-px-4 tw-py-1 tw-bg-[white] tw-text-left tw-cursor-pointer tw-float-right tw-mt-3"
              onClick={(e) => e.preventDefault()}
            >
              new address
            </button>
          </div>
          <button>submit</button>
        </form>

        {/* Step 2 */}
      </div>
      <div className="">
        <h1>Hello world</h1>
      </div>
    </div>
  );
}

export default ShippingMethods;
